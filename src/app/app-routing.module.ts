import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './Template/form/form.component';
import { ListComponent } from './Template/list/list.component';

const routes: Routes = [
  { path: 'Novo', component: FormComponent },
  { path: 'Editar/:id', component: FormComponent },
  { path: 'Excluir', component: FormComponent },
  { path: '', component: ListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
