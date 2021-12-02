import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent
  },
  {
    path: 'chat-detail/:chatId',
    component: ChatDetailComponent
  },
  {
    path: 'contact-list',
    component: ContactsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
