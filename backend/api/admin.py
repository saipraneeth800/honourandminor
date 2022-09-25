from django.contrib import admin
from .models import FileStorage, StudentData, Hm, Selected_Hm

class FileStorageAdmin(admin.ModelAdmin):
    list_display = ('sdata', 'created_at', 'updated_at')
    search_fields = ('sdata',)
    list_per_page = 30

class HmAdmin(admin.ModelAdmin):
    list_display = ('regulation', 'academic_year', 'department','created_at', 'updated_at')
    search_fields = ('regulation','academic_year', 'department','created_at', 'updated_at')
    list_per_page = 30

class StudentDataAdmin(admin.ModelAdmin):
    list_display = ('sid', 'sname','sdept', 'scgpa')
    search_fields = ('sid', 'sname', 'scgpa')
    list_per_page = 30

class Selected_HmAdmin(admin.ModelAdmin):
    list_display = ('ssid','created_at','updated_at')
    search_fields = ('ssid', 'shonours', 'sminors')
    list_per_page = 30

admin.site.register(FileStorage,FileStorageAdmin)
admin.site.register(Hm,HmAdmin)
admin.site.register(StudentData, StudentDataAdmin)
admin.site.register(Selected_Hm,Selected_HmAdmin)
