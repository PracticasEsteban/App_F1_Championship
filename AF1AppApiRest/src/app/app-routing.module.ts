import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { PilotoInfoComponent } from './piloto-info/piloto-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full'},
  { path: 'table', component: TableComponent },
  { path: 'piloto/:id', component: PilotoInfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
