import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private signinUrl = 'http://localhost:8080/signin';
  private loginUrl= 'http://localhost:8080/login';

  constructor(private httpCliente: HttpClient) {}

    signInUser(user: Users): Observable<Users>{
      return this.httpCliente.post<Users>(`${this.signinUrl}`,user);
   }

   logInUser(correo: string, passw: string): Observable<Users>{
    let params = new HttpParams();
    params = params.append('correo', correo);
    params = params.append('pwd', passw);
    return this.httpCliente.get<Users>(`${this.loginUrl}`,{params: params})
   }
   

}
