import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path: 'listEmployees', component: EmployeeListComponent},
  {path: 'addEmployees', component: AddEmployeeComponent},
  {path: 'updateEmployees', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [EmployeeListComponent, AddEmployeeComponent, UpdateEmployeeComponent];
