import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  constructor(private employeeService:EmployeeService,private router:Router){

  }
  employee:Employee=new Employee();
  OnSubmit(){
    this.insertEmployee();
    console.log(this.employee)
  }
  insertEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
     
      console.log(data)
      this.goToEmployeeList();
  })
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }


}
