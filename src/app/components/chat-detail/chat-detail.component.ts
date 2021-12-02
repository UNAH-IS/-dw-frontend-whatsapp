import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPaperPlane, faStickyNote } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  faStickyNote = faStickyNote;
  faPaperPlane = faPaperPlane;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}

/usuarios
GET Listar los usuarios
GET Listar los chats de los usuarios
GET Listar contactos
GET Obtener solo un usuario

/chats
POST Enviar un mensaje
GET Obtener el Detalle de una conversacion/chat
DELETE Borrar una conversacion
GET Listar los stickers
