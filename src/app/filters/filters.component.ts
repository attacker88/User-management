
import { UsermanagementService } from './../usermanagement.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormControl, FormGroup,FormBuilder,ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {User} from '../user'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
// public user:any;

    constructor(
      private fb:FormBuilder,
      public service:UsermanagementService
    ) { 


  }
    ngOnInit():void{ 
      //  this.user= new User('','','','','',null);
     }
    


    //  onSubmit(){
    //    this.service.userlist.push(this.service.user)     
    //    console.log(this.service.userlist)  
    // }


    // OnClear(){
    // this.reset(this.user)
    // }
  }