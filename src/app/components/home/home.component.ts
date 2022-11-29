import { Component, OnInit } from "@angular/core";
import { fade } from "./../../animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  animations: [fade],
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user = {
    name: "Negro Giuseppe",
    age: 42,
  };

  winesList: any[] = [
    {
      name: "Monsú  Langhe Nebbiolo D.O.C.",
      link: "/wines/monsuNebbiolo",
      class: "",
    },
    {
      name: 'Barbaresco D.O.C.G. "PianCavallo"',
      link: "/wines/barbarescoPianCavallo",
      class: "",
    },
    {
      name: 'Barbaresco D.O.C.G. "Gallina"',
      link: "/wines/barbarescoGallina",
      class: "",
    },
    {
      name: 'Barbera d\'Alba D.O.C. "Pulin"',
      link: "/wines/barbera",
      class: "",
    },
    {
      name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
      link: "/wines/dolcetto",
      class: "",
    },
    {
      name: "Monsú Rosé Langhe D.O.C. Rosato",
      link: "/wines/monsuRose",
      class: "",
    },
    {
      name: 'Roero Arneis D.O.C.G. "Arbeuj"',
      link: "/wines/arneis",
      class: "",
    },
    {
      name: "Grappa Monsú ",
      link: "/wines/grappa",
      class: "",
    },
  ];

  showFormat(event: string) {
    if (event) {
      let name = event;
      if (name.charAt(2) === "_") {
        name = name.slice(3);
      }
      const elements = document.getElementsByClassName(name);
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("wines-format-hidden")) {
          elements[i].classList.remove("wines-format-hidden");
        } else {
          elements[i].classList.add("wines-format-hidden");
        }
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
