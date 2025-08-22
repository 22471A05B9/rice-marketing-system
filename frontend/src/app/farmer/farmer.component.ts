import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrl: './farmer.component.css'
})
export class FarmerComponent implements OnInit {
  farmer: string = '';
  phoneno: string = '';
  type: string = '';
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
    this.http.post<any>('http://localhost:8081/user/farmersi', {
      farmer: this.farmer,
      phoneno: this.phoneno,
      type: this.type,
      price: this.price,
      location: this.location
    }).subscribe(
      response => {
        this.message = 'Data entered successfully!';
        this.messageClass = 'success';

        // Clear input fields
        this.farmer = '';
        this.phoneno = '';
        this.type = '';
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
    this.http.get<any[]>('http://localhost:8081/user/farmer/id').subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
