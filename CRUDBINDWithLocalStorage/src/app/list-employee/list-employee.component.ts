import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employees[];
  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe(employees => {
      this.employees = employees
    });
  }

  sortById(){
    this.employees.sort((a,b) => a.id - b.id);
  }
  sortByName(){
    this.employees.sort((a,b) => a.name.localeCompare(b.name));
  }
  sortBySalary(){
    this.employees.sort((a,b) => a.salary - b.salary);
  }
  sortByDept(){
    this.employees.sort((a,b) => a.department.localeCompare(b.department));
  }

  fillUpdateEmp(employee : Employees){
    this._empService.setFormEmployee(employee);
  }

  deleteEmp(employee: Employees){
    if(confirm('Are you sure you want to delete?')){
      this._empService.deleteEmployee(employee);
    }
  }
  }







