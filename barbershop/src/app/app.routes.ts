import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterUserComponent}
];
