import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-reasons-tabs',
  templateUrl: './other-reasons-tabs.component.html',
  styleUrls: ['./other-reasons-tabs.component.scss']
})
export class OtherReasonsTabsComponent implements OnInit {
  selectedId = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
