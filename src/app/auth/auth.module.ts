import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      AuthRoutingModule
    ],
    providers: [
      // AuthService
    ]
  })

  export class AuthModule { }
