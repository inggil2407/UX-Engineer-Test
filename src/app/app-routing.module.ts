import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: 'home',
    children: [{
        path: '',
        component: HomeComponent,
    }]
  },{
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:NoPreloading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
