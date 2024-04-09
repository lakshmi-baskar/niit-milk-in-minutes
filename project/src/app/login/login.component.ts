import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoginData } from '../models/login';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData:LoginData={};
  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router,private authService:AuthService) {}
  submitForm(loginForm: NgForm) {
    // Call the signup service to get user data
    this.userService.getUsers().subscribe(
      (users) => {
        // Find the user in the array
        const user = users.find(u => u.firstName === this.loginData.firstName && u.email === this.loginData.email && u.password === this.loginData.password);

        if (user) {
          alert('Login successful!');
          // Navigate to the home page after successful login
           this.authService.login();
          this.router.navigate(['/products']);
        } else {
          alert('Invalid credintals.please try again')
          this.showSnackBar('Invalid credentials. Please try again.', 'error');
        }
      },
      (error) => {
        console.error('Error getting user data:', error);
        this.showSnackBar('Error getting user data. Please try again.', 'error');
      }
    );
  }
  resetForm(loginForm: any) {
    // Reset form values and mark them as pristine
    loginForm.resetForm();
  }

  private showSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}






