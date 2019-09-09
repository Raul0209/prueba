import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-restaurant1',
        children: [
          {
            path: '', loadChildren: () => import('../tab-restaurant1/tab-restaurant1.module').then(m => m.TabRestaurant1PageModule)
          },

        ]
      },
      {
        path: 'tab-restaurant2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-restaurant2/tab-restaurant2.module').then(m => m.TabRestaurant2PageModule)
          }
        ]
      },
      {
        path: 'tab-restaurant3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-restaurant3/tab-restaurant3.module').then(m => m.TabRestaurant3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
