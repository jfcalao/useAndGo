import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    CaracteristicasComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
