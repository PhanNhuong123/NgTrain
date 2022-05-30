import { Component, OnInit } from '@angular/core';
import { staff } from '../staff';
import { staffs } from '../mock-staffs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public staffs = staffs;
  public SelectStaff?: staff;
 /**
  * onSelect
  */
 public onSelect(staff: staff) {
   this.SelectStaff = staff;
   console.log(this.SelectStaff)
 }

  ngOnInit(): void {}
}
