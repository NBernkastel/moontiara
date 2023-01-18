from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.forms import TextInput, CharField, PasswordInput



# Create your forms here.

class NewUserForm(UserCreationForm):
    password1 = CharField(label='pass', widget=PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Пароль'}))
    password2 = CharField(label='pass',
                          widget=PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Подтверждение пароля'}))
    email = CharField(label='pass', widget=TextInput(attrs={'class': 'form-control', 'placeholder': 'Мыло'}))
    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")
        widgets = {
            'username': TextInput(attrs={'class': 'form-control', 'placeholder': 'Логин'}),
        }


class LoginUserForm(AuthenticationForm):
    username = CharField(label='pass', widget=TextInput(attrs={'class': 'form-control', 'placeholder': 'Valid', 'aria-invalid':'false','id':'852'}))
    password = CharField(label='pass', widget=PasswordInput(attrs={'class': 'form-control', 'placeholder': 'password'}))
