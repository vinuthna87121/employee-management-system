import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  employee:Employee=new Employee();
  id:number=0;
  constructor(private employeeservice:EmployeeService,private route:ActivatedRoute,private router:Router){

  }
  ngOnInit():void{
 this.id=this.route.snapshot.params['id'];
 this.employeeservice.getEmployeeById(this.id).subscribe(data =>{
  this.employee=data;
  })
}
OnSubmit(){
  this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=>{
    this.employee=data;
    this.goToEmployeeList();
  })
}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}
}