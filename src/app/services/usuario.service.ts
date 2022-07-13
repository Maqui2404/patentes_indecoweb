import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "API Puno turístico", nombre: 'Juan', apellido: 'Mamani', sexo: 'Masculino', github:"https://github.com/"},
    {usuario: "API", nombre: 'Juan1', apellido: 'Mamani1', sexo: 'Masculino1', github:"https://github.com/"},
    {usuario: "jperez2", nombre: 'Juan2', apellido: 'Mamani2', sexo: 'Masculino2', github:"https://github.com/"},
    {usuario: "jperez3", nombre: 'Juan3', apellido: 'Mamani3', sexo: 'Masculino3', github:"https://github.com/"},
    {usuario: "jperez4", nombre: 'Juan4', apellido: 'Mamani4', sexo: 'Masculino4', github:"https://github.com/"},
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
