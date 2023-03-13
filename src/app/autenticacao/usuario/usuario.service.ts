import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // BehaviorSubject -> é um 'Observable' que guarda estado | Precisa declarar um estado inicial dentro das chaves que estão dentro do parênteses, nesse caso sendo vazio.
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();

    const usuario = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    // a partir do return abaixo, é possível apenas receber o subject e não mais enviá-lo também
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);

    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

}
