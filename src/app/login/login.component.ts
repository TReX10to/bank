import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  constructor(private route1:Router){}
  
  data="new one";
  data2="Enter Account Number"
  acno:string=""
  psd:string=""
 
  Login(){
   
    this.route1.navigateByUrl("home")
  
  
  
  //    this.acno=a.value
  //  this.psd=b.value
   console.log(this.acno)
   console.log(this.psd)



  }
 
}
