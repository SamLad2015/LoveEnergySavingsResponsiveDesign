import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  navMenuList = ['Business Energy', 'Home Energy', 'Other Services', 'Content Hub', 'About Us'];
  constructor() { }

  ngOnInit(): void {
  }

}
