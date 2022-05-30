import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { staffs } from './mock-staffs';
import { staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  getStaffs(): Observable<staff[]> {
    const STAFFS = of(staffs);
    this.messageService.add('StaffService : fetched Staffs');
    return STAFFS;
  }

  getStaff(id: number): Observable<staff> {
    const staff = staffs.find((staff) => (staff.id === id))!;
    this.messageService.add(`staffService : fetched staff id = ${id}`);
    return of(staff);
  }
  constructor(private messageService: MessageService) {}
}
