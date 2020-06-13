import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegajosComponent } from './legajos/legajos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PaisComponent } from './pais/pais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxConfirmBoxModule,NgxConfirmBoxService } from 'ngx-confirm-box';
 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './login/login.component';
import { GuardComponent } from './guard/guard.component';

@NgModule({
  declarations: [
    AppComponent,
    LegajosComponent,
    PaisComponent,
    LoginComponent,
    GuardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxConfirmBoxModule,
    NgxSpinnerModule
  ],
  providers: [ApiService,NgxConfirmBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
