from django.core.paginator import Paginator
from django.utils.timezone import now
from rest_framework.generics import ListAPIView

from .models import New, Event, Information
from .serializers import *

class NewsView(ListAPIView):
    serializer_class = NewsSerializer

    def get_queryset(self):
        queryset = Paginator(New.objects.all(), 4)
        page = self.request.query_params.get('page', 1)
        return queryset.page(page).object_list

class EventsView(ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
      mod = self.request.query_params.get('mod', 'new')
      if mod == 'new':
      	return Event.objects.filter(date__gt=now())[:4]

class InformationView(ListAPIView):
    serializer_class = InformationSerializer

    def get_queryset(self):
        queryset = Paginator(Information.objects.all(), 10)
        page = self.request.query_params.get('page', 1)
        return queryset.page(page).object_list

class CommentView(ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    # def get_queryset(self):
    #     queryset = Paginator(Comment.objects.all(), 10)
    #     page = self.request.query_params.get('page', 1)
    #     return queryset.page(page).object_list

class AlbomView(ListAPIView):
    serializer_class = AlbomSerializer

    def get_queryset(self):
        queryset = Paginator(Albom.objects.all(), 4)
        page = self.request.query_params.get('page', 1)
        return queryset.page(page).object_list

class PhotoView(ListAPIView):
    serializer_class = PhotoSerializer

    def get_queryset(self):
        albom_id = self.kwargs['albom_id']
        try:
            albom = Albom.objects.get(pk = albom_id)
        except:
            return []
        queryset = Paginator(Photo.objects.filter(albom = albom), 30)
        page = self.request.query_params.get('page', 1)
        return queryset.page(page).object_list