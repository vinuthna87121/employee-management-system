import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8080/employees"
  constructor(private httpclient:HttpClient) { }
 getEmployeeList():Observable<Employee[]>{
  return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
 }
 createEmployee(employee:Employee):Observable<object>{
  console.log(employee)
 return this.httpclient.post(`${this.baseUrl}`,employee);

}
getEmployeeById(id:number):Observable<Employee>{
return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
}
updateEmployee(id:number,employee:Employee):Observable<Employee>{
  return this.httpclient.put<Employee>(`${this.baseUrl}/${id}`,employee);
}
DeleteEmployeeById(id:number):Observable<object>{
  return this.httpclient.delete<Employee>(`${this.baseUrl}/${id}`);
}
}
