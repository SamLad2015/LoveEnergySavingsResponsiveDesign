import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navMenuList = ['Business Energy', 'Home Energy', 'Other Services', 'Content Hub', 'About Us'];
  isMenuVisible = false;
  constructor() { }

  ngOnInit(): void {
  }
}
