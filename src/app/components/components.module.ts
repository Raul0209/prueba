import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidemenuComponent} from './sidemenu/sidemenu.component'
import { IonicModule } from '@ionic/angular';
import { AccesosPage } from '../modals/accesos/accesos.page';
import { AccesosPageModule } from '../modals/accesos/accesos.module';
import { ClientesPage } from '../modals/clientes/clientes.page';
import { ClientesPageModule } from '../modals/clientes/clientes.module';
import { RutasPage } from '../modals/rutas/rutas.page';
import { RutasPageModule } from '../modals/rutas/rutas.module';

@NgModule({
  entryComponents: [
    AccesosPage,
    ClientesPage,
    RutasPage
  ],
  declarations: [
    SidemenuComponent
  ],
  exports: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    AccesosPageModule,
    ClientesPageModule,
    RutasPageModule
  ]
})
export class ComponentsModule { }
