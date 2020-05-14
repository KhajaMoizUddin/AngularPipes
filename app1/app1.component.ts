import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

  firstName = 'khaja';
  lastName = 'moizuddin';
  company = 'legato health';
  number1 = 0.5;
  number2 = 0.25;
  number3 = 0.75;
  salary = 20000;
 todaysDate: Date = new Date();
 dateofBirth: Date = new Date(1989, 10, 19);
 dateofJoining: Date = new Date('Mon Apr 22 2016 07:44:57');
 bankAccountNo = 9875057412358432;

  employeeList: any[] = [
    {
      employeeId : 1,
      employeeName : 'Khaja Moizuddin',
      phone : 80190858555,
      location : 'Hyderabad'
 },
  {
    employeeId : 2,
    employeeName : 'Khaja',
    phone : 98798798798,
    location : 'Hyderabad'
  }

  ];

  studentList =
  [
    {
    studentId : "1001",
    studentName : "Vijay Kumar",
    studentLocation : "Hyderabad",
    collegeName : "Gowtham Junior College"
  },

  { studentId : "1001",
    studentName : "Vijay Kumar",
    studentLocation : "Hyderabad",
    collegeName : "Gowtham Junior College"

  }
];




  constructor() { }

  ngOnInit() {
  }

}
