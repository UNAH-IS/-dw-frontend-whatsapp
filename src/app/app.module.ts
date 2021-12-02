import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StickersComponent } from './components/stickers/stickers.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatDetailComponent,
    ContactsListComponent,
    UsersListComponent,
    StickersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
