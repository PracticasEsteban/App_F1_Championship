import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';

import { PilotoInfoComponent } from './piloto-info/piloto-info.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { BotonBackComponent } from './boton-back/boton-back.component';
import { PilotoInfoTableComponent } from './piloto-info-table/piloto-info-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TableComponent,
    PilotoInfoComponent,
    DriverCardComponent,
    BotonBackComponent,
    PilotoInfoTableComponent
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
