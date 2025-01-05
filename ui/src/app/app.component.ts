import { Component } from '@angular/core';
import { UserListComponent } from '../user/components/user-list/user-list.component';
import { UserFormComponent } from '../user/components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, UserFormComponent], // <-- Agrega estos componentes aquí
})
export class AppComponent {
  title = 'ui';
}
