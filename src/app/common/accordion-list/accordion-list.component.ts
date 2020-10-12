import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss']
})
export class AccordionListComponent {
  @Input()
  items: any[] = [];
  constructor() { }
}
