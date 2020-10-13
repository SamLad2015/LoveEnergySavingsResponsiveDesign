import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-switch-reasons',
  templateUrl: './switch-reasons.component.html',
  styleUrls: ['./switch-reasons.component.scss']
})
export class SwitchReasonsComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
