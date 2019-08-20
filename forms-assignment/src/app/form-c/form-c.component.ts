import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css']
})
export class FormCComponent implements OnInit {
  public Id:string;
  public Name:string;
  public Salary:number;
  public Department:string;
  public check=false;
  employeeObj=[
      {
        Id:'1',
        Name:'Ysr',
        Salary:1234567,
        Department:'cse'

      }
      
  ];
  //employeeObj=new Employee("1","Ysr",123456,"cse");
  constructor() { }

  ngOnInit() {
  }
  addEmployee()
  {
    alert(this.Id+" "+this.Name+" "+this.Salary+" "+this.Department);
    this.employeeObj.push({Id:this.Id,Name:this.Name,Salary:this.Salary,Department:this.Department});

  }
  deleteRecord(employee)
  {
    let response=this.employeeObj.indexOf(employee);
    this.employeeObj.splice(response,1);
  }
  editRecord()
  {
  
    
   this.check=true;
  
   }
    saverecord()
    {
      this.check=false;
    }

}
