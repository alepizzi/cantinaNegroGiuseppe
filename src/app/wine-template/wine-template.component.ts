import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { thumbnailAnimation } from '../animations';
import { winesList } from './wine.utils';

@Component({
  selector: 'app-wine-template',
  templateUrl: './wine-template.component.html',
  animations: [thumbnailAnimation],
  styleUrls: ['./wine-template.component.sass'],
})
export class WineTemplateComponent implements OnInit, OnDestroy {
  show075Formats = false;
  show15Formats = false;
  show3Formats = false;
  show5Formats = false;
  showFormats = false;
  isGrappa = false;
  isLarge = false;
  private subscription: Subscription = new Subscription();
  private routerSubscription: Subscription = new Subscription();
  winesList: any[] = [
    {
      name: 'Monsú  Langhe Nebbiolo D.O.C.',
      link: '/wines/monsuNebbiolo',
      class: '',
      id: 'ID_Monsú  Langhe Nebbiolo D.O.C.',
    },
    {
      name: 'Barbaresco D.O.C.G. "PianCavallo"',
      link: '/wines/barbarescoPianCavallo',
      class: '',
      id: 'ID_Barbaresco D.O.C.G. "PianCavallo"',
    },
    {
      name: 'Barbaresco D.O.C.G. "Gallina"',
      link: '/wines/barbarescoGallina',
      class: '',
      id: 'ID_Barbaresco D.O.C.G. "Gallina"',
    },
    {
      name: 'Barbera d\'Alba D.O.C. "Pulin"',
      link: '/wines/barbera',
      class: '',
      id: 'ID_Barbera d\'Alba D.O.C. "Pulin"',
    },
    {
      name: 'Dolcetto d\'Alba D.O.C. "PianCavallo"',
      link: '/wines/dolcetto',
      class: '',
      id: 'ID_Dolcetto d\'Alba D.O.C. "PianCavallo"',
    },
    {
      name: 'Monsú Rosé Langhe D.O.C. Rosato',
      link: '/wines/monsuRose',
      class: '',
      id: 'ID_Monsú Rosé Langhe D.O.C. Rosato',
    },
    {
      name: 'Roero Arneis D.O.C.G. "Arbeuj"',
      link: '/wines/arneis',
      class: '',
      id: 'ID_Roero Arneis D.O.C.G.',
    },
    {
      name: 'Grappa Monsú ',
      link: '/wines/grappa',
      class: '',
      id: 'ID_Grappa Monsú ',
    },
  ];

  private _wine: any;
  public transitionState: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.transitionState = !this.transitionState;

      const currentWine = winesList[params.id];
      this._wine = currentWine;
      if (currentWine.format) {
        this.showFormats = true;
      } else {
        this.showFormats = false;
      }
      if (currentWine.name === 'Grappa Monsú ') {
        this.isGrappa = true;
      } else {
        this.isGrappa = false;
      }
      this.show075Formats = true;

      let largeActive = false;
      this.winesList.forEach((element) => {
        if (element.name === currentWine.name) {
          element.class = 'list-group-item active';
        } else if (!largeActive) {
          element.class = 'list-group-item';
        }
      });
    });

    this.routerSubscription = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  resetDefaultFormat(newRouterLink: string) {
    this.setShowFormat(0);
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([newRouterLink]));
  }

  changeSlide(index: number) {
    const desiredFormat = this._wine.format[index].value;
    if (desiredFormat === '0.75 l') {
      this.setShowFormat(0);
    }
    if (desiredFormat === '1.5 l') {
      this.setShowFormat(1);
    }
    if (desiredFormat === '3 l') {
      this.setShowFormat(2);
    }
    if (desiredFormat === '5 l') {
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
      if (name.charAt(2) === '_') {
        name = name.slice(3);
      }
      const elements = document.getElementsByClassName(name);
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('wines-format-hidden')) {
          elements[i].classList.remove('wines-format-hidden');
        } else {
          elements[i].classList.add('wines-format-hidden');
        }
      }
    }
  }

  get wine(): any {
    return this._wine;
  }
}
