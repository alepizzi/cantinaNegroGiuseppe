import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FacebookModule } from 'ngx-facebook';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { WhereComponent } from './components/where/where.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';

import { appRoutes } from './routerConfig';
import { ArneisComponent } from './components/wines/arneis/arneis.component';
import { WineTemplateComponent } from './components/wine-template/wine-template.component';
import { BarbarescoGallinaComponent } from './components/wines/barbaresco-gallina/barbaresco-gallina.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { BarbarescoPianCavalloComponent } from './components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component';
import { BarberaComponent } from './components/wines/barbera/barbera.component';
import { GrappaComponent } from './components/wines/grappa/grappa.component';
import { MonsuRoseComponent } from './components/wines/monsu-rose/monsu-rose.component';
import { MonsuNebbioloComponent } from './components/wines/monsu-nebbiolo/monsu-nebbiolo.component';
import { DolcettoComponent } from './components/wines/dolcetto/dolcetto.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhereComponent,
    ContactsComponent,
    DownloadComponent,
    HomeComponent,
    ArneisComponent,
    WineTemplateComponent,
    BarbarescoGallinaComponent,
    TastingComponent,
    BarbarescoPianCavalloComponent,
    BarberaComponent,
    GrappaComponent,
    MonsuRoseComponent,
    MonsuNebbioloComponent,
    DolcettoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CookieLawModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FacebookModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
