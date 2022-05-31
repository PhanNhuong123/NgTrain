import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { staffs } from './mock-staffs';
import { staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private staffsUrl = 'api/staffs';

  private log(message: string) {
    this.messageService.add(`StaffsService : ${message}`);
  }

  public getStaffs(): Observable<staff[]> {
    return this.http.get<staff[]>(this.staffsUrl).pipe(
      tap((_) => this.log('fetch staffs')),
      catchError(this.handleError<staff[]>('getStaffs', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation}  failed: ${error.message}`);
      return of(result as T);
    };
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  // public getStaffs(): Observable<staff[]> {
  //   const STAFFS = of(staffs);
  //   this.messageService.add('StaffService : fetched Staffs');
  //   return STAFFS;
  // }

  public getStaff(id: number): Observable<staff> {
    const url = `${this.staffsUrl}/${id}`;
    // const staff = staffs.find((staff) => staff.id === id)!;

    return this.http.get<staff>(url).pipe(
      tap(() => this.log(`fetch staff id = ${id}`)),
      catchError(this.handleError<staff>(`getStaff id=${id}`))
    );
  }

  public updateStaff(staff: staff): Observable<any> {
    return this.http.put(this.staffsUrl, staff, this.httpOptions).pipe(
      tap(() => {
        this.log(`update staff id = ${staff.id}`);
      }),
      catchError(this.handleError<any>('update Staff'))
    );
  }

  public addStaff(staff: staff): Observable<staff> {
    return this.http.post<staff>(this.staffsUrl, staff, this.httpOptions).pipe(
      tap((newStaff: staff) => this.log(`add staff id = ${newStaff.id}`)),
      catchError(this.handleError<staff>(`addStaff`))
    );
  }

  public deleteStaff(id: number): Observable<staff> {
    const url = `${this.staffsUrl}/${id}`;

    return this.http.delete<staff>(url, this.httpOptions).pipe(
      tap(() => this.log(`delete staff id = ${id}`)),
      catchError(this.handleError<staff>(`delete`))
    );
  }

  public searchStaffs(term: string): Observable<staff[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<staff[]>(`${this.staffsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found staff matching "${term}"`)
          : this.log(` no found staff matching "${term}"`)
      ),
      catchError(this.handleError<staff[]>('search staff ', []))
    );
  }
}
