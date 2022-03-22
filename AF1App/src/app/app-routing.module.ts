import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full'},
  { path: 'table', component: TableComponent },
  { path: 'user/:id', component: UserComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
