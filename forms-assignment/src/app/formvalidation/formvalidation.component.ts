import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  public choices=['Grocery', 'Mobile', 'Electronics','Cloths'];
  public Id;
  public Name;
  public Cost;
  public POnline;
  public categ;
  
  constructor() { }

  ngOnInit() {
  }
  addProduct()
  {
    alert(this.Id+" "+this.Name+" "+this.Cost+" "+this.POnline+" "+this.categ);
  }
  OnSubmit()
  {
    console.log(this.Id+" "+this.Name+" "+this.Cost+" "+this.POnline+" "+this.categ);
  }

}
