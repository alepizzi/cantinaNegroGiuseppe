import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arneis',
  templateUrl: './arneis.component.html'
})
export class ArneisComponent implements OnInit {

  arneis = {
    'name': 'Roero Arneis D.O.C.G. "Arbeuj"',
    'grape': 'Arneis',
    'ITFermentation': 'Fermentazione alcoolica in acciaio per circa 20 giorni ad una temperatura controllata di 16° C.',
    'DEFermentation': 'Alkoholische Gärung im Stahltank während ca. 20 Tagen bei kontrollierter Temperatur von 16°C.',
    'ENFermentation': 'Alcoholic fermentation in stainless steel tanks for about 20 days at 16°C.',
    'FRFermentation': 'Fermentation alcoolique en cuve d\'inox pendant environ 20 jours à température contrôlée de 16°C.',
    'ITAging': 'Circa 6 mesi in acciaio.',
    'DEAging': 'ca. 6 Monate im Stahltank.',
    'ENAging': 'Around 6 months in stainless steel tanks.',
    'FRAging': 'Environ 6 mois en cuve d\'inox.',
    'ITCharacteristics1': 'Colore: giallo paglierino tenue.',
    'DECharacteristics1': 'Farbe: helles Strohgelb.',
    'ENCharacteristics1': 'Colour: pale straw yellow.',
    'FRCharacteristics1': 'Robe: limpide, jaune paille.',
    'ITCharacteristics2': 'Profumo: ampio, fresco, con sentori floreali.',
    'DECharacteristics2': 'Bukett: umfassend, frisch, blumig.',
    'ENCharacteristics2': 'Bouquet: generous, fresh, floral.',
    'FRCharacteristics2': 'Bouquet: ample, frais, aux senteurs floraux.',
    'ITCharacteristics3': 'Sapore: fresco, armonico, morbido.',
    'DECharacteristics3': 'Geschmack: frisch, harmonisch, zart.',
    'ENCharacteristics3': 'Flavour: fresh, harmonious, soft.',
    'FRCharacteristics3': 'Corps: frais, harmonieux, doux.',
    'ITNotes': 'Adatto da aperitivo, ottimo con antipasti leggeri e pesce, dà il meglio di sé nei primi 3 anni. Temperatura di servizio 8-10° C.',
    'DENotes': 'Geeignet als Aperitif, sehr gut mit leichten Vorspeisen und Fisch, optimale Trinkreife innerhalb von 3 Jahren. Trinktemperatur 8-10° C.',
    'ENNotes': 'Suitable as an aperitif, excellent companion to light hors d\'oeuvres and fish. Best consumed within 3 years. Serve at 8-10° C.',
    'FRNotes': 'Idéal en apéritif, s\'accorde parfaitement aux entrées lègéres et aux poissons. A consommer de préférence dans les 3 premières années. Servir à 8-10° C.',
    'photo': 'assets/images/Wines/Arneis.png',
    'photo15': 'assets/images/Wines/Arneis_15.png',
    'downloadPDF': 'assets/download/Arneis.pdf',
    'downloadZIP': 'assets/download/Arneis.zip',
    'format': [
      {
        'value': '0.75 l',
      },
      {
        'value': '1.5 l',
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
