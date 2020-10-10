import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-suppliers',
  templateUrl: './water-suppliers.component.html',
  styleUrls: ['./water-suppliers.component.scss']
})
export class WaterSuppliersComponent implements OnInit {
  waterSuppliers = [
    {
      logo: 'everflow-water.png',
      description: 'Independent water supplier Everflow promise to build a well for every 250 customers switched'},
    {
      logo: 'castle-water-smaller-logo.png',
      description: 'Launched in 2014, Castle Water is the UK’s leading independent business water supplier'},
    {
      logo: 'water-business.png',
      description: 'Water2business date back to a joint venture created by Bristol Water and Wessex Water in 2000'},
    {
      logo: 'wave.png',
      description: 'Wave Utilities is a leading national water supplier with over 300,000 business customers'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
