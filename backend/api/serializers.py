from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import FileStorage, StudentData, Hm, Selected_Hm

class FileStorageSerializer(ModelSerializer):
    class Meta:
        model = FileStorage
        fields = '__all__'

class HmSerializer(ModelSerializer):
    class Meta:
        model = Hm
        fields = '__all__'
class StudentDataSerializer(ModelSerializer):
    class Meta:
        model = StudentData
        fields = '__all__'


class Selected_HmSerializer(ModelSerializer):
    class Meta:
        model = Selected_Hm
        fields = '__all__'