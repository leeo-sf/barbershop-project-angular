import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../Interfaces/User';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  @Input() btnTitle!: string;
  @Input() titleForm!: string;
  @Output() onSubmit = new EventEmitter<User>();
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      cpf: new FormControl(''),
      gender: new FormControl(''),
      address: new FormGroup({
        zipCode: new FormControl(''),
        publicPlace: new FormControl(''),
        neighborhood: new FormControl(''),
        locality: new FormControl('')
      }),
      telephone: new FormControl(''),
      birthDate: new FormControl(''),
      profile: new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
        //image
        //accountcategory
      })
    });
  }

  searchZipCode() {
    const cep = this.cep().value;
    console.log('buscando cep ' + cep);
  }

  cep() {
    return this.form.get('cep')!;
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.onSubmit.emit(this.form.value);
  }
}
