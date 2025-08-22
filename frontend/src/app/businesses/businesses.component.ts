// businesses.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {
  businesses: any[] = [  // Replace `any[]` with your actual business model type
    { name: 'NSE Stocks', description: 'National Stock Exchange', contactUrl: '#', location: 'Mumbai' },
    { name: 'BSE Stocks', description: 'Bombay Stock Exchange', contactUrl: '#', location: 'Downtown Mumbai' },
    // Add more businesses as needed
  ];
}
