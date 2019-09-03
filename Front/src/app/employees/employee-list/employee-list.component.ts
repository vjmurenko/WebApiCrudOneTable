import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../shared/employee.model';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styles: []
})
export class EmployeeListComponent implements OnInit {

    constructor(private service: EmployeeService,
                private toastr: ToastrService) {
    }


    ngOnInit() {
        this.service.getEmployee();

    }


    onDelete(EmployeeID: number) {
        if(confirm("Are you sure to remove this component?")){
            this.service.deleteEmployee(EmployeeID).subscribe(() => {
                    this.toastr.error('Deleted successfully');
                    this.service.getEmployee();
                }
            );
        }

    }

    popForm(emp: Employee){
        this.service.formData = Object.assign({}, emp);
    }

}
