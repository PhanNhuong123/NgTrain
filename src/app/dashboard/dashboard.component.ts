import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private staffService: StaffService,
  
    ) {}
  public staffs: staff[] = [];

  public getStaff(): void {
    this.staffService
      .getStaffs()
      .subscribe((staffs) => (this.staffs = [...staffs].splice(1, 5)));
  }

  ngOnInit(): void {
    this.getStaff();
  }
}
