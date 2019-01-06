from django.db import models

class Item(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField(null=True)
	amount = models.IntegerField()