import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { thumbnailAnimation } from "../animations";
import { winesList } from "./wine.utils";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-wine-template",
  templateUrl: "./wine-template.component.html",
  animations: [thumbnailAnimation],
  styleUrls: ["./wine-template.component.sass"],
})
export class WineTemplateComponent implements OnInit, OnDestroy {
  show075Formats = false;
  show15Formats = false;
  show3Formats = false;
  show5Formats = false;
  showFormats = false;
  isGrappa = false;
  isLarge = false;
  currentLang;
  private subscription: Subscription = new Subscription();
  private routerSubscription: Subscription = new Subscription();
  private langSubscription: Subscription = new Subscription();
  winesList: any[] = [
    {
      name: 'Barbaresco D.O.C.G. "Gallina"',
      link: "/wines/barbarescoGallina",
      class: "",
      id: "ID_Barbaresco_Gallina",
    },
    {
      name: 'Barbaresco D.O.C.G. “Albesani”',
      link: "/wines/barbarescoAlbesani",
      class: "",
      id: "ID_Barbaresco_Albesani",
    },
    {
      name: 'Barbaresco D.O.C.G. "PianCavallo"',
      link: "/wines/barbarescoPianCavallo",
      class: "",
      id: "ID_Barbaresco_PianCavallo",
    },
    {
      name: "Monsú Langhe D.O.C. Nebbiolo",
      link: "/wines/monsuNebbiolo",
      class: "",
      id: "ID_Nebbiolo",
    },
    {
      name: 'Barbera d\'Alba Superiore D.O.C. "Pulin"',
      link: "/wines/barbera",
      class: "",
      id: "ID_Barbera",
    },
    {
      name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
      link: "/wines/dolcetto",
      class: "",
      id: "ID_Dolcetto",
    },
    {
      name: "MonsúRosé Langhe D.O.C. Rosato",
      link: "/wines/monsuRose",
      class: "",
      id: "ID_Rosé",
    },
    {
      name: 'Roero Arneis D.O.C.G. "Arbeuj"',
      link: "/wines/arneis",
      class: "",
      id: "ID_Arneis",
    },
    {
      name: "Grappa Monsú",
      link: "/wines/grappa",
      class: "",
      id: "ID_Grappa",
    },
  ];

  private _wine: any;
  public transitionState: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private metaService: Meta,
    private titleService: Title

  ) {
    this.currentLang = translate.currentLang || translate.defaultLang;
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.transitionState = !this.transitionState;

      const currentWine = winesList[params.id];
      this.titleService.setTitle(`Cantina Negro Giuseppe: ${currentWine.name} `);
      this.metaService.updateTag({ name: 'description', content: `Scopri il nostro vino ${currentWine.name}` });
      this.metaService.updateTag({ name: 'og:title', content: `${currentWine.name}` });
      this.metaService.updateTag({ name: 'og:description', content: `Scopri il nostro vino ${currentWine.name}` });
      this.metaService.updateTag({ name: 'twitter:title', content: `${currentWine.name}` });
      this.metaService.updateTag({ name: 'twitter:description', content: `Scopri il nostro vino ${currentWine.name}` });
      this._wine = currentWine;
      if (currentWine.format) {
        this.showFormats = true;
      } else {
        this.showFormats = false;
      }
      if (currentWine.id === "grappa") {
        this.isGrappa = true;
      } else {
        this.isGrappa = false;
      }
      this.show075Formats = true;

      let largeActive = false;
      this.winesList.forEach((element) => {
        if (element.name === currentWine.name) {
          element.class = "list-group-item active";
        } else if (!largeActive) {
          element.class = "list-group-item";
        }
      });
    });

    this.routerSubscription = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.langSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.currentLang = event.lang;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routerSubscription.unsubscribe();
    this.langSubscription.unsubscribe();
  }

  resetDefaultFormat(newRouterLink: string) {
    this.setShowFormat(0);
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate([newRouterLink]));
  }

  changeSlide(index: number) {
    const desiredFormat = this._wine.format[index].value;
    if (desiredFormat === "0.75 l") {
      this.setShowFormat(0);
    }
    if (desiredFormat === "1.5 l") {
      this.setShowFormat(1);
    }
    if (desiredFormat === "3 l") {
      this.setShowFormat(2);
    }
    if (desiredFormat === "5 l") {
      this.setShowFormat(3);
    }
  }

  setShowFormat(index: number) {
    switch (index) {
      case 0:
        this.show075Formats = true;
        this.show15Formats = false;
        this.show3Formats = false;
        this.show5Formats = false;
        break;
      case 1:
        this.show075Formats = false;
        this.show15Formats = true;
        this.show3Formats = false;
        this.show5Formats = false;
        break;
      case 2:
        this.show075Formats = false;
        this.show15Formats = false;
        this.show3Formats = true;
        this.show5Formats = false;
        break;
      case 3:
        this.show075Formats = false;
        this.show15Formats = false;
        this.show3Formats = false;
        this.show5Formats = true;
        break;
      default:
        break;
    }
  }

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

  get wine(): any {
    return this._wine;
  }
}
