from rest_framework import serializers
from .models import Post,PostComment,Author

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('user','name','author_info')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('comment','author','post_date','post')


class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    comments = CommentSerializer(many=True,read_only=True)
    class Meta:
        model = Post
        fields = ('id','name','author','blog_post','post_date','comments','likes','dislikes')