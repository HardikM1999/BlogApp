# Generated by Django 3.0 on 2020-01-24 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='author',
            options={'ordering': ['user', 'name', 'author_info']},
        ),
        migrations.AddField(
            model_name='author',
            name='name',
            field=models.CharField(default=1, max_length=80),
            preserve_default=False,
        ),
    ]
