import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {  staffs } from './mock-staffs';
import { staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  getStaffs(): Observable<staff[]> {
    const STAFFS = of(staffs) 
    this.messageService.add('StaffService : fetched Staffs')
    return STAFFS;
  }


  constructor(private messageService : MessageService) {}
}
