import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  message: string = ''; // To hold success or error messages
  messageClass: string = ''; // To apply success or error classes

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8081/user/login', loginData).subscribe(
      response => {
        if (response.success) {
          this.message = 'Login successful!';
          this.messageClass = 'success';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000); // Redirect after 1 second
        } else {
          this.message = 'Invalid credentials. Please try again.';
          this.messageClass = 'error';
        }
      },
      error => {
        console.error('An error occurred', error);
        this.message = 'An error occurred. Please try again.';
        this.messageClass = 'error';
      }
    );
  }
}
