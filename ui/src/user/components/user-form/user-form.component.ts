import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = { id: '', firstName: '', lastName: '', email: '' };

  constructor(private userService: UserService) { }

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      alert('User created successfully!');
    });
  }
}
