import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'login'
        },
        {
          path: 'login',
         component: LoginComponent,
        },
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
