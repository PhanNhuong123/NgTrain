import { Component, Input, OnInit } from '@angular/core';
import { staff } from '../staff';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})

export class StaffDetailComponent implements OnInit {

  constructor() { }

  @Input() staff?: staff; 
  ngOnInit(): void {
  }

}
