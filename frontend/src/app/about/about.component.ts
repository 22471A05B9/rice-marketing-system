import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';
  users: any[] = [];
  currentUserId: number | null = null;
  private apiUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  register() {
    const user = { username: this.username, email: this.email, password: this.password };

    if (this.currentUserId) {
      // Update user if currentUserId is set
      this.http.put<any>(`${this.apiUrl}/users/${this.currentUserId}`, user).subscribe(
        response => {
          this.message = 'User updated successfully!';
          this.messageClass = 'success';
          this.currentUserId = null; // Clear the edit mode
          this.loadUsers();
        },
        error => {
          this.message = 'Error updating user!';
          this.messageClass = 'error';
        }
      );
    } else {
      // Register new user
      this.http.post<any>(`${this.apiUrl}/register`, user).subscribe(
        response => {
          this.message = 'User registered successfully!';
          this.messageClass = 'success';
          this.loadUsers();
        },
        error => {
          this.message = 'Error registering user!';
          this.messageClass = 'error';
        }
      );
    }

    // Clear input fields
    this.username = '';
    this.email = '';
    this.password = '';
  }

  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/users`).subscribe(
      users => this.users = users,
      error => console.error('Error fetching users:', error)
    );
  }

  deleteUser(id: number) {
    this.http.delete<any>(`${this.apiUrl}/users/${id}`).subscribe(
      response => {
        this.message = 'User deleted successfully!';
        this.messageClass = 'success';
        this.loadUsers();
      },
      error => {
        this.message = 'Error deleting user!';
        this.messageClass = 'error';
      }
    );
  }

  editUser(user: any) {
    this.username = user.username;
    this.email = user.email;
    this.password = ''; // Do not pre-fill the password
    this.currentUserId = user.id;
  }

  
}
