from django.db import models
from datetime import datetime



class StudentData(models.Model):
    sid = models.CharField(max_length=15)
    sname = models.CharField(max_length=30)
    sdept = models.CharField(max_length=30)
    scgpa = models.FloatField(max_length=10)

    
    
class FileStorage(models.Model):
    sdata = models.FileField(upload_to='files')
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Ordering:
        order = ['-created_at']

    

class Hm(models.Model):
    regulation = models.TextField(max_length=5, blank=True)
    academic_year = models.TextField(max_length=12, blank=True)
    department = models.TextField(max_length=20,blank=True)
    no_honours = models.IntegerField(blank=True, null=True)

    honour1= models.TextField(max_length=20,blank=True,null=True)
    honourmax1 = models.IntegerField(blank=True, null=True)
    honourmin1 = models.IntegerField(blank=True, null=True)

    honour2= models.TextField(max_length=20,blank=True,null=True)
    honourmax2 = models.IntegerField(blank=True, null=True)
    honourmin2 = models.IntegerField(blank=True, null=True)

    honour3= models.TextField(max_length=20,blank=True,null=True)
    honourmax3= models.IntegerField(blank=True, null=True)
    honourmin3 = models.IntegerField(blank=True, null=True)

    honour4= models.TextField(max_length=20,blank=True,null=True)
    honourmax4 = models.IntegerField(blank=True, null=True)
    honourmin4 = models.IntegerField(blank=True, null=True)

    honour5= models.TextField(max_length=20,blank=True,null=True)
    honourmax5 = models.IntegerField(blank=True, null=True)
    honourmin5 = models.IntegerField(blank=True, null=True)

    honour6= models.TextField(max_length=20,blank=True,null=True)
    honourmax6 = models.IntegerField(blank=True, null=True)
    honourmin6 = models.IntegerField(blank=True, null=True)

    honour7= models.TextField(max_length=20,blank=True,null=True)
    honourmax7 = models.IntegerField(blank=True, null=True)
    honourmin7 = models.IntegerField(blank=True, null=True)

    honour8= models.TextField(max_length=20,blank=True,null=True)
    honourmax8 = models.IntegerField(blank=True, null=True)
    honourmin8 = models.IntegerField(blank=True, null=True)

    honour9= models.TextField(max_length=20,blank=True,null=True)
    honourmax9 = models.IntegerField(blank=True, null=True)
    honourmin9 = models.IntegerField(blank=True, null=True)

    honour10= models.TextField(max_length=20,blank=True,null=True)
    honourmax10 = models.IntegerField(blank=True, null=True)
    honourmin10 = models.IntegerField(blank=True, null=True)



    no_minors = models.IntegerField(blank=True, null=True)


    minor1 = models.TextField(max_length=20,blank=True,null=True)
    minormax1 = models.IntegerField(blank=True, null=True)
    minormin1 = models.IntegerField(blank=True, null=True)
    
    minor2 = models.TextField(max_length=20,blank=True,null=True)
    minormax2 = models.IntegerField(blank=True, null=True)
    minormin2 = models.IntegerField(blank=True, null=True)

    minor3 = models.TextField(max_length=20,blank=True,null=True)
    minormax3 = models.IntegerField(blank=True, null=True)
    minormin3 = models.IntegerField(blank=True, null=True)

    minor4 = models.TextField(max_length=20,blank=True,null=True)
    minormax4 = models.IntegerField(blank=True, null=True)
    minormin4 = models.IntegerField(blank=True, null=True)

    minor5 = models.TextField(max_length=20,blank=True,null=True)
    minormax5 = models.IntegerField(blank=True, null=True)
    minormin5 = models.IntegerField(blank=True, null=True)

    minor6 = models.TextField(max_length=20,blank=True,null=True)
    minormax6 = models.IntegerField(blank=True, null=True)
    minormin6 = models.IntegerField(blank=True, null=True)

    minor7 = models.TextField(max_length=20,blank=True,null=True)
    minormax7 = models.IntegerField(blank=True, null=True)
    minormin7 = models.IntegerField(blank=True, null=True)

    minor8 = models.TextField(max_length=20,blank=True,null=True)
    minormax8 = models.IntegerField(blank=True, null=True)
    minormin8 = models.IntegerField(blank=True, null=True)

    minor9 = models.TextField(max_length=20,blank=True,null=True)
    minormax9 = models.IntegerField(blank=True, null=True)
    minormin9 = models.IntegerField(blank=True, null=True)

    minor10 = models.TextField(max_length=20,blank=True,null=True)
    minormax10 = models.IntegerField(blank=True, null=True)
    minormin10 = models.IntegerField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Ordering:
        order = ['-created_at']


   


class Selected_Hm(models.Model):
    ssid = models.CharField(max_length=20,primary_key=True)

    Hpriority = models.IntegerField(blank=True, null=True)
    Mpriority = models.IntegerField(blank=True, null=True)

    shonour1 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority1 = models.IntegerField(blank=True, null=True)
    shonour2 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority2 = models.IntegerField(blank=True, null=True)
    shonour3 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority3 = models.IntegerField(blank=True, null=True)
    shonour4 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority4 = models.IntegerField(blank=True, null=True)
    shonour5 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority5 = models.IntegerField(blank=True, null=True)
    shonour6 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority6 = models.IntegerField(blank=True, null=True)
    shonour7 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority7 = models.IntegerField(blank=True, null=True)
    shonour8 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority8 = models.IntegerField(blank=True, null=True)
    shonour9 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority9 = models.IntegerField(blank=True, null=True)
    shonour10 = models.TextField(max_length=30,blank=True,null=True)
    honour_priority10 = models.IntegerField(blank=True, null=True)

    sminor1 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority1 = models.IntegerField(blank=True, null=True)
    sminor2 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority2 = models.IntegerField(blank=True, null=True)
    sminor3 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority3 = models.IntegerField(blank=True, null=True)
    sminor4 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority4 = models.IntegerField(blank=True, null=True)
    sminor5 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority5 = models.IntegerField(blank=True, null=True)
    sminor6 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority6 = models.IntegerField(blank=True, null=True)
    sminor7 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority7 = models.IntegerField(blank=True, null=True)
    sminor8 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority8 = models.IntegerField(blank=True, null=True)
    sminor9 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority9 = models.IntegerField(blank=True, null=True)
    sminor10 = models.TextField(max_length=30,blank=True,null=True)
    minor_priority10 = models.IntegerField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)