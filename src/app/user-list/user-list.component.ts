import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    let item = { name: 'Harsh', age: 22 };
    this.parentComponent.emit(item);
  }
}
