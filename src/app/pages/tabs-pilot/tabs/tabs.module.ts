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
        path: 'tab-pilot1',
        children: [
          {
            path: '', loadChildren: () => import('../tab-pilot1/tab-pilot1.module').then(m => m.TabPilot1PageModule)
          },

        ]
      },
      {
        path: 'tab-pilot2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-pilot2/tab-pilot2.module').then(m => m.TabPilot2PageModule)
          }
        ]
      },
      {
        path: 'tab-pilot3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-pilot3/tab-pilot3.module').then(m => m.TabPilot3PageModule)
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
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
