from rest_framework import serializers
from .models import Post,PostComment,Author

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('user','author_info')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('name','author','blog_post','post_date')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('comment','author','post_date','post')