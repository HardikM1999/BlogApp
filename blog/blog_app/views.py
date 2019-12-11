from django.shortcuts import render
from .serializers import PostSerializer,CommentSerializer,AuthorSerializer
from .models import Post,PostComment,Author
from rest_framework import generics


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.ListAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        name = self.kwargs['name']
        return Post.objects.filter(name=name)