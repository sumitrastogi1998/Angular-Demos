import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  
  public updateEmployee;

  constructor(private _empService: EmployeeServiceService) { 

  }

  ngOnInit(): void {
    this.updateEmployee = this._empService.updateEmployee;
  }

  updateEmp(value1, value2, value3, value4) {
    this._empService.objData = { empId: value1, empName: value2, empSal: value3, empDep: value4 };
    for (let index = 0; index < this._empService.getEmployees().length; index++) {
      if (this._empService.objData.empId == this._empService.getEmployees()[index].empId) {
        this._empService.getEmployees()[index].empName = value2;
        this._empService.getEmployees()[index].empSal = value3;
        this._empService.getEmployees()[index].empDep = value4;
      }
    }
    alert("Employee Details Updated");
  }
}
