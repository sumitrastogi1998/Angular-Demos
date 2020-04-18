import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  name: string;
  salary: number;
  department: string;

  public employee: Employees;
  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this._empService.selectedEmployee.subscribe(employee => {
      if(employee != null){
        this.id = employee.id,
        this.name = employee.name,
        this.salary = employee.salary,
        this.department = employee.department
      }
    });
  }

  updateEmp(v1,v2,v3,v4){
    this.employee = {id: v1, name:v2, salary:v3, department:v4};
    this._empService.updateEmployee(this.employee);
  }

}
