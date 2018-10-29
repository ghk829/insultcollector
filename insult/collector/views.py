# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from serializers import MessageSerializer;
from models import Message;
from django.shortcuts import render

# Create your views here.
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all();
    serializer_class = MessageSerializer;