import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  displayValue:string="";

  head:string="cal";
  

  onButtonClick(value:string)
  {
    this.displayValue=this.displayValue+value;
  }

  onButtonClickClr()
  {
    this.displayValue="";
  }

  onButtonClickAns()
  {
     let result:string="";
     try
     {
      const operations = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b,
    };
    
     // Replace eval logic here
    
        this.displayValue=result;
     }
     catch(error)
     {
      this.displayValue="invalidinput";
     }

  }

}