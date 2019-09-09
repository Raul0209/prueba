import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabRestaurant1Page } from './tab-restaurant1.page';

const routes: Routes = [
  {
    path: '',
    component: TabRestaurant1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabRestaurant1Page]
})
export class TabRestaurant1PageModule {}
