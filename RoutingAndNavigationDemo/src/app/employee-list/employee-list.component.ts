import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit  {

  public updatedId;
  public updatedName;
  public updatedSalary;
  public updatedDepartment;

  public employees=[];
  constructor(private _empService: EmployeeServiceService) { 

  }

  ngOnInit(): void {
    this.employees = this._empService.getEmployees();
  }
  fillUpdateEmp(value1, value2, value3, value4){
  this._empService.updateEmployee = {empId:value1, empName:value2, empSal:value3, empDep:value4};

    this._empService.updatedId = value1;
    this.updatedName = value2;
    this.updatedSalary = value3;
    this.updatedDepartment = value4;
    alert(this._empService.updateEmployee.empId)
  }
  deleteEmp(value1){
    this.employees = this.employees.filter(s=>s.empId != value1);
  } 

  sortById(){
    this.employees.sort((a,b) => a.empId - b.empId);
  }
  sortByName(){
    this.employees.sort((a,b) => a.empName.localeCompare(b.empName));
  }
  sortBySalary(){
    this.employees.sort((a,b) => a.empSal - b.empSal);
  }
  sortByDept(){
    this.employees.sort((a,b) => a.empDep.localeCompare(b.empDep));
  }
}


