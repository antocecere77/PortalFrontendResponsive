import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { WebSocketService } from './shared/services/websocket.service';
import {FileUploadModule} from 'ng2-file-upload';
import { CountryService } from './pages/components/pages-layouts/off-canvas-mobile-menu/country.service';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // FileUploadModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [AuthService, WebSocketService, CountryService, DecimalPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
