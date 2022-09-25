from django.http import HttpResponse
from .serializers import FileStorageSerializer
from api.models import FileStorage
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView
from .models import Hm,FileStorage,Selected_Hm, StudentData
from .serializers import HmSerializer, FileStorageSerializer,Selected_HmSerializer,StudentDataSerializer

def hello(request):
    return HttpResponse("hello")

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def Endpoints(request):
    ep = [
        '/api/token',
        '/api/token/refresh'

    ]
    return Response(ep)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getHm(request):
    user = request.user
    hm = Hm.objects.all()
    # hm = user.Hm_set.all()
    serializer = HmSerializer(hm, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getSd(request):
    user = request.user
    Sd = StudentData.objects.all()
    # hm = user.Hm_set.all()
    serializer = StudentDataSerializer(Sd, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getShm(request):
    user = request.user
    Shm = Selected_Hm.objects.all()
    # hm = user.Hm_set.all()
    serializer = Selected_HmSerializer(Shm, many=True)
    return Response(serializer.data)


        
        


class HmCreateView(CreateAPIView):
    inputdata = Hm.objects.all()
    serializer_class=HmSerializer

class FileStorageCreateView(CreateAPIView):
    inputdata = FileStorage.objects.all()
    serializer_class=FileStorageSerializer


class Selected_HmCreateView(CreateAPIView):
    inputdata = Selected_Hm.objects.all()
    serializer_class=Selected_HmSerializer


class StudentDataCreateView(CreateAPIView):
    inputdata = StudentData.objects.all()
    serializer_class=StudentDataSerializer