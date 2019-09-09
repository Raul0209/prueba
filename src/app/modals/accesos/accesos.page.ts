import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service'
import { Access } from '../../models/access.model';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.page.html',
  styleUrls: ['./accesos.page.scss'],
})
export class AccesosPage implements OnInit {

  constructor(private modalCtrl: ModalController, private _userService: UserService) {
    this.acceso = new Access(null, null, null, null)
  }

  public usuariosConAcceso
  public usuariosSinAcceso
  public gestionando = false
  public viendo = false
  public creando = false
  public valor
  public roles
  public clientes
  public acceso: Access
  public predefinido
  public predefinido2
  public identificador
  textoBuscar = ''

  buscar(event) {
    this.textoBuscar = event.detail.value
  }

  updateAcces() {
    this._userService.updateAccesoUsuario(this.acceso, this.identificador).subscribe(
      response => {
        if (response.acceso) {
          this.getUsuariosConAcceso()
          this.gestionando = false
        }
      }
    )
  }

  createAccess() {
    this._userService.createAccesoUsuario(this.acceso).subscribe(
      response => {
        if (response.acceso) {
          this.getUsuariosConAcceso();
          this.getUsuariosSinAcceso();
        }
      }
    )
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  verAcceso(email, cod) {
    this.valor = email
    this.viendo = true
    this.getAccesoUsuario(cod)
  }

  desactivarViendo() {
    this.viendo = false
  }

  desactivarActualizando() {
    this.gestionando = false
  }

  desactivarCreando() {
    this.creando = false
  }

  nuevoAcceso() {
    this.createAccess()
    this.creando = false
  }

  creandoAcceso(email, codigo) {
    this.creando = true
    this.valor = email
    this.getRoles();
    this.getClientes();
    this.acceso.CODUSUARIO = codigo
  }

  gestionarAcceso(email, codigo) {
    this.gestionando = true
    this.valor = email
    this.getRoles();
    this.getClientes();
    this.identificador = codigo

  }

  getUsuariosSinAcceso() {
    this._userService.getUsuariosSinAcceso().subscribe(
      response => {
        if (response.users) {
          this.usuariosSinAcceso = response.users
        }
      }
    )
  }

  getUsuariosConAcceso() {
    this._userService.getUsuariosConAcceso().subscribe(
      response => {
        if (response.users) {
          this.usuariosConAcceso = response.users
        }
      }
    )
  }

  getAccesoUsuario(id) {
    this._userService.getAccesoUsuario(id).subscribe(
      response => {

        if (response.nombreRol) {
          this.predefinido = response.nombreRol.NOMBRE
        } else {
          this.predefinido = 'No tiene rol'
        }

        if (response.nombreCliente) {
          this.predefinido2 = response.nombreCliente.NOMBRE
        } else {
          this.predefinido2 = 'No tiene nombre cliente'
        }
      }
    )
  }

  getRoles() {
    this._userService.getRoles().subscribe(
      response => {
        if (response.roles) {
          this.roles = response.roles
        }
      }
    )
  }

  getClientes() {
    this._userService.getClientes().subscribe(
      response => {
        if (response.clientes) {
          this.clientes = response.clientes
        }
      }
    )
  }

  ngOnInit() {
    this.getUsuariosConAcceso();
    this.getUsuariosSinAcceso();
  }

}
