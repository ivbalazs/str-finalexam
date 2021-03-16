import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  filterKey: string = '';
  columnKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onFilter(event: Event): void {
    this.filterKey = (event.target as HTMLInputElement).value;
  }

  onDelete(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.remove(user).subscribe((resp: any) => {
        this.users$ = this.userService.getAll();
      });
    }
  }

  onSelect(key: string): void {
    this.columnKey = key;
  }

}
