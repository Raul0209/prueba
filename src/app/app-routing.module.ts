import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs-admin',
    loadChildren: () => import('./pages/tabs-admin/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { 
    path: 'tabs-pilot',
     loadChildren: () => import('./pages/tabs-pilot/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tabs-restaurant',
    loadChildren: () => import('./pages/tabs-restaurant/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
