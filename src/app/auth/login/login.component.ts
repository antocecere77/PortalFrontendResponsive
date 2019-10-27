import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  invalidUserPassword = false;
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.isLoading = true;
    const userId = this.signupForm.value.userId;
    const password = this.signupForm.value.password;

    this.auth.login(userId, password).subscribe(
      data => {
        console.log(data);
        console.log('User id ' + this.auth.getUserId());
        this.router.navigate(['/pages'], {relativeTo: this.route});
      },
      error => {
        console.log(error);
        this.invalidUserPassword = true;
        this.isLoading = false;
      });
  }
}
