import { Component, OnInit } from '@angular/core';
import { staffs } from '../mock-staffs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public staffs = staffs 

  ngOnInit(): void {
  }

}
