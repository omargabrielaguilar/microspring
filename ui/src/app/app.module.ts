import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Para realizar las solicitudes HTTP
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'; // Importar el módulo de usuario

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,  // Incluir el módulo de usuario
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
