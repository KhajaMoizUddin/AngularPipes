import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  EmployeeId = 1702356;
  FirstName = 'khaja';
  LastName = 'moizuddin';
  EmployeeName: string = this.FirstName + this.LastName;
  EmployeeDesignation = 'software engineer';
  DateOfJoining: Date = new Date('Mon Apr 22 2016 07:44:57');
  EmployeeAddress = 'malakpet, hyderabad';
  EmployeePhone = 8019804474;
  EmployeeAge = 29;
  Salary  = 20000;
  City = 'hyderabad';
  CompanyName = 'legato health technologies';
  percentage1 = 0.50;
  percentage2 = 0.25;
  percentage3 = 0.75;
  DateOfBirth = new Date(1980, 5, 25);
  todaysDate = new Date();

  employeeList: any[] = [
    {
  EmployeeId : 1702356,
  FirstName : 'khaja',
  LastName : 'moizuddin',
  EmployeeName:  this.FirstName + this.LastName,
  EmployeeDesignation : 'software engineer',
  DateOfJoining : new Date('Mon Apr 22 2016 07:44:57'),
  EmployeeAddress : 'malakpet, hyderabad',
  EmployeePhone : 8019804474,
  EmployeeAge : 29,
  Salary : 20000,
  City : 'hyderabad',
  CompanyName : 'legato health technologies'
    },
    {
      EmployeeId : 1702356,
      FirstName : 'khaja',
      LastName : 'moizuddin',
      EmployeeName:  this.FirstName + this.LastName,
      EmployeeDesignation : 'software engineer',
      DateOfJoining : new Date('Mon Apr 22 2016 07:44:57'),
      EmployeeAddress : 'malakpet, hyderabad',
      EmployeePhone : 8019804474,
      EmployeeAge : 29,
      Salary : 20000,
      City : 'hyderabad',
      CompanyName : 'legato health technologies'
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

}
