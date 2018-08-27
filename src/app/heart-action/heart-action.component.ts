import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-action',
  templateUrl: './heart-action.component.html',
  styleUrls: ['./heart-action.component.css']
})
export class HeartActionComponent implements OnInit {
  public active: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.active = !this.active;
  }
}
