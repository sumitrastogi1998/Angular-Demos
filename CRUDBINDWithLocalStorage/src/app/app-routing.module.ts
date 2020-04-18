import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
{path: 'listEmployees', component: ListEmployeeComponent},
{path: 'addEmployees', component: AddEmployeeComponent},
{path: 'updateEmployees', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
