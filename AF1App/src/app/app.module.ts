import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { BotonBackComponent } from './boton-back/boton-back.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { TableUserComponent } from './table-user/table-user.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserComponentComponent,
    BotonBackComponent,
    DriverCardComponent,
    TableUserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
