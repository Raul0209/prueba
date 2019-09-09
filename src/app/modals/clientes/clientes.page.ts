import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Client } from '../../models/client.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  public clientes: Client
  public cliente: Client
  public agregando = false
  public editando = false
  public identificador
  textoBuscar = '';
  public cargando = true

  constructor(private modalCtrl: ModalController, private _userService: UserService, private loadingCtrl: LoadingController) {
    this.cliente = new Client(null, null, '', '', null, null, null, null)
  }

  ngOnInit() {
    this.getClientes()
    this.cargando = true
  }

  getClientes() {
      this._userService.getClientes().subscribe(
      response => {
        if (response.clientes) {
          this.cargando = false
          this.clientes = response.clientes
        }
      }
    )
  }

  createCliente() {
    this._userService.createCliente(this.cliente).subscribe(
      response => {
        if (response.cliente) {
          this.getClientes();
          this.agregando = false
        }
      }
    )
  }

  deleteCliente(id) {
    this._userService.deleteCliente(id).subscribe(
      response => {
        if (response.cliente) {
          this.getClientes();
        }
      }
    )
  }

  updateCliente(id) {
    this._userService.updateCliente(this.cliente, id).subscribe(
      response => {
        if (response.cliente) {
          this.getClientes()
          this.editando = false
        }
      }
    )
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  nuevoCliente() {
    this.agregando = true;
  }

  editarCliente(nombre, direccion, telefono, latitud, longitud, descatalogado, codcontabilidad, codigoCliente) {
    this.cliente.NOMBRE = nombre,
      this.cliente.DIRECCION = direccion,
      this.cliente.TELEFONO = telefono,
      this.cliente.LATITUD = latitud,
      this.cliente.LONGITUD = longitud,
      this.cliente.DESCATALOGADO = descatalogado,
      this.cliente.CODCONTABILIDAD = codcontabilidad,
      this.identificador = codigoCliente,
      this.editando = true
  }

  cancelar(form: NgForm) {
    this.agregando = false
    this.editando = false
    form.reset()
  }

  agregar() {
    this.createCliente();
  }

  eliminar(id) {
    this.identificador = id
    this.deleteCliente(this.identificador);
  }

  editar() {
    this.updateCliente(this.identificador);
  }

  buscar(event) {
    this.textoBuscar = event.detail.value
  }

}
