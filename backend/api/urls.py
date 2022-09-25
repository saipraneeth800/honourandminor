from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (TokenRefreshView,)
from .views import getShm, hello, Endpoints, MyTokenObtainPairView, getHm, getSd, HmCreateView, FileStorageCreateView, Selected_HmCreateView, StudentDataCreateView

urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/api/v2/data/honoursandminors/hm', getHm),
    path('v1/api/v2/data/selectedHm/Shm', getShm),
    path('v1/api/v2/data/StudentData', getSd),
    path('v2/v1/api/honoursandminors/data/add', HmCreateView.as_view()),
    path('v3/files/v1/api/eligibility/data/add',
         FileStorageCreateView.as_view()),
    path('v3/hm/v1/api/selected/data/add', Selected_HmCreateView.as_view()),
    path('v3/hm/v1/api/StudentData', StudentDataCreateView.as_view()),
    # path('v3/hm/v1/api/StudentData/add', StudentDataCreateView.as_view()),
    path('hi', hello, name='hello'),
    path('v1/', Endpoints, name='endpoints'),
]
