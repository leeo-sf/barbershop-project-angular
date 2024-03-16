import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Gender } from '../Interfaces/Gender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderServiceService {
  private baseApiUrl: string = environment.baseApiUrlGender;
  private baseApiGetGenders: string = `${this.baseApiUrl}GetAllGenders`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  serviceGetAllGenders(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(this.baseApiGetGenders);
  }
}
