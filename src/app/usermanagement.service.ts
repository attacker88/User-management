
import { FormBuilder, MinLengthValidator } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  genders=['Male','Female','Others']
  // public user:any;
  userlist=[];

user:User={
  firstname:null,
  lastname:null,
  gender:null,
  country:null,
  address:null,
  phoneno:null
}


  constructor() {
    // this.user= new User('','','','','',null);
this.userlist =[
      {
    firstname:'Navajith R',
  lastname:'Reddy',
  gender:'Male',
  country:'India',
  address:'Bengaluru',
  phoneno:88888888888
  },

  {
    firstname:'Navajith R',
  lastname:'Reddy',
  gender:'Male',
  country:'India',
  address:'Bengaluru',
  phoneno:88888888888
  }];
  }
  onSubmit(){
    this.userlist.push(this.user)     
    console.log(this.userlist)  
 }
}
