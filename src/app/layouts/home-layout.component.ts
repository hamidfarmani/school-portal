
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-dashboard></app-dashboard>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent {}