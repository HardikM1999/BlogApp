from django.urls import path
from . import views

urlpatterns = [
    path('posts/<mode>',views.PostList.as_view()),
    path('post/<id>/',views.PostDetail.as_view()),
    path('author/<id>/',views.AuthorDetail.as_view())
]