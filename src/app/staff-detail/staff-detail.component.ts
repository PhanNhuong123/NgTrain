import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss'],
})
export class StaffDetailComponent implements OnInit {
  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public staff: staff | undefined;

  public getStaff(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.staffService.getStaff(id).subscribe((staff) => (this.staff = staff));
  }

  public goBack(): void {
    this.location.back();
  }

  public save() :void {
    if(this.staff) {
      this.staffService.updateStaff(this.staff)
        .subscribe(() => this.goBack())
    }
  }
  // @Input() staff?: staff;
  ngOnInit(): void {
    this.getStaff();
  }
}
