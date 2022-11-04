import { UsersModal } from './../Modal/Users.Modal';
import { APIService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  formValue!: FormGroup;
  usersObject: UsersModal = new UsersModal();
  usersData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formBuilder: FormBuilder, private api: APIService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      Email: [''],
      mobil: [''],
      salary: [''],
    });

    this.getAlluser();
  }
  clickUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postUser() {
    this.usersObject.firstName = this.formValue.value.firstName;
    this.usersObject.lastName = this.formValue.value.lastName;
    this.usersObject.Email = this.formValue.value.Email;
    this.usersObject.Mobil = this.formValue.value.mobil;
    this.usersObject.salary = this.formValue.value.salary;
    this.api.postUser(this.usersObject).subscribe((res) => {
      console.log(res);
      alert('User Add Success');
      this.formValue.reset();
      var ref = document.getElementById('cancel');
      ref?.click();
      this.getAlluser();
    });
  }
  getAlluser() {
    this.api.getUser().subscribe((res) => {
      this.usersData = res;
    });
  }
  deleteUser(user: any) {
    this.api.deleteUser(user.id).subscribe((res) => {
      alert('User IS Deleted');
      this.getAlluser();
    });
  }
  onEdit(user: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.usersObject.id = user.id;

    this.formValue.controls['firstName'].setValue(user.firstName);
    this.formValue.controls['lastName'].setValue(user.lastName);
    this.formValue.controls['Email'].setValue(user.Email);
    this.formValue.controls['mobil'].setValue(user.Mobil);
    this.formValue.controls['salary'].setValue(user.salary);
  }
  UPdateUser() {
    this.showAdd = false;
    this.showUpdate = true;
    this.usersObject.firstName = this.formValue.value.firstName;
    this.usersObject.lastName = this.formValue.value.lastName;
    this.usersObject.Email = this.formValue.value.Email;
    this.usersObject.Mobil = this.formValue.value.mobil;
    this.usersObject.salary = this.formValue.value.salary;
    this.api
      .updateUser(this.usersObject, this.usersObject.id)
      .subscribe((res) => {
        console.log(res);
        alert('UPdate success');
        var ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAlluser();
      });
  }
}
