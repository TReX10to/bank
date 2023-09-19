import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SernameService {

  constructor() { }

data="data inside service file"


serviceMethod(){
  alert("service method")
}

}


