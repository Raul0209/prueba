import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model';
import { NavController } from '@ionic/angular';
import { GLOBAL } from './global.service';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { Access } from '../models/access.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;
  public usuario: User;
  public url: String;

  constructor(private _http: HttpClient, private storage: Storage, private navCtrl: NavController) {
    this.url = GLOBAL.url;
  }

  login(login: Login): Observable<any> {
    let params = JSON.stringify(login);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', params, { headers: headers })
  }

  register(user: User): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'registrar', params, { headers: headers })
  }

  getRoles(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'roles', { headers: headers })
  }

  getUsuariosSinAcceso(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'usuarios-sin-acceso', { headers: headers })
  }

  getUsuariosConAcceso(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'usuarios-con-acceso', { headers: headers })
  }

  getAccesoUsuario(id): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'acceso-usuario/' + id, { headers: headers })
  }

  updateAccesoUsuario(acceso: Access, id): Observable<any> {
    let params = JSON.stringify(acceso);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + `acceso-usuario/${id}`, params, { headers: headers })
  }

  createAccesoUsuario(acceso: Access): Observable<any> {
    let params = JSON.stringify(acceso);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'acceso-usuario', params, { headers: headers })
  }

  getClientes(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'clientes', { headers: headers })
  }

  createCliente(cliente: Client): Observable<any> {
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'cliente', params, { headers: headers })

  }

  deleteCliente(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + `cliente/${id}`, { headers: headers })
  }

  updateCliente(cliente: Client, id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(cliente);
    return this._http.put(this.url + `cliente/${id}`, params, { headers: headers })
  }

  async saveToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  clearToken() {
    this.storage.clear();
  }

}
