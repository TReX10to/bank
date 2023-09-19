import { Component,OnInit } from '@angular/core';
import { SernameService } from '../ang services/sername.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  sdata:any

constructor(private ds :SernameService){

}
ngOnInit(): void {
  setTimeout(()=>{this.ds.serviceMethod();
  },2000)

 this.sdata=this.ds.data
}


}
