import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhereComponent } from './components/where/where.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { ArneisComponent } from './components/wines/arneis/arneis.component';
import { BarbarescoGallinaComponent } from './components/wines/barbaresco-gallina/barbaresco-gallina.component';
import { BarbarescoPianCavalloComponent } from './components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component';
import { BarberaComponent } from './components/wines/barbera/barbera.component';
import { GrappaComponent } from './components/wines/grappa/grappa.component';
import { MonsuRoseComponent } from './components/wines/monsu-rose/monsu-rose.component';
import { MonsuNebbioloComponent } from './components/wines/monsu-nebbiolo/monsu-nebbiolo.component';
import { DolcettoComponent } from './components/wines/dolcetto/dolcetto.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tasting',
    component: TastingComponent
  },
  {
    path: 'where',
    component: WhereComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'wines',
    component: MonsuNebbioloComponent
  },
  {
    path: 'wines/arneis',
    component: ArneisComponent
  },
  {
    path: 'wines/barbarescoGallina',
    component: BarbarescoGallinaComponent
  },
  {
    path: 'wines/barbarescoPianCavallo',
    component: BarbarescoPianCavalloComponent
  },
  {
    path: 'wines/barbera',
    component: BarberaComponent
  },
  {
    path: 'wines/grappa',
    component: GrappaComponent
  },
  {
    path: 'wines/monsuRose',
    component: MonsuRoseComponent
  },
  {
    path: 'wines/monsuNebbiolo',
    component: MonsuNebbioloComponent
  },
  {
    path: 'wines/dolcetto',
    component: DolcettoComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
});
export class AppRoutingModule {
}

