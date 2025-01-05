import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list.component';
import { UserFormComponent } from './components/user-form.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [CommonModule],
  providers: [UserService], // Asegúrate de declarar el servicio de usuarios
  exports: [UserListComponent, UserFormComponent],
})
export class UserModule { }
