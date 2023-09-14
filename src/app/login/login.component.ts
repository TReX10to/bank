import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  data="new one";
  data2="Enter Account Number"
  acno:string=""
  psd:string=""
 
  Login(a:any,b:any){
   this.acno=a.value
   this.psd=b.value
   console.log(this.acno)
   console.log(this.psd)



  }
 
}
