import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  // se o valor for 'undefined', utiliza-se " ?? '';" para passar uma string vazia
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username != password ? null :  { senhaIgualUsuario : true };
  } else {
    return null;
  }

}
