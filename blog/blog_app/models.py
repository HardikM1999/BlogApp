from django.db import models
from django.contrib.auth.models import User
from datetime import date

class Author(models.Model):
    """
    This Model Class represents authors.
    """
    user = models.OneToOneField(User,on_delete=models.SET_NULL,null=True)
    author_info = models.TextField(max_length=400,help_text="Enter Author Info Here.")

    class Meta:
        ordering = ["user","author_info"]
    def __str__(self):
        return self.user.username


class Post(models.Model):
    """
    Model represents a Blog Post.
    """
    name = models.CharField(max_length=150)
    author = models.ForeignKey(Author,on_delete=models.SET_NULL,null=True)
    blog_post = models.TextField(max_length=4000,help_text="Enter your blog post here.")
    post_date = models.DateField(default = date.today)
    
    class Meta:
        ordering = ["name","author","blog_post","post_date"]

    def __str__(self):
        return self.name

class PostComment(models.Model):
    """
    Model representing comments on a specific blog post.
    """
    comment = models.TextField(max_length = 200,help_text = "Enter Comment here.")
    author = models.ForeignKey(Author,on_delete=models.SET_NULL,null=True)
    post_date = models.DateField(default = date.today)
    post = models.ForeignKey(Post,on_delete=models.CASCADE)


    def __str__(self):
        len_title = 30
        if(len(self.comment) > len_title):
            return self.comment[:len_title] + '...'
        else:
            return self.comment
