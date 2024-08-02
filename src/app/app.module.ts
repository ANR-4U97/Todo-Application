import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EroorComponent } from './eroor/eroor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HttpInterceptorForBasicAuthenticationService } from './service/http/http-interceptor-for-basic-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EroorComponent,
    WelcomeComponent,
    ListTodosComponent,
    LogoutComponent,
    UpdateComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorForBasicAuthenticationService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
