import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsu-nebbiolo',
  templateUrl: './monsu-nebbiolo.component.html'
})
export class MonsuNebbioloComponent implements OnInit {

  nebbiolo = {
    'name': 'Monsú  Langhe Nebbiolo D.O.C.',
    'grape': 'Nebbiolo',
    'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane, ad una temperatura controllata di 30° C.; segue fermentazione malolattica in fusti di rovere da 500 litri.',
    'DEFermentation': 'Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 30°C; anschliessend malolaktische Säureumwandlung in Eichenfässern von 500 Litern.',
    'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 30°C followed by malolactic fermentation in 500 litre oak casks.',
    'FRFermentation': 'Fermentation et macération en cuve d\'inox pendant environ 2 semaines à température contrôlée de 30°C; suivie d\'une fermetation malolactique en fût de chêne de 500 litres.',
    'ITAging': 'Circa 18 mesi in fusti di rovere da 500 litri e 2 mesi in bottiglia.',
    'DEAging': 'ca. 18 Monate in Eichenfässern von 500 Litern und 2 Monate in der Flasche.',
    'ENAging': 'Around 18 months in oak casks and 2 months in the bottle.',
    'FRAging': 'Environ 18 mois en fût de chêne de 500 litres et 6-12 mois en bouteille.',
    'ITCharacteristics1': 'Colore: rosso granato.',
    'DECharacteristics1': 'Farbe: granatrot.',
    'ENCharacteristics1': 'Colour: garnet red.',
    'FRCharacteristics1': 'Robe: rouge grenade.',
    'ITCharacteristics2': 'Profumo: intenso, importante con sentori di frutta matura e spezie.',
    'DECharacteristics2': 'Bukett: intensiv, kräftig, erinnert an reife Früchte und Gewürze.',
    'ENCharacteristics2': 'Bouquet: intense, with hints of mature fruit and spices.',
    'FRCharacteristics2': 'Bouquet: intense, complexe, aux senteurs de mûres, de réglisse et d’épices.',
    'ITCharacteristics3': 'Sapore: asciutto, di corpo pieno, con tannini armonici.',
    'DECharacteristics3': 'Geschmack: trocken, voller Körper, harmonisches Tannin.',
    'ENCharacteristics3': 'Flavour: dry, full bodied, harmonious tannins.',
    'FRCharacteristics3': 'Corps: vin sec, acidité équilibrée, corsé et plein en bouche.',
    'ITNotes': 'Adatto ad accompagnare piatti di carne, arrosti e formaggi, è un vino che bene si presta anche a lunghi invecchiamenti. In sintesi “Monsú”, in dialetto piemontese, significa signore. Temperatura di servizio 18-20° C.',
    'DENotes': 'Geeignet als Begleiter zu Fleischgerichten, Braten und Käse. Kann viele Jahre gelagert werden. Monsú stammt aus dem piemonte sischen Dialekt und heisst “herr”. Trinktemperatur 18-20° C.',
    'ENNotes': 'Accompanies entire meal, including meats, roasts and cheese. Very suitable for longer aging. Monsú in the piemonteis dialect means “gentleman”. Serve at 18-20° C.',
    'FRNotes': 'S’accorde parfaitement aux viandes rouges, rôtis, gibiers et fromages. Se prête à un long vieillissement. Monsú, en dialecte piémontais, signifie monsieur. Servir à 18-20° C.',
    'photo': 'assets/images/Wines/Monsu.png',
    'photo15': 'assets/images/Wines/Monsu_15.png',
    'photo3': 'assets/images/Wines/Monsu_3.png',
    'photo5': 'assets/images/Wines/Monsu_5.png',
    'downloadPDF': 'assets/download/Monsu.pdf',
    'downloadZIP': 'assets/download/Monsu.zip',
    'format': [
      {
        'value': '0.75 l',
      },
      {
        'value': '1.5 l',
      },
      {
        'value': '3 l',
      },
      {
        'value': '5 l',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
