import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    // Observable é semelhante à 'promisse' do JavaScript. Aqui, é um objeto que quando a requisição retornar/completar irá retornar o objeto definido dentro do 'Observable'.
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha
    })
  }

}
