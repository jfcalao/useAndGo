import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { FootterComponent } from './footter/footter.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    PaginaPrincipalComponent,
    NavbarComponent,
    CaracteristicasComponent,
    RegistroComponent,
    FootterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
