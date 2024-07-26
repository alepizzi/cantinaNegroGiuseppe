import { Component } from "@angular/core";
import { fade } from "../animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  animations: [fade],
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent {
  winesList: any[] = [
    {
      name: 'Barbaresco D.O.C.G. "Gallina"',
      link: "/wines/barbarescoGallina",
      class: "",
    },
    {
      name: 'Barbaresco D.O.C.G. “Albesani”"',
      link: "/wines/barbarescoAlbesani",
      class: "",
    },
    {
      name: 'Barbaresco D.O.C.G. "PianCavallo"',
      link: "/wines/barbarescoPianCavallo",
      class: "",
    },
    {
      name: "Monsú Langhe D.O.C. Nebbiolo",
      link: "/wines/monsuNebbiolo",
      class: "",
    },
    {
      name: 'Barbera d\'Alba Superiore D.O.C. "Pulin"',
      link: "/wines/barbera",
      class: "",
    },
    {
      name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
      link: "/wines/dolcetto",
      class: "",
    },
    {
      name: "MonsúRosé Langhe D.O.C. Rosato",
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

  showFormat(event?: string | null) {
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
}
