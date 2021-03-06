import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showChatDetail() {
    this.router.navigate(['chat-detail/aqui-va-el-id']);
  }
}
