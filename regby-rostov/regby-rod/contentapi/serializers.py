from rest_framework import serializers

from .models import *

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = (
            'id', 'title', 'img',
            'text', 'pub_date', 'source'
        )

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'id', 'title', 'date', 'text',
        )

class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = (
            'id', 'title', 'text'
        )

class CommentSerializer(serializers.ModelSerializer):
    this_new = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Comment
        fields = (
            'autor', 'text', 'pub_date', 'this_new'
        )

class AlbomSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Albom
        fields = (
            'id', 'title', 'pub_date', 'image',
        )
    def get_image(self, albom):
        request = self.context.get('request')
        image = Photo.objects.filter(albom__exact = albom)[0].image.url
        return request.build_absolute_uri(image)

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = (
            'id', 'image'
        )