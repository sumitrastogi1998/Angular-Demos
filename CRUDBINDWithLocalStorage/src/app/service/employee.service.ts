import { Injectable } from '@angular/core';
import { Employees } from '../employees';
import { BehaviorSubject, Observable, of } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employees: Employees[];

  private employeeSource = new BehaviorSubject<Employees>({id: null, name: null, salary:null, department: null});
  selectedEmployee = this.employeeSource.asObservable();
  newEmployee: Employees[];
  constructor() { 
    this.employees =[
      // {id:1001, name:"Rahul", salary:9000, department:"Java"},
      // {id:1002, name:"Sachin", salary:19000, department:"OraApps"},
      // {id:1003, name:"Vikas", salary:29000, department:"BI"}
      ];
  }

  getEmployees(): Observable<Employees[]>{
    if(localStorage.getItem('employees') === null){
      this.employees = [];
    }
    else{
      this.employees = JSON.parse(localStorage.getItem('employees'));
    }
    return of(this.employees);
  }

  setFormEmployee(employee: Employees){
    this.employeeSource.next(employee);
  }

  addEmployee(employee: Employees){

    if(this.employees.find(e=>e.id === employee.id) == null)
    {
    this.employees.unshift(employee);
    // Add to local storage
    localStorage.setItem('employees',JSON.stringify(this.employees));
    alert("Employee Details Added");
    }
    else
    {
      alert("Employee with "+employee.id+" is already available")
    }
  }

  updateEmployee(employee: Employees){
    this.employees.forEach((cur, index) => {
      if(employee.id == cur.id){
        this.employees.splice(index,1);
      }
    });
    this.employees.unshift(employee);
    localStorage.setItem('employees',JSON.stringify(this.employees));
    alert("Employee Details Updated");
  }

  deleteEmployee(employee: Employees){
    this.employees.forEach((cur, index) => {
      if(employee.id == cur.id){
        this.employees.splice(index,1);
      }
    });
    localStorage.setItem('employees',JSON.stringify(this.employees));
    alert("Employee Details Deleted");
  }
}
