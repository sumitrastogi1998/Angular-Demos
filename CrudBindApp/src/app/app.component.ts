import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public empData =[
    {empId:1001, empName:"Rahul", empSal:9000, empDep:"Java"},
    {empId:1002, empName:"Sachin", empSal:19000, empDep:"OraApps"},
    {empId:1003, empName:"Vikas", empSal:29000, empDep:"BI"}
    ];

  public objData
  public Id;
  public Name;
  public Salary:number;
  public Department;
  public disp = false;
  public updatedId;
  public updatedName;
  public updatedSalary;
  public updatedDepartment;
  constructor() { }

  ngOnInit(): void {
  }
  public checkForUniqueId;
  addEmployee(value1, value2, value3, value4){
    this.checkForUniqueId = this.empData.find(s=> s.empId == value1);
    
    if(this.checkForUniqueId != undefined)
    {
      alert("Id already available")
    }
    else{
    this.objData = {empId:value1, empName:value2, empSal:value3, empDep:value4};
    console.log(this.empData.push(this.objData))
    alert(this.Id + " "+this.Name+" "+this.Salary+" "+this.Department)
    }
  } 
  
  fillUpdateEmp(value1, value2, value3, value4){
    this.disp = true;
    this.updatedId = value1;
    this.updatedName = value2;
    this.updatedSalary = value3;
    this.updatedDepartment = value4;
  } 

  updateEmp(value1, value2, value3, value4){
    this.objData = {empId:value1, empName:value2, empSal:value3, empDep:value4};
    for (let index = 0; index < this.empData.length; index++) {
      if(this.objData.empId == this.empData[index].empId){
        this.empData[index].empName = value2;
        this.empData[index].empSal = value3;
        this.empData[index].empDep = value4;
      }
      
    }
  }
  deleteEmp(value1){
    this.empData = this.empData.filter(s=>s.empId != value1);
  } 

  sortById(){
    this.empData.sort((a,b) => a.empId - b.empId);
  }
  sortByName(){
    this.empData.sort((a,b) => a.empName.localeCompare(b.empName));
  }
  sortBySalary(){
    this.empData.sort((a,b) => a.empSal - b.empSal);
  }
  sortByDept(){
    this.empData.sort((a,b) => a.empDep.localeCompare(b.empDep));
  }
}
