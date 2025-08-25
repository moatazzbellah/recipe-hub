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

  constructor(private authService: AuthService,private router: Router){}
  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
  this.authService.login(this.loginEmail, this.loginPassword).subscribe({
    next: () => this.router.navigate(['/recipes']),
    error: (err) => console.error('Signup error:', err)

  });
}

  onSignUp() {
    console.log('SignUp:', this.signupName, this.signupEmail, this.signupPassword);
      this.authService.signup(this.signupName, this.signupEmail, this.signupPassword).subscribe({
      next: (res) => console.log('Signup success:', res),
      error: (err) => console.error('Signup error:', err)
    });
  }
}
