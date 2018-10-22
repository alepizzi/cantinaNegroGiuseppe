import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsu-rose',
  templateUrl: './monsu-rose.component.html'
})
export class MonsuRoseComponent implements OnInit {

  monsuRose = {
    'name': 'Monsú Rosé Langhe D.O.C. Rosato',
    'grape': 'Nebbiolo',
    'ITFermentation': 'Fermentazione alcolica in acciaio per circa 20 giorni a una temperatura controllata di 20°C.',
    'DEFermentation': 'Alkoholische Gärung im Stahltank bei einer konstanten Temperatur von 20° C.',
    'ENFermentation': 'Alcoholic fermentation in stainless steel tanks for about 20 days at a controlled 20ºC.',
    'FRFermentation': 'Fermentation alcoolique en cuve d\'inox pendant environ 20 jours à température contrôlée de 20ºC.',
    'ITAging': 'Circa 6 mesi in acciaio.',
    'DEAging': 'ca. 6 Monate im Stahltank.',
    'ENAging': 'Around 6 months in stainless steel tanks.',
    'FRAging': 'Environ 6 mois en cuve d\'inox.',
    'ITCharacteristics1': 'Colore: rosa salmone.',
    'DECharacteristics1': 'Farbe: Lachsrosa.',
    'ENCharacteristics1': 'Colour: salmon pink.',
    'FRCharacteristics1': 'Robe: rose saumon.',
    'ITCharacteristics2': 'Profumo: ampio, fresco, con sentori floreali e note fruttate.',
    'DECharacteristics2': 'Bukett: umfassend, frisch und mit einer fruchtig-blumigen Note.',
    'ENCharacteristics2': 'Bouquet: generous, fresh, with floral and fruity hints.',
    'FRCharacteristics2': 'Bouquet: ample, frais, aux senteurs floraux et nuances fruitées.',
    'ITCharacteristics3': 'Sapore: fresco, morbido e armonico, di corpo.',
    'DECharacteristics3': 'Geschmack: frisch, zart und harmonisch. Voller Körper.',
    'ENCharacteristics3': 'Flavour: fresh, soft and harmonious, good bodied.',
    'FRCharacteristics3': 'Corps: frais, doux et harmonieux, bien corsé.',
    'ITNotes': 'Adatto da aperitivo, ottimo con piatti di pesce, minestre, carni bianche, formaggi freschi; dà il meglio di sé nei primi 3 anni. Temperatura di servizio 8-10°C.',
    'DENotes': 'Besonders geeignet als Aperitif. Sehr gut mit Fischtellern und als Begleiter von Suppen, frischem Käse und weißem Fleisch. Optimale Trinkreife innerhalb von 3 Jahren. Trinktemperatur 8-10º C.',
    'ENNotes': 'Suitable as an aperitif, excellent companion to fish dishes, soups, white meats, fresh cheese; best consumed within 3 years. Serve at 8-10ºC.',
    'FRNotes': 'Idéal en apéritif, s\'accorde parfaitement aux poissons, aux soupes, aux viandes blanches, aux fromages frais; à consommer de préférence dans les trois premières années. Servir à 8-10ºC.',
    'photo': 'assets/images/Wines/Rose.png',
    'photo15': 'assets/images/Wines/Rose_15.png',
    'downloadPDF': 'assets/download/MonsuRose.pdf',
    'downloadZIP': 'assets/download/MonsuRose.zip',
    'format': [
      {
        'value': '0.75 l',
      },
      {
        'value': '1.5 l',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
