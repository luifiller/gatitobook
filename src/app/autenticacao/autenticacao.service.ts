import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    // Observable é semelhante à 'promisse' do JavaScript. Aqui, é um objeto que quando a requisição retornar/completar irá retornar o objeto definido dentro do 'Observable'.
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,
      },
      // o "observe: 'response'" recolhe as infos do header da requisição
      {
        observe: 'response',
      }
    ).pipe (
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
