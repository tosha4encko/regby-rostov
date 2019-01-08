from django.contrib import admin

from .models import *

admin.site.register(New)
admin.site.register(Event)
admin.site.register(Information)

class PhotoInline(admin.StackedInline):
    model = Photo
    extra = 1


class AlbomAdmin(admin.ModelAdmin):
  inlines = [PhotoInline]

admin.site.register(Albom, AlbomAdmin)