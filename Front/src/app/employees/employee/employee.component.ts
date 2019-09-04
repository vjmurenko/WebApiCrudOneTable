import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {NgForm} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  mask:any[] = ['+', '7',' ','(', /\d/,/\d/, /\d/, ')', ' ', /\d/,/\d/,/\d/,'-', /\d/,/\d/,/\d/,/\d/, ];

  constructor(private service: EmployeeService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){

    if(form !=null)
      form.resetForm();

    this.service.formData = {
    EmployeeID: null,
    FullName: '',
      EMPCode: '',
      Mobile: '',
      Position: ''
    };
  }

  onSubmit(form: NgForm){
    if(form.value.EmployeeID != null){
      this.updateValue(form);
    }
    else {
      this.insertValue(form);
    }

  }

  insertValue(form: NgForm){
    this.service.postEmployee(form.value).subscribe(res=>{
      this.toastr.success("Added Successfully");
      form.resetForm();
      this.service.getEmployee();
    } );
  }

  updateValue(form: NgForm){
    this.service.putEmployee(form.value).subscribe(res =>{
      this.toastr.warning("Update Complplete");
      this.resetForm();
      this.service.getEmployee();
    });
  }


}
