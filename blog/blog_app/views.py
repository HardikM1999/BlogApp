from django.shortcuts import render
from .serializers import PostSerializer,CommentSerializer,AuthorSerializer
from .models import Post,PostComment,Author
from rest_framework import generics


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class AuthorDetail(generics.ListAPIView):
    serializer_class = AuthorSerializer
    def get_queryset(self):
        id = self.kwargs['id']
        return Author.objects.filter(id=id)

class PostDetail(generics.ListAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        id = self.kwargs['id']
        return Post.objects.filter(id=id)