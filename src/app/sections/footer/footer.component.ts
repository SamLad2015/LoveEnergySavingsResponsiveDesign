import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  expanded1 = false;
  expanded2 = false;
  expanded3 = false;
  expanded4 = false;
  expanded5 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
