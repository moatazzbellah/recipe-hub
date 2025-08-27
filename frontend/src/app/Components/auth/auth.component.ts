import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin = true;


  loginEmail = '';
  loginPassword = '';

  signupName = '';
  signupEmail = '';
  signupPassword = '';

loginMessage: string = '';
loginSuccess: boolean = false;

signupMessage: string = '';
signupSuccess: boolean = false;
  constructor(private authService: AuthService,private router: Router){}
  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
  this.authService.login(this.loginEmail, this.loginPassword).subscribe({
    next: () => this.router.navigate(['/recipes']),
    error: (err) => { 
      console.error('Signup error:', err)
     this.loginSuccess = false;
      this.loginMessage = 'Login failed: ' + err.error.message;
    }
  });
}

  onSignUp() {
    console.log('SignUp:', this.signupName, this.signupEmail, this.signupPassword);
      this.authService.signup(this.signupName, this.signupEmail, this.signupPassword).subscribe({
      next: (res) =>{ 
        console.log('Signup success:', res),
        this.signupSuccess = true;
        this.signupMessage = 'Sign up successful!';
      },
      error: (err) =>{ console.error('Signup error:', err)
       this.signupSuccess = false;
      this.signupMessage = 'Sign up failed: ' + err.error.message;
      }
      });
  }
}
