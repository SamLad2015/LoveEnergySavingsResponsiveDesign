import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input()
  navMenuList: string [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
