import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  firstName: string;
  lastName: string;
  fullName: string;
  DOB: Date;
  joiningDate: Date;
  todaysDate: Date;
  salary: number;

  employeeList: any[];
  employeeInfo: any[];
  percentage1: number;
  percentage2: number;
  percentage3: number;
  decimalNumber: number;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Khaja';
    this.lastName = 'Moizuddin';
    this.fullName = this.firstName + this.lastName;
    this.DOB = new Date(1990, 4, 19);
    this.joiningDate = new Date(2015, 4, 22);
    this.todaysDate = new Date();
    this.salary = 20000;
    this.decimalNumber = 5.123456789;


    this.employeeList = [
      {
          employeeId: 1001,
          employeeName: 'KhajaMoiz',
          employeeLocation: 'hyderabad',
          salary: 20000
      },
      {
        employeeId: 1002,
        employeeName: 'Khaja',
        employeeLocation: 'hyderabad',
        salary: 20000
    }
    ];

    this.employeeInfo = [
      {
        empId: 1036,
        empName: 'khaja',
        empsal: 2000

      },
      {
        empId: 1037,
        empName: 'Moiz',
        empsal: 2000

      },
      {
        empId: 1038,
        empName: 'KK',
        empsal: 2000

      }
    ];
    this.percentage1 = 0.25;
    this.percentage2 = 0.50;
    this.percentage3 = 0.75;
 }

}
