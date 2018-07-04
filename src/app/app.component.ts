import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchedValue: String = '';

  search($event) {
    this.searchedValue = $event.target.value;
  }
}
