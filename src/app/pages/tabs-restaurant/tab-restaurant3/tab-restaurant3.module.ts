import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabRestaurant3Page } from './tab-restaurant3.page';

const routes: Routes = [
  {
    path: '',
    component: TabRestaurant3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabRestaurant3Page]
})
export class TabRestaurant3PageModule {}
