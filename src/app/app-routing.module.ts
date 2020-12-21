import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TableComponent } from './table/table.component';
import { DefaultRouteComponent } from './default-route/default-route.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '**',
    component: DefaultRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
