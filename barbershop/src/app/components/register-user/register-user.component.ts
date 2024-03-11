import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../Interfaces/User';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    UserFormComponent
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  titleForm: string = "Formulário de Registro";
  btnTitle: string = "Cadastrar-se";

  registerUser(user: User) {
    console.log(user);
  }
}
