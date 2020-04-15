import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public Id;
  public Name;
  public Salary;
  public Department;
  public employees;
  public checkForUniqueId;
  constructor(private _empService: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  addEmployee(value1, value2, value3, value4){
    this.checkForUniqueId = this._empService.getEmployees().find(s=> s.empId == value1);
    
    if(this.checkForUniqueId != undefined)
    {
      alert("Id already available")
    }
    else{
    this._empService.objData = {empId:value1, empName:value2, empSal:value3, empDep:value4};
    this._empService.getEmployees().push(this._empService.objData)
    alert(this.Id + " "+this.Name+" "+this.Salary+" "+this.Department)
    alert("Employee Added Successfully")
  }
}
}
