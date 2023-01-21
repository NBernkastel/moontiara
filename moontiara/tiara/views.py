from django.contrib import messages
from django.contrib.auth import logout, login
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView
import asyncio
from .forms import NewUserForm, LoginUserForm


def index(request):
    return render(request, 'tiara/base.html')

def about(request):
    return render(request, 'tiara/about.html')

# def register_request(request):
#     if request.method == "POST":
#         form = NewUserForm(request.POST)
#         if form.is_valid():
#             form.save()
#             # username = form.cleaned_data['username']
#             # password = form.cleaned_data['password1']
#             return redirect('home')
#         else:
#             messages.error(request, ('Registration notSuccses'))
#     else:
#         form = NewUserForm()
#     return render(request=request, template_name="tiara/sign.html", context={"form": form})
class RegisterUser(CreateView):
    form_class = NewUserForm
    template_name = "tiara/sign.html"
    success_url = reverse_lazy('home')

    # def get_context_data(self, **kwargs):
    #     return {'form': NewUserForm()}

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('home')

class LoginUser(LoginView):
    form_class = LoginUserForm
    template_name = 'tiara/login.html'

    # def get_context_data(self, **kwargs):
    #     return {'form': LoginUserForm()}
    def get_success_url(self):
        return reverse_lazy('home')


def logout_user(request):
    logout(request)
    return redirect('login')
