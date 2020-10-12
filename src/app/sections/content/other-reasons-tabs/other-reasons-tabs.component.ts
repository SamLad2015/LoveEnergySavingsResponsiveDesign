import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-reasons-tabs',
  templateUrl: './other-reasons-tabs.component.html',
  styleUrls: ['./other-reasons-tabs.component.scss']
})
export class OtherReasonsTabsComponent implements OnInit {
  selectedId = 1;
  reasonsList = [
    {
      id: 1,
      title: 'Enjoy cheaper water rates',
      description: '<p>One of the reasons why businesses can now enjoy cheaper water rates is because you get to pay wholesale prices.</p>\n' +
        '            <p>Since the water markets opened in Scotland, reports suggest that companies have enjoyed savings of up to 12% on their bills – so it makes sense to see how much you could save by switching water providers.</p>\n' +
        '            <p>Not only can you reduce your business water bills, but switching your supplier will allow you to:</p>\n' +
        '            <ul>\n' +
        '                  <li>Become more water-efficient</li>\n' +
        '                  <li>Request consolidated billing and electronic billing</li>\n' +
        '                  <li>Receive a service that is tailored to suit your specific business needs</li>\n' +
        '                  <li>Move your water supply to one supplier if you have sites in multiple regions</li>\n' +
        '               </ul>',
      expanded: false
    },
    {
      id: 2,
      title: 'Consolidate your bills',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      expanded: false
    },
    {
      id: 3,
      title: 'Get a free water audit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:\n' +
        '              <ul>\n' +
        '                <li>Ut enim ad minim veniam</li>\n' +
        '                <li>Quis nostrud exercitation ullamco laboris nisi ut</li>\n' +
        '                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>\n' +
        '              </ul>',
      expanded: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
