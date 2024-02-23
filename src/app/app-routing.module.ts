import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "@env/environment";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/public/public.module').then(m => m.PublicModule),
  },
  {
    path: '**',
    redirectTo: environment.home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
