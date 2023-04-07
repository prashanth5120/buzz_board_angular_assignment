import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userRegister: FormGroup;
  selectedUser: any;
  usersList = [
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Akhil',
      gender: '',
      lastName: 'Kumar',
      password: 'test',
      phone: '9876543210',
    },
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Rahul',
      gender: '',
      lastName: 'Dev',
      password: 'test',
      phone: '9876543210',
    },
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Sampath',
      gender: '',
      lastName: 'Kumar',
      password: 'test',
      phone: '9876543210',
    },
  ];
  btnName = 'Register';
  index: any;
  constructor(public fb: FormBuilder) {
    this.userRegister = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      company: '',
      dob: '',
      password: '',
      confirmPassword: '',
    });
  }
  register() {
    if (this.btnName === 'Register') {
      this.usersList.push(this.userRegister.value);
      console.log(this.userRegister.value);
      // console.log(this.usersList);
      this.userRegister.reset();
    } else {
      this.btnName = 'Register';
      this.usersList[this.index] = this.userRegister.value;
    }
  }
  delete(i) {
    this.usersList.splice(i, 1);
    this.userRegister.reset();
  }
  cancel() {
    this.userRegister.reset();
  }
  edit(i) {
    this.index = i;
    this.btnName = 'Update';
    this.selectedUser = this.usersList[i];
    this.userRegister.patchValue({
      firstName: this.selectedUser.firstName,
      lastName: this.selectedUser.lastName,
      email: this.selectedUser.email,
      phone: this.selectedUser.phone,
      gender: this.selectedUser.gender,
      company: this.selectedUser.company,
      dob: this.selectedUser.dob,
      password: this.selectedUser.password,
      confirmPassword: this.selectedUser.confirmPassword,
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
