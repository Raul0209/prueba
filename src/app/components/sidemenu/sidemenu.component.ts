import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { AccesosPage } from 'src/app/modals/accesos/accesos.page';
import { ClientesPage } from 'src/app/modals/clientes/clientes.page';
import { RutasPage } from 'src/app/modals/rutas/rutas.page';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  menu: Menu[] = [
    {
      name: 'Gestionar Accesos',
      icon: 'key',
      redirectTo: '',
      action: 'accesos'
    },
    {
      name: 'Gestionar Clientes',
      icon: 'restaurant',
      redirectTo: '',
      action: 'clientes'
    },

    {
      name: 'Gestionar Rutas',
      icon: 'clipboard',
      redirectTo: '',
      action: 'rutas'
    },

    {
      name: 'Cerrar Sesion',
      icon: 'exit',
      redirectTo: '',
      action: ''
    }
  ]
  async openModal(action) {

    if (action == 'accesos') {
      const modal = await this.modalCtrl.create({
        component: AccesosPage,
      })
      await modal.present();

    } else if (action == 'clientes') {
      const modal = await this.modalCtrl.create({
        component: ClientesPage,
      })
      await modal.present();
    } else if (action == 'rutas') {
      const modal = await this.modalCtrl.create({
        component: RutasPage,
      })
      await modal.present();
    }

  }

  ngOnInit() {
  }

}
