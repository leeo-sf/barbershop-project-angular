import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Interfaces/User';
import { GenderServiceService } from '../../services/gender-service.service';
import { Gender } from '../../Interfaces/Gender';
import { NgFor } from '@angular/common';
import { ViaCepService } from '../../services/via-cep.service';
import { ResponseViaCep } from '../../Interfaces/ResponseViaCep';
import { error } from 'console';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [
    GenderServiceService,
    ViaCepService
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  genders!: Gender[];
  @Input() btnTitle!: string;
  @Input() titleForm!: string;
  @Output() onSubmit = new EventEmitter<User>();
  form!: FormGroup;

  constructor(
    private genderService: GenderServiceService,
    private viaCepService: ViaCepService
    ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      gender: new FormControl(''),
      zipCode: new FormControl('', Validators.required),
      publicPlace: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      locality: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      //image
      //accountcategory
    })
    //this.getAllGenders();
  }

  getAllGenders(): void {
    this.genderService.serviceGetAllGenders().subscribe((genders: Gender[]) => {
      this.genders = genders;
    })
  }

  searchZipCode() {
    if(isNaN(this.zipCode()?.value)){
      alert("Digite apenas números!");
      return;
    }
    
    const zipCode = this.viaCepService.serviceSearchZipCode(this.zipCode()?.value).subscribe((zipCode: ResponseViaCep) => {
      this.setZipCode(zipCode.cep);
      this.setPublicPlace(zipCode.logradouro);
      this.setNeighborhood(zipCode.bairro);
      this.setLocality(zipCode.localidade);
    }, ((error) => {
      alert("CEP não encontrado, digite novamente!");
      return;
    }));
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.onSubmit.emit(this.form.value);
  }

  name() {
    return this.form.get('name');
  }

  cpf() {
    return this.form.get('cpf');
  }

  zipCode() {
    return this.form.get('zipCode');
  }

  setZipCode(value: string) {
    this.form.get('zipCode')?.setValue(value);
  }

  publicPlace() {
    return this.form.get('publicPlace');
  }

  setPublicPlace(value: string) {
    this.form.get('publicPlace')?.setValue(value);
  }

  neighborhood() {
    return this.form.get('neighborhood');
  }

  setNeighborhood(value: string) {
    this.form.get('neighborhood')?.setValue(value);
  }

  locality() {
    return this.form.get('locality');
  }

  setLocality(value: string) {
    this.form.get('locality')?.setValue(value);
  }

  telephone() {
    return this.form.get('telephone');
  }

  birthDate() {
    return this.form.get('birthDate');
  }

  email() {
    return this.form.get('email');
  }

  password() {
    return this.form.get('password');
  }
}
