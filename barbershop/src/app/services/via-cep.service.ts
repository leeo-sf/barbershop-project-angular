import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseViaCep } from '../Interfaces/ResponseViaCep';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  private baseApiUrlViaCep: string = environment.baseApiUrlViaCep;

  constructor(private httpClient: HttpClient) { }

  serviceSearchZipCode(zipCode: number): Observable<ResponseViaCep> {
    return this.httpClient.get<ResponseViaCep>(`${this.baseApiUrlViaCep}ws/${zipCode}/json/`);
  }
}
