import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
// import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    // TestComponent,
    TableComponent,
    DefaultRouteComponent,
    CustomStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
