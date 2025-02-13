import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'header',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'headerMfe',
        exposedModule: './HeaderModule'
      }).then(m => m.HeaderModule),
  },
  // Vous pouvez ajouter d'autres routes ici
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
