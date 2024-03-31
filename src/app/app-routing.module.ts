import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'json',
    loadChildren: () => import('./json/json.module').then( m => m.JsonPageModule)
  },
  {
    path: 'abstract',
    loadChildren: () => import('./abstract/abstract.module').then( m => m.AbstractPageModule)
  },
  {
    path: 'interface',
    loadChildren: () => import('./interface/interface.module').then( m => m.InterfacePageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./servicepage/servicepage.module').then( m => m.ServicepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
