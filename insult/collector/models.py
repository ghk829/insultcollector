# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.

class Message(models.Model):
    user_key = models.CharField(max_length=250)
    type = models.CharField(max_length=250)
    content = models.CharField(max_length=250)