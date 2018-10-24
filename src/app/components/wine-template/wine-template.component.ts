import { Component, OnInit, Input } from '@angular/core';
import { thumbnailAnimation } from './../../animations';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-wine-template',
  templateUrl: './wine-template.component.html',
  animations: [
    thumbnailAnimation
  ],
  styleUrls: ['./wine-template.component.css']
})
export class WineTemplateComponent implements OnInit {

  show075Formats = false;
  show15Formats = false;
  show3Formats = false;
  show5Formats = false;
  showFormats = false;
  isGrappa = false;
  isLarge = false;

  winesList: any[] = [
    {
      'name': 'Monsú  Langhe Nebbiolo D.O.C.',
      'link': '/wines/monsuNebbiolo',
      'class': '',
      'id': 'ID_Monsú  Langhe Nebbiolo D.O.C.'
    },
    {
      'name': 'Barbaresco D.O.C.G. "Pian Cavallo"',
      'link': '/wines/barbarescoPianCavallo',
      'class': '',
      'id': 'ID_Barbaresco D.O.C.G. "Pian Cavallo"'
    },
    {
      'name': 'Barbaresco D.O.C.G. "Gallina"',
      'link': '/wines/barbarescoGallina',
      'class': '',
      'id': 'ID_Barbaresco D.O.C.G. "Gallina"'
    },
    {
      'name': 'Barbera d\'Alba D.O.C. "Pulin"',
      'link': '/wines/barbera',
      'class': '',
      'id': 'ID_Barbera d\'Alba D.O.C. "Pulin"'
    },
    {
      'name': 'Dolcetto d\'Alba D.O.C. "Pian Cavallo"',
      'link': '/wines/dolcetto',
      'class': '',
      'id': 'ID_Dolcetto d\'Alba D.O.C. "Pian Cavallo"'
    },
    {
      'name': 'Monsú Rosé Langhe D.O.C. Rosato',
      'link': '/wines/monsuRose',
      'class': '',
      'id': 'ID_Monsú Rosé Langhe D.O.C. Rosato'
    },
    {
      'name': 'Roero Arneis D.O.C.G.',
      'link': '/wines/arneis',
      'class': '',
      'id': 'ID_Roero Arneis D.O.C.G.'
    },
    {
      'name': 'Grappa Monsú ',
      'link': '/wines/grappa',
      'class': '',
      'id': 'ID_Grappa Monsú '
    }
  ];

  private _wine;

  constructor(private translate: TranslateService) {

  }

  ngOnInit() { }



  @Input()
  set wine(wine: any) {

    this._wine = wine;
    if (wine.format) {
      this.showFormats = true;
    } else {
      this.showFormats = false;
    }
    if (wine.name === 'Grappa Monsú ') {
      this.isGrappa = true;
    } else {
      this.isGrappa = false;
    }
    this.show075Formats = true;

    let largeActive = false;
    this.winesList.forEach(element => {
      if (element.name === wine.name) {
        element.class = 'list-group-item active';
      } else if (!largeActive) {
        element.class = 'list-group-item';
      }
    });
  }

  resetDefaultFormat() {
    this.setShowFormat(0);
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
    event.stopPropagation();
    const car = document.getElementById('carousel');
  }

  setShowFormat(index: number) {
    switch (index) {
      case 0: this.show075Formats = true;
        this.show15Formats = false;
        this.show3Formats = false;
        this.show5Formats = false;
        break;
      case 1: this.show075Formats = false;
        this.show15Formats = true;
        this.show3Formats = false;
        this.show5Formats = false;
        break;
      case 2: this.show075Formats = false;
        this.show15Formats = false;
        this.show3Formats = true;
        this.show5Formats = false;
        break;
      case 3: this.show075Formats = false;
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