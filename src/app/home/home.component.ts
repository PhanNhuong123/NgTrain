import { Component, OnInit } from '@angular/core';
import { staff } from '../staff';
import { staffs } from '../mock-staffs';
import { StaffService } from '../staff.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private staffsService: StaffService,
    private messageService: MessageService
  ) {}

  public SelectStaff?: staff;
  public staffs: staff[] = [];

  private getStaffs(): void {
    this.staffsService
      .getStaffs()
      .subscribe((staffs) => (this.staffs = staffs));
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.staffsService.addStaff({ name } as staff).subscribe((staff) => {
      this.staffs.push(staff);
    });
  }

  public delete(staff: staff): void {
    this.staffs = this.staffs.filter((s) => s !== staff);
    this.staffsService.deleteStaff(staff.id).subscribe();
  }
  ngOnInit(): void {
    this.getStaffs();
  }
}
