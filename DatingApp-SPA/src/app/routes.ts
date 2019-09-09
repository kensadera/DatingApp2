
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}, canActivate: [AuthGuard]},
      {path: 'members', component: RegisterComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}, canActivate: [AuthGuard]},
      {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
      canDeactivate: [PreventUnsavedChanges], canActivate: [AuthGuard]},
      {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
      {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]}

    ]
  },
  {path: '**', redirectTo: 'home', pathMatch : 'full'}
];



