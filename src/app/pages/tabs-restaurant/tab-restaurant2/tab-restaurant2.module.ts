import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabRestaurant2Page } from './tab-restaurant2.page';

const routes: Routes = [
  {
    path: '',
    component: TabRestaurant2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabRestaurant2Page]
})
export class TabRestaurant2PageModule {}
