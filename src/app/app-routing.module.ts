import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LegajosComponent } from './legajos/legajos.component';
import { PaisComponent } from './pais/pais.component';

const routes: Routes = [
  {path: 'legajos', component: LegajosComponent },
  {path: 'paises', component: PaisComponent },
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
