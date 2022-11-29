import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dolcetto",
  templateUrl: "./dolcetto.component.html",
})
export class DolcettoComponent implements OnInit {
  dolcetto = {
    name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
    grape: "Dolcetto",
    ITFermentation:
      "Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di 26° C., cui segue la fermentazione malolattica.",
    DEFermentation:
      "Gärung und Maischung während ca. 2 Wochen bei kontrollierter Temperatur von 26°C; anschliessend malolaktische Säureumwandlung.",
    ENFermentation:
      "Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 26°C followed by malo-lactic fermentation.",
    FRFermentation:
      "Fermentation alcoolique en cuve d'inox pendant environ 2 semaines à température contrôlée de 26°C.",
    ITAging: "Circa 8 mesi in acciaio.",
    DEAging: "ca. 8 Monate im Stahltank.",
    ENAging: "Around 8 months in stainless steel tanks.",
    FRAging: "Environ 8 mois en cuve d'inox.",
    ITCharacteristics1: "Colore: rosso rubino con riflessi violacei.",
    DECharacteristics1: "Farbe: rubinrot mit violetten Reflexen.",
    ENCharacteristics1: "Colour: ruby red with violet reflections.",
    FRCharacteristics1: "Robe: rouge rubis aux reflets violets.",
    ITCharacteristics2:
      "Profumo: vinoso, intenso e fruttato con sentori di ciliegia.",
    DECharacteristics2: "Bukett: weinig, intensiv, erinnert an Kirschen.",
    ENCharacteristics2: "Bouquet: intense, fruity, with hints of cherry.",
    FRCharacteristics2:
      "Bouquet: vineux, intense et fruité aux senteurs de cerise.",
    ITCharacteristics3: "Sapore: secco, asciutto, di medio corpo.",
    DECharacteristics3: "Geschmack: trocken, herb, mittlerer Körper.",
    ENCharacteristics3: "Flavour: dry, medium bodied.",
    FRCharacteristics3: "Corps: sec, moyennement corsé.",
    ITNotes:
      "Accompagna bene tutto il pasto, adatto ad un moderato invecchiamento. Temperatura di servizio 18-20° C.",
    DENotes:
      "Geeignet für die ganze Mahlzeit, mässige Lagerfähigkeit. Trinktemperatur 18-20° C.",
    ENNotes:
      "Accompanies entire meal. Suitable for moderate aging. Serve at 18-20° C.",
    FRNotes:
      "Accompagné parfaitement tout le repas. Se prête à un vieillissement modéré. Servir à 18-20° C.",
    photo: "assets/images/Wines/Dolcetto.png",
    downloadPDF: "assets/download/Dolcetto.pdf",
    downloadZIP: "assets/download/Dolcetto.zip",
  };

  constructor() {}

  ngOnInit() {}
}
