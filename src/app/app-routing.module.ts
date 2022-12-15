import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TastingComponent } from './tasting/tasting.component';
import { WhereComponent } from './where/where.component';
import { WineTemplateComponent } from './wine-template/wine-template.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'where',
    component: WhereComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'download',
    component: DownloadComponent,
  },
  {
    path: 'tasting',
    component: TastingComponent,
  },
  {
    path: 'wines/:id',
    component: WineTemplateComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
