import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-search',
  templateUrl: './staff-search.component.html',
  styleUrls: ['./staff-search.component.scss'],
})
export class StaffSearchComponent implements OnInit {
  public staffs$!: Observable<staff[]>;
  private searchTerms = new Subject<string>();

  constructor(private staffService: StaffService) {}

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.staffs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.staffService.searchStaffs(term))
    );
  }
}
