import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-barbaresco-pian-cavallo",
  templateUrl: "./barbaresco-pian-cavallo.component.html",
})
export class BarbarescoPianCavalloComponent implements OnInit {
  barbarescoPianCavallo = {
    name: 'Barbaresco D.O.C.G. "PianCavallo"',
    grape: "Nebbiolo",
    ITFermentation:
      "Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di circa 30° C., segue fermentazione malolattica in fusti di rovere da 500 litri.",
    DEFermentation:
      "Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 30°C; anschliessend malolaktische  äureumwandlung in Eichenfässen von 500 Litern.",
    ENFermentation:
      "Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 30°C followed by malo-lactic fermentation in 500 litre oak casks.",
    FRFermentation:
      "Fermentation et macération en cuve d'inox pendant environ 2 semaines à température contrôlée de environ 30°C; suivie d'une fermetation malolactique en fût de chêne de 500 litres.",
    ITAging:
      "Circa 24 mesi in fusti di rovere da 500 litri e 6-12 mesi in bottiglia.",
    DEAging:
      "ca. 24 Monate in Eichenfässern von 500 Litern und 6-12 Monate in der Flasche.",
    ENAging:
      "Around 24 months in 500 litre oak casks and 6-12 months in the bottle.",
    FRAging:
      "Environ 24 mois en fût de chêne de 500 litres et 6-12 mois en bouteille.",
    ITCharacteristics1: "Colore: rosso granato.",
    DECharacteristics1: "Farbe: granatrot.",
    ENCharacteristics1: "Colour: garnet red.",
    FRCharacteristics1: "Robe: rouge grenade.",
    ITCharacteristics2:
      "Profumo: intenso, complesso con aromi che ricordano le more, la liquirizia, le spezie.",
    DECharacteristics2:
      "Bukett: intensiv, komplexe Aromen, die an Brombeeren, Lakritze und Gewürze erinnern.",
    ENCharacteristics2:
      "Bouquet: intense, with hints of blackberries, liquorice and spices.",
    FRCharacteristics2:
      "Bouquet: intense, complexe, aux senteurs de mûres, de réglisse et d’épices.",
    ITCharacteristics3:
      "Sapore: pieno e ricco in bocca, con tannini fini ed armonici.",
    DECharacteristics3:
      "Geschmack: voll und reich im Munde, feines, harmonisches Tannin.",
    ENCharacteristics3: "Flavour: dry, ric, full bodied, harmonious tannins.",
    FRCharacteristics3:
      "Corps: plein et riche en bouche, tanins fins et harmonieux.",
    ITNotes:
      "Accompagna ottimamente carni rosse, arrosti, selvaggina e formaggi; vino che è adatto anche a lunghi invecchiamenti. Temperatura di servizio 18-20° C.",
    DENotes:
      "Idealer Begleiter zu rotem Fleisch, Braten, Wild und Käse.Eignet sich auch für lange Lagerung. Trinktemperatur 18-20° C.",
    ENNotes:
      "Accompanies entire meal, including meats, roasts, game and cheese. Very suitable for longer aging. Serve at 18-20° C.",
    FRNotes:
      "Accompagne parfaitement viandes rouges, rôtis, gibiers et fromages. Se prête à un long vieillissement. Servir à 18-20° C.",
    photo: "assets/images/Wines/Barbaresco_Pian_Cavallo.png",
    photo15: "assets/images/Wines/BarbarescoPC_15.png",
    photo3: "assets/images/Wines/Barbaresco_3.png",
    photo5: "assets/images/Wines/Barbaresco_5.png",
    downloadPDF: "assets/download/BarbarescoPianCavallo.pdf",
    downloadZIP: "assets/download/BarbarescoPianCavallo.zip",
    format: [
      {
        value: "0.75 l",
      },
      {
        value: "1.5 l",
      },
      {
        value: "3 l",
      },
      {
        value: "5 l",
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
