import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = { id: '', firstName: '', lastName: '', email: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  saveUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
