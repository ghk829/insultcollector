# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from serializers import MessageSerializer;
from models import Message;
from django.shortcuts import render
from django.http import JsonResponse


def keyboard(request):
    response = {'type':'buttons','buttons':['hello','world']}
    return JsonResponse(response)
# Create your views here.
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all();
    serializer_class = MessageSerializer;