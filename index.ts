import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InteraccionService } from 'src/app/services/interaccion.service';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public Editor = ClassicEditor;
  static loginValid = false;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [],
    locale: esLocale,
    eventMouseEnter: (info) => {
      info.el.style.cursor = 'pointer'
    },
    eventClick: (info) => {
      const prospectoID = info.event.id;
      this.router.navigate(['Empresa/Interacciones'], { queryParams: { prospecto: prospectoID } });
    }
    
  };

  constructor(private interaccionService: InteraccionService, private router: Router) {
  }

  ngOnInit(): void {

    this.interaccionService.getProximasFechasInteraccionPorProspecto().subscribe(data => {
      this.calendarOptions.events = data.map(item => {
        return {
          title: item.decision,
          start: new Date(item.fechaProxima),
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
          id: item.prospectoID
        };
      });
    });

    this.valid();

    const userAgent = navigator.userAgent;
    if (userAgent.includes('Mobile')) {
    } else {
    }
  }

  valid() {
    if (HomeComponent.loginValid) {
      return true;
    } else {
      return false;
    }
  }

}
