import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isProfileMenuOpen = false;
  isMenuOpen = false;

  // Toggle the profile menu
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  // Toggle the main menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close profile menu when clicking outside
 
}
