import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LegajosComponent } from './legajos/legajos.component';
import { PaisComponent } from './pais/pais.component';
import { LoginComponent } from './login/login.component';
import { GuardComponent } from './guard/guard.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LoginComponent },
  {path: 'pages', component: PagesComponent,canActivate: [GuardComponent], children:[
      {path: 'legajos', component: LegajosComponent,canActivate: [GuardComponent] },
      {path: 'paises', component: PaisComponent ,canActivate: [GuardComponent]},
  ] },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
