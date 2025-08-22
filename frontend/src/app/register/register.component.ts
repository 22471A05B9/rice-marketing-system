import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: string = '';
  messageClass: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  register() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      this.http.post<any>('http://localhost:8081/user/register', {
        username,
        email,
        password
      }).subscribe(
        response => {
          // Handle successful registration
          this.message = 'Registration successful!';
          this.messageClass = 'success';

          // Clear input fields
          this.registerForm.reset();

          // Navigate to login page after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        },
        error => {
          // Handle error
          if (error.status === 400 && error.error.message === 'Username already taken') {
            this.message = 'Username already taken. Please choose a different username.';
          } else {
            this.message = 'Registration Success.';
          }
          this.messageClass = 'error';
        }
      );
    } else {
      this.message = 'Form is invalid. Please check the fields and try again.';
      this.messageClass = 'error';
    }
  }
}