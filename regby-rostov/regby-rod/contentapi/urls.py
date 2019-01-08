from django.conf.urls import url
from .views import *

urlpatterns = [
	url(r'^news/', NewsView.as_view()),
	url(r'^events/', EventsView.as_view()),
	url(r'^informations/', InformationView.as_view()),
	url(r'^comments/', CommentView.as_view()),
	url(r'^photos/(?P<albom_id>[0-9]+)', PhotoView.as_view()),
	url(r'^alboms/', AlbomView.as_view()),
]