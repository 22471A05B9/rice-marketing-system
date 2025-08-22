import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  username: string = '';
  phoneno: string = '';
  quantity: string = '';
  price: string = '';
  location: string = '';
  message: string = '';
  messageClass: string = '';
  users: any[] = []; // Array to hold user data

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUsers(); // Fetch users when the component initializes
  }

  register() {
    this.http.post<any>('http://localhost:8081/user/businesses', {
      username: this.username,
      phoneno: this.phoneno,
      quantity: this.quantity,
      price: this.price,
      location: this.location
    }).subscribe(
      response => {
        this.message = 'Data entered successfully!';
        this.messageClass = 'success';

        // Clear input fields
        this.username = '';
        this.phoneno = '';
        this.quantity = '';
        this.price = '';
        this.location = '';

        // Fetch updated data
        this.fetchUsers();

        // Optionally navigate to another page after 2 seconds
        /*setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);*/
      },
      error => {
        this.message = 'Registration failed. Please try again.';
        this.messageClass = 'error';
      }
    );
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:8081/user/businesses').subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
