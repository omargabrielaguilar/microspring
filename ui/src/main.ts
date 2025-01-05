import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Bootstrap para el navegador
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
