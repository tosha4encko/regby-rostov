from django.contrib.gis import admin
from django.urls import path
from django.conf.urls import url, include

from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.conf import settings

urlpatterns = []
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()
urlpatterns += [
    path('admin/', admin.site.urls),
    url(r'^api/', include('contentapi.urls')),
    url(r'^', include('main.urls')),
]

