import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
  <h2>Hello {{name}}</h2>
  <h1 [style.color]="isDisable ? 'red': 'orange'">Style Binding</h1>
  <h1 [ngStyle]="customStyle">Style Binding test</h1>
<button (click)="onClick()">Click Me!</button>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
<h2>{{displayName()}}</h2>
<input type="text" bind-disabled="isDisable" value="ysr"/>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name="Yogendra Singh Rathore";
  public isDisable=false;
  public customStyle=
  {
    color: "blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }
  displayName()
  {
    return "Hello"+this.name+" welcome to first Angular App";
  }
  onClick()
  {
    console.log("Welcome to My Home Page");
  }

}
