import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhereComponent } from './where/where.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DownloadComponent } from './download/download.component';
import { TastingComponent } from './tasting/tasting.component';
import { WineTemplateComponent } from './wine-template/wine-template.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    WhereComponent,
    ContactsComponent,
    DownloadComponent,
    TastingComponent,
    WineTemplateComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
