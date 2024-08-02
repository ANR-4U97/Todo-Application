import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteService } from './routers/route.service';
import { UpdateComponent } from './update/update.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  { path: 'home/:name', component: WelcomeComponent, canActivate: [RouteService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteService] },
  { path: 'login', component: LoginComponent },
  { path: 'update/:id', component: UpdateComponent, canActivate: [RouteService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteService] },
  { path: 'saveNewTodo', component:AddTodoComponent, canActivate:[RouteService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
