import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // o uso de '??' significa 'caso não houver/for null ou undefined' recebe string vazia ('')
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluiToken() {
    localStorage.removeItem(KEY);
  }

  // o uso de '!!' faz com que a resposta do método retornaToken seja transformado em booleano
  possuiToken() {
    return !!this.retornaToken();
  }
}
