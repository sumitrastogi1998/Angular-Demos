import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employees;
  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = {id: null, name: null, salary:null, department: null};
  }

  addEmployee(employee: Employees){
    this._empService.addEmployee(employee);
  }

}
