# Generated by Django 3.0.8 on 2022-04-02 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('codes', '0003_post_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=100)),
                ('book_image_url', models.URLField()),
                ('author', models.CharField(max_length=100)),
                ('book_url', models.URLField()),
                ('rating', models.IntegerField()),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]
