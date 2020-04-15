import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  
})

export class EmployeeServiceService {

  public updateEmployee={empId:undefined, empName:undefined, empSal: undefined, empDep: undefined};
  public updatedId;
  public updatedName;
  public updatedSalary;
  public updatedDepartment;

  public objData;
  public empData =[
    {empId:1001, empName:"Rahul", empSal:9000, empDep:"Java"},
    {empId:1002, empName:"Sachin", empSal:19000, empDep:"OraApps"},
    {empId:1003, empName:"Vikas", empSal:29000, empDep:"BI"}
    ];

  constructor() { }

  getEmployees(){
    return this.empData;
  }
}
