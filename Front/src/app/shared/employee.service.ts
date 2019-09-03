import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

formData: Employee;
employeeList: Employee[];

readonly rootUrl="http://localhost:3658/api";

  constructor(private http: HttpClient) { }

  postEmployee(formData:Employee){
    return this.http.post(this.rootUrl+ '/Employee', formData);
  }

  getEmployee(){
    return this.http.get(this.rootUrl + "/Employee").toPromise().then(res => this.employeeList = res as Employee[]);
  }
  deleteEmployee(EmployeeId: number){
    return this.http.delete(this.rootUrl + '/Employee/' + EmployeeId);
  }

  putEmployee(formData: Employee){
    return this.http.put(this.rootUrl + '/Employee/' + formData.EmployeeID, formData);
  }
}
