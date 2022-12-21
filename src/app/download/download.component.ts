import { Component } from "@angular/core";
import { fade } from "../animations";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.sass"],
  animations: [fade],
})
export class DownloadComponent {
  wines: any[] = [
    {
      name: "Monsú Langhe Nebbiolo D.O.C.",
      grape: "Nebbiolo",
      photo: "assets/images/Wines/Monsu.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/Monsu.pdf",
      downloadZIP: "assets/download/Monsu.zip",
    },
    {
      name: 'Barbaresco D.O.C.G. "PianCavallo"',
      grape: "Nebbiolo",
      photo: "assets/images/Wines/Barbaresco_Pian_Cavallo.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/BarbarescoPianCavallo.pdf",
      downloadZIP: "assets/download/BarbarescoPianCavallo.zip",
    },
    {
      name: 'Barbaresco D.O.C.G. "Gallina"',
      grape: "Nebbiolo",
      photo: "assets/images/Wines/Barbaresco_gallina.png",
      urlLink: "/wines/barbarescoGallina",
      downloadPDF: "assets/download/BarbarescoGallina.pdf",
      downloadZIP: "assets/download/BarbarescoGallina.zip",
    },
    {
      name: 'Barbera d\'Alba D.O.C."Pulin"',
      grape: "Barbera",
      photo: "assets/images/Wines/Barbera.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/Barbera.pdf",
      downloadZIP: "assets/download/Barbera.zip",
    },
    {
      name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
      grape: "Dolcetto",
      photo: "assets/images/Wines/Dolcetto.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/Dolcetto.pdf",
      downloadZIP: "assets/download/Dolcetto.zip",
    },
    {
      name: "Monsú Rosé Langhe D.O.C. Rosato",
      grape: "Nebbiolo",
      photo: "assets/images/Wines/Rose.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/MonsuRose.pdf",
      downloadZIP: "assets/download/MonsuRose.zip",
    },
    {
      name: 'Roero Arneis D.O.C.G. "Arbeuj"',
      grape: "Arneis",
      photo: "assets/images/Wines/Arneis.png",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/Arneis.pdf",
      downloadZIP: "assets/download/Arneis.zip",
    },
    {
      name: "Grappa Monsú ",
      grape: "Nebbiolo",
      photo: "assets/images/Wines/grappa_monsu.jpg",
      urlLink: "/wines/arneis",
      downloadPDF: "assets/download/GrappaMonsu.pdf",
      downloadZIP: "assets/download/GrappaMonsu.zip",
    },
  ];
}
