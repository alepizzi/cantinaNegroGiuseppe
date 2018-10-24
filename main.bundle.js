webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fade; });
/* unused harmony export tranX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return thumbnailAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var fade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(2000)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }))
    ]),
]);
var tranX = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('tranX', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ transform: 'translateX(20px)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(2000)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ transform: 'translateX(20px)' }))
    ]),
]);
var thumbnailAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('thumbnailAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('900ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".fb-button {\r\n  margin-top: 10px;\r\n}\r\n\r\n.vertical-align {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.my-btn-info {\r\n  color: #fff;\r\n  background-color: #074576;\r\n  border-color: rgb(97, 123, 141);\r\n  display: block;\r\n  margin: 20px auto;\r\n}\r\n\r\n.link {\r\n  font-size: 18px;\r\n}\r\n\r\n.icon-margin {\r\n  margin-right: 5px\r\n}\r\n\r\n.powered-link {\r\n  /* color: #fff; */\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n}\r\n\r\n.powered {\r\n  margin: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\r\n<router-outlet></router-outlet>\r\n<!-- <button type=\"button\" (click)=\"dismiss()\">Dismiss Modal</button>\r\n<cookie-law #cookieLaw></cookie-law> -->\r\n<div>\r\n  <cookie-law #cookieLaw name=\"cantinaNegroCookie\" position=\"top\">Questo sito utilizza i cookie per semplificare e\r\n    migliorare la navigazione. Chiudendo questa\r\n    notifica o proseguendo nella\r\n    navigazione acconsenti al nostro utilizzo dei cookie. Per maggiori dettagli e acconsentire l'utilizzo dei cookie\r\n    consulta la cookie policy\r\n    <a (click)=\"openModalCookie(template)\">qui</a>.</cookie-law>\r\n</div>\r\n\r\n\r\n<footer class=\"my-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <h3>\r\n          Cantina Negro Giuseppe\r\n        </h3>\r\n        <h4>\r\n          Via Gallina, 22\r\n          <br> 12052 Neive (CN) Italia\r\n        </h4>\r\n\r\n        <a class=\"link\" href=\"tel:+390173677468\">\r\n          <span class=\"glyphicon glyphicon-earphone icon-margin\"> </span>\r\n          Tel: +39 0173/677468\r\n        </a>\r\n        <div class=\"clear\"></div>\r\n\r\n        <a class=\"link\" href=\"mailto:cantina@negrogiuseppe.com?subject=Richiesta informazioni\">\r\n          <span class=\"glyphicon glyphicon-envelope icon-margin\"> </span>\r\n          cantina@negrogiuseppe.com\r\n        </a>\r\n        <div class=\"clear\"></div>\r\n        <a href=\"https://www.facebook.com/cantinanegrogiuseppe/\" target=\"blank\" class=\"fa fa-facebook\"></a>\r\n        <a href=\"https://www.instagram.com/cantinanegrogiuseppe/\" target=\"blank\" class=\"fa fa-instagram\"></a>\r\n        <div class=\"clear\"></div>\r\n        <fb-like class=\"fb-button\" layout=\"button\" share=\"true\" href=\"https://www.facebook.com/cantinanegrogiuseppe/\"></fb-like>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n      <div class=\"footer-blocked\">\r\n        <div class=\"col-xs-12\">\r\n          <p class=\"text-uppercase privacy-cookie\">\r\n            Copyright © 2018. All Rights Reserved • Cantina Negro Giuseppe • Via Gallina 22 - 12052 Neive - Italy P.Iva\r\n            00784640047 •\r\n            Tel/Fax: 0173/677468\r\n            <br>\r\n            <a (click)=\"openModal(template)\">Privacy</a>\r\n            |\r\n            <a (click)=\"openModal(template)\">Cookie</a>\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12\">\r\n        <p class=\"powered\">\r\n          Powered by\r\n          <a href=\"https://www.linkedin.com/in/apizzigalli/\" target=\"blank\" class=\"powered-link\">Alessandro Pizzigalli</a>\r\n          and\r\n          <a href=\"https://www.linkedin.com/in/annanegro/\" target=\"blank\" class=\"powered-link\">Anna Negro</a>\r\n        </p>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <!--   <div>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n  </div> -->\r\n\r\n</footer>\r\n\r\n<br>\r\n\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Privacy Policy</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>\r\n      Ai sensi dell’art. 13, D.Lgs. 30 giugno 2003 n. 196 e del GDPR introdotto con regolamento\r\n      UE 2016/679, Vi informiamo che Negro Piergiorgio garantisce, nell’ambito delle previsioni\r\n      normative, che il trattamento dei dati personali si svolge nel rispetto dei diritti e delle libertà\r\n      fondamentali, nonché della dignità dell’interessato (art. 4, comma 1, lettera i) del codice)\r\n      con particolare riferimento alla riservatezza, all’identità personale, al diritto ed alla\r\n      protezione dei dati personali. <br>\r\n      In questa pagina si descrivono le modalità di gestione del sito internet\r\n      www.negrogiuseppe.com in riferimento al trattamento dei dati personali degli utenti che lo\r\n      consultano: si tratta di un’informativa per il trattamento dei dati personali resa ai sensi del\r\n      Decreto legislativo 196/2003 e Regolamento UE 2016/679 (di seguito Codice Privacy) per\r\n      gli utenti dei servizi del nostro sito erogati via internet. L’informativa non è valida per altri\r\n      siti web eventualmente consultabili attraverso i nostri links, di cui Negro Piergiorgio non è\r\n      in alcun modo responsabile.\r\n    </p>\r\n    <br>\r\n    <h4>OPERAZIONI DI TRATTAMENTO E RELATIVE FINALITÀ</h4>\r\n    <p>\r\n      Tutte le informazioni personali da Voi fornite sono il risultato di una vostra libera scelta:\r\n      non disponiamo di mezzi illeciti per ottenere queste informazioni senza il Vostro consenso.\r\n      Le informazioni che ci fornite attraverso l’invio di una e-mail e/o attraverso la compilazione\r\n      del form di registrazione vengono utilizzate solo per rispondere alle Vostre domande o per\r\n      soddisfare le Vostre richieste; solo previa manifestazione espressa del consenso da parte\r\n      Vostra, la nostra organizzazione potrà utilizzare i Vostri dati personali per finalità quali\r\n      invio di informazioni di carattere promozionale e commerciale, ovvero relative a nuove\r\n      offerte di prodotti o servizi; infine, solo previa ulteriore manifestazione del proprio specifico\r\n      consenso, i Vostri dati personali potranno essere messi a disposizione dei nostri partner\r\n      commerciali in grado di trasmettere informazioni utili o di inviare materiale promozionale di\r\n      Vostro interesse.\r\n    </p>\r\n    <br>\r\n    <h4>MODALITÀ DI TRATTAMENTO</h4>\r\n    <p>\r\n      Il trattamento dei dati personali potrà effettuarsi con o senza l’ausilio di mezzi elettronici e\r\n      comunque automatizzati, e comprenderà tutte le operazioni necessarie al trattamento in\r\n      questione previste all’art. 4 comma 1, lettera a, D.Lgs. 30 giugno 2003 n. 196 (si definisce\r\n      “trattamento” qualunque operazione o complesso di operazioni, effettuati anche senza\r\n      l’ausilio di strumenti elettronici, concernenti la raccolta, la registrazione, l’organizzazione,\r\n      la conservazione, la consultazione, l’elaborazione, la modificazione, la selezione,\r\n      l’estrazione, il raffronto, l’utilizzo, l’interconnessione, il blocco, la comunicazione, la\r\n      diffusione, la cancellazione e la distruzione di dati, anche se non registrati in una banca di\r\n      dati); in ogni caso il trattamento sarà effettuato nell’osservanza di ogni misura cautelativa,\r\n      che ne garantisca la sicurezza e la riservatezza. <br>\r\n      I dati personali saranno trattati esclusivamente da personale incaricato al trattamento\r\n      nominati direttamente dal Titolare del trattamento, Negro Piergiorgio, il quale ha\r\n      predisposto tutte le misure minime di sicurezza informatica necessarie per ridurre al\r\n      minimo il rischio di violazione della privacy degli utenti da parte di terzi, aggiornate\r\n      costantemente e ogniqualvolta si dimostri indispensabile.\r\n    </p>\r\n    <br>\r\n    <h4>DATI DI NAVIGAZIONE</h4>\r\n    <p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito web\r\n      acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione\r\n      è implicita nell’uso dei protocolli di comunicazione di internet. Si tratta di informazioni che\r\n      non sono raccolte per essere associate a interessati identificati, ma che per loro stessa\r\n      natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi,\r\n      permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP o i\r\n      nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in\r\n      notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il\r\n      metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in\r\n      risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine,\r\n      errore, …) ed altri parametri relativi al sistema operativo e all’ambiente informatico\r\n      dell’utente. Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche\r\n      anonime sull’uso del sito e per controllarne il corretto funzionamento e vengono cancellati\r\n      immediatamente dopo l’elaborazione. I dati potrebbero essere utilizzati per l’accertamento\r\n      di responsabilità in caso di ipotetici reati informatici ai danni del sito.</p>\r\n\r\n    <br>\r\n    <h4>FACOLTÀ DI CONFERIRE I VOSTRI DATI</h4>\r\n    <p>\r\n      L’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo\r\n      sito comporta la successiva acquisizione dell’indirizzo del mittente, necessario per\r\n      rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.\r\n    </p>\r\n    <br>\r\n    <h4>COOKIES</h4>\r\n    <p>\r\n      I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall’utente inviano al\r\n      suo terminale (solitamente al browser) dove vengono memorizzati per essere poi\r\n      ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Si individuano due\r\n      macro-categorie: cookie “tecnici” e cookie “di profilazione”.\r\n      Questo sito utilizza i c.d. cookie “tecnici” al solo fine di “effettuare la trasmissione di una\r\n      comunicazione su una rete elettronica, o nella misura strettamente necessaria al fornitore\r\n      di un servizio esplicitamente richiesto dall’utente, al fine di erogare tale servizio” ( art. 122,\r\n      comma 1, del Codice): possono essere suddivisi in cookie di navigazione o di sessione,\r\n      che garantiscono la normale navigazione e fruizione del sito web (permettendo, ad\r\n      esempio, di realizzare un acquisto o autenticarsi per accedere ad aree riservate) e/o\r\n      cookie analytics, assimilati ai cookie tecnici laddove utilizzati direttamente dal gestore del\r\n      sito per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come\r\n      questi visitano il sito stesso e/o cookie di funzionalità, che permettono all’utente la\r\n      navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua, i prodotti\r\n      selezionati per l’acquisto) al fine di migliorare il servizio reso allo stesso.\r\n      L’uso di cookie “tecnici” (variabili di sessione i cui valori memorizzati sul disco fisso del\r\n      dispositivo possono comunque essere cancellati: è inoltre possibile disabilitare i cookie\r\n      seguendo le indicazioni fornite dai principali browser) è strettamente limitato alla\r\n      trasmissione di identificativi di sessione (costituiti da numeri casuali generati dal server) e\r\n      di dati di utilizzo del software necessari per consentire l’esplorazione sicura ed efficiente\r\n      del sito: le variabili (c.d. cookie) di sessione possono evitare il ricorso a tecniche\r\n      informatiche potenzialmente pregiudizievoli per la riservatezza della navigazione degli\r\n      utenti e non consentono l’acquisizione di dati personali identificativi dell’utente.\r\n      Questo sito non fa in alcun modo uso di cookie c.d. “di profilazione” (volti a creare profili\r\n      relativi all’utente ed utilizzati al fine di inviare messaggi pubblicitari in linea con le\r\n      preferenze manifestate dallo stesso nell’ambito della navigazione in rete).\r\n      Questo sito fa uso di cookie c.d. “di terze parti” volti a ricevere sul proprio dispositivo, nel\r\n      corso della navigazione su un sito, cookie inviati da siti o da web server diversi\r\n      (l’archiviazione delle informazioni avviene presso i soggetti terzi): un esempio è\r\n      rappresentato dalla presenza dei “social plugin” per Facebook, Twitter, Google+ e\r\n      Linkedin (si tratta di parti della pagina visitata generate direttamente dai suddetti siti ed\r\n      integrati nella pagina del sito ospitante) il cui utilizzo è finalizzato alla condivisione dei\r\n      contenuti sui social network (la presenza di questi “plugin” comporta la trasmissione di\r\n      cookie da e verso tutti i siti gestiti da terze parti: la gestione delle informazioni raccolte da\r\n      “terze parti” è disciplinata dalle relative informative cui si prega di fare riferimento).\r\n      Elenco completo Policy Privacy cookie di terze parti utilizzati:\r\n    </p>\r\n    <ul>\r\n      <li>google maps <a href='https://www.google.it/intl/it/policies/privacy/' target=\"_blank\">www.google.it/intl/it/policies/privacy/</a></li>\r\n      <li>google.com: <a href='https://www.google.it/intl/it/policies/privacy/' target=\"_blank\">www.google.it/intl/it/policies/privacy/</a></li>\r\n      <li>zopim.com: <a href='https://www.zopim.com/privacy' target=\"_blank\">www.zopim.com/privacy</a></li>\r\n      <li>addthis.com: <a href='https://www.addthis.com/privacy' target=\"_blank\">www.addthis.com/privacy</a></li>\r\n    </ul>\r\n    <br>\r\n    <h4>Gestione dei Cookie</h4>\r\n    <p>\r\n      Come abilitare o disabilitare i Cookie. Se non si conosce il tipo e la versione del browser\r\n      web che si utilizza per accedere a Internet, fare clic su ‘?’ nella parte superiore della\r\n      finestra del browser, quindi fare clic su ‘Informazioni su’. Saranno visualizzate le\r\n      informazioni pertinenti richieste.\r\n    </p>\r\n    <ul>\r\n      <li>\r\n        Microsoft Internet Explorer\r\n        <p>\r\n          Fare clic sull’opzione ‘Strumenti’ nella parte superiore della finestra del browser e\r\n          selezionare ‘Opzioni Internet’, quindi fare clic sulla scheda ‘Privacy’. Assicurarsi che il\r\n          livello di Privacy sia impostato a Medio o inferiore, che quindi abilita i cookie nel browser.\r\n          Le impostazioni al di sopra di Medio disabilitano i cookie.\r\n        </p>\r\n      </li>\r\n      <li>\r\n        Google Chrome (ultima versione)\r\n        <p>\r\n          Fare clic sull’icona nella parte superiore destra della finestra del browser e\r\n          selezionare ‘Impostazioni’. Fare clic su ‘Mostra impostazioni avanzate’ nella parte inferiore\r\n          e localizzare la sezione ‘Privacy’. Fare clic su ‘Impostazioni contenuto’ e nella sezione dei\r\n          cookie nella parte superiore, selezionare ‘consenti impostazione dei dati locali’ per\r\n          abilitare i cookie. Per disabilitare i cookie selezionare le opzioni ‘Impedisci ai siti di\r\n          impostare qualsiasi dato’, ‘Blocca dati dei siti e cookie di terzi’ e ‘Cancella cookie e altri\r\n          dati di siti e plug-in alla chiusura del browser’.\r\n        </p>\r\n      </li>\r\n      <li>\r\n        Mozilla Firefox\r\n        <p>\r\n          Fare clic su ‘Strumenti’ nella parte superiore della finestra del browser e selezionare\r\n          Opzioni. Successivamente, selezionare l’icona Privacy nella parte superiore della\r\n          sovrimpressione che è visualizzata. Selezionare l’opzione ‘Accetta i cookie dai siti’ per\r\n          abilitare i cookie. Se si desidera disabilitare i cookie, rimuovere il segno di spunta dalla\r\n          casella.\r\n        </p>\r\n      </li>\r\n      <li>\r\n        Safari\r\n        <p>\r\n          Fare clic sull’icona dell’ingranaggio nella parte superiore destra della finestra del browser\r\n          e selezionare ‘Preferenze’. Fare clic sull’icona ‘Privacy’ nella parte superiore\r\n          della sovrimpressione che è visualizzata. Selezionare l’opzione ‘Blocca i cookie di terze\r\n          parti e pubblicitari’. Se si desidera disabilitare completamente i cookie, selezionare la\r\n          casella ‘Mai’.\r\n        </p>\r\n      </li>\r\n    </ul>\r\n    <p>\r\n      I cookie tecnici sono essenziali per il funzionamento del sito e non possono essere\r\n      disabilitati utilizzando le funzioni di questo sito web.\r\n      Tutti i cookie diversi da quelli tecnici sopra indicati vengono installati o attivati solo a\r\n      seguito del consenso espresso dall’utente la prima volta che visita un sito.\r\n    </p>\r\n    <br>\r\n    <h4>\r\n      AMBITO DI CONOSCENZA\r\n    </h4>\r\n    <p>\r\n      Possono venire a conoscenza dei Vostri dati esclusivamente soggetti nominati dallo\r\n      scrivente Negro Piergiorgio, titolare del trattamento, in qualità di responsabili o incaricati\r\n      del trattamento.\r\n    </p>\r\n    <br>\r\n    <h4>\r\n      COMUNICAZIONE E DIFFUSIONE\r\n    </h4>\r\n    <p>\r\n      I Vostri dati potranno da noi essere comunicati, con tale termine intendendosi il darne\r\n      conoscenza ad uno o più soggetti determinati, nei seguenti termini:\r\n      a soggetti, pubblici e privati, che possono accedere ai dati in forza di disposizione di legge,\r\n      di regolamento o di normativa comunitaria, nei limiti previsti da tali norme (si citano ad\r\n      esempio, istituti ed enti previdenziali e assistenziali, associazioni di enti locali,\r\n      amministrazioni ed enti pubblici, associazioni, fondazioni, enti od organismi di tipo\r\n\r\n      associativo e/o assicurativo)\r\n      a soggetti che hanno necessità di accedere ai dati per finalità ausiliare al rapporto che\r\n      intercorre tra le parti, nei limiti strettamente necessari per svolgere i compiti ausiliari (si\r\n      citano a titolo indicativo, banche ed istituti di credito, società di erogazione servizi, vettori e\r\n      società di spedizioni)\r\n      a soggetti nostri consulenti, nei limiti necessari per svolgere il loro incarico presso la nostra\r\n      organizzazione, previo nostra lettera di incarico che imponga il dovere di riservatezza e\r\n      sicurezza.\r\n      I Vostri dati non verranno da noi diffusi, con tale termine intendendosi il darne conoscenza\r\n      a soggetti indeterminati in qualunque modo, anche mediante la loro messa a disposizione\r\n      o consultazione, a meno di uno specifico consenso, libero ed informato, da Voi espresso e\r\n      concesso per ciascun tipo di trattamento.\r\n    </p>\r\n    <br>\r\n    <h4>\r\n      DIRITTI DEGLI INTERESSATI\r\n    </h4>\r\n    <p>\r\n      Resta salva la facoltà dei soggetti interessati cui si riferiscono i dati personali di esercitare\r\n      in ogni momento i diritti di cui all’art. 7 (Diritto di accesso ai dati personali ed altri diritti) del\r\n      Codice, in particolare: diritto di ottenere la conferma dell’esistenza o meno dei propri dati\r\n      personali, di accedervi e di conoscerne il contenuto e l’origine, di verificarne l’esattezza, di\r\n      chiederne l’integrazione o l’aggiornamento, oppure la rettificazione e la cancellazione o il\r\n      blocco se incompleti, erronei o raccolti in violazione della normativa vigente, nonché di\r\n      opporsi al loro trattamento per motivi legittimi. In merito all’esercizio dei propri diritti, così\r\n      come per conoscere l’elenco aggiornato dei responsabili del trattamento dei dati personali,\r\n      il soggetto interessato potrà rivolgere le proprie richieste ai sensi dell’art. 13 lettera f) Dlgs\r\n      196/2003 al responsabile designato per il trattamento dei dati personali, inviando\r\n      comunicazione all’indirizzo e-mail cantina@negrogiuseppe.com al fine di ottenere\r\n      tempestivo riscontro.\r\n    </p>\r\n    <br>\r\n    <h4>\r\n      TITOLARE DEL TRATTAMENTO\r\n    </h4>\r\n    <p>\r\n      Titolare del trattamento dei dati personali è Negro Piergiorgio, sede in Via Gallina, 22 –\r\n      Neive (Cn) Italy – Italia.\r\n    </p>\r\n  </div>\r\n  <div>\r\n    <button type=\"button\" class=\"btn my-btn-info\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">Close</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, fb) {
        this.modalService = modalService;
        this.fb = fb;
        this.items = Array(15).fill(0);
        var initParams = {
            appId: '200610240719668',
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    AppComponent.prototype.dismiss = function () {
        this.cookieLawEl.dismiss();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.openModalCookie = function (template) {
        this.cookieLawEl.dismiss();
        this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cookieLaw'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cookieLawEl", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tooltip__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_law__ = __webpack_require__("./node_modules/angular2-cookie-law/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_component__ = __webpack_require__("./src/app/components/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_where_where_component__ = __webpack_require__("./src/app/components/where/where.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_contacts_contacts_component__ = __webpack_require__("./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_download_download_component__ = __webpack_require__("./src/app/components/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__routerConfig__ = __webpack_require__("./src/app/routerConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_wines_arneis_arneis_component__ = __webpack_require__("./src/app/components/wines/arneis/arneis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_wine_template_wine_template_component__ = __webpack_require__("./src/app/components/wine-template/wine-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_wines_barbaresco_gallina_barbaresco_gallina_component__ = __webpack_require__("./src/app/components/wines/barbaresco-gallina/barbaresco-gallina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tasting_tasting_component__ = __webpack_require__("./src/app/components/tasting/tasting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_wines_barbaresco_pian_cavallo_barbaresco_pian_cavallo_component__ = __webpack_require__("./src/app/components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_wines_barbera_barbera_component__ = __webpack_require__("./src/app/components/wines/barbera/barbera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_wines_grappa_grappa_component__ = __webpack_require__("./src/app/components/wines/grappa/grappa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_wines_monsu_rose_monsu_rose_component__ = __webpack_require__("./src/app/components/wines/monsu-rose/monsu-rose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_wines_monsu_nebbiolo_monsu_nebbiolo_component__ = __webpack_require__("./src/app/components/wines/monsu-nebbiolo/monsu-nebbiolo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_wines_dolcetto_dolcetto_component__ = __webpack_require__("./src/app/components/wines/dolcetto/dolcetto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_where_where_component__["a" /* WhereComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_download_download_component__["a" /* DownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_wines_arneis_arneis_component__["a" /* ArneisComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_wine_template_wine_template_component__["a" /* WineTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_wines_barbaresco_gallina_barbaresco_gallina_component__["a" /* BarbarescoGallinaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_tasting_tasting_component__["a" /* TastingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_wines_barbaresco_pian_cavallo_barbaresco_pian_cavallo_component__["a" /* BarbarescoPianCavalloComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_wines_barbera_barbera_component__["a" /* BarberaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_wines_grappa_grappa_component__["a" /* GrappaComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_wines_monsu_rose_monsu_rose_component__["a" /* MonsuRoseComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_wines_monsu_nebbiolo_monsu_nebbiolo_component__["a" /* MonsuNebbioloComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_wines_dolcetto_dolcetto_component__["a" /* DolcettoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_law__["a" /* CookieLawModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__routerConfig__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div @fade class=\"container-fluid wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h1>{{ 'Menu.Contacts' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h3>{{ 'Contacts.Title' | translate }}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center contact\">\r\n      <a href=\"tel:+390173677468\">\r\n        <span class=\"glyphicon glyphicon-earphone icon-margin\"> </span>\r\n        +39 0173/677468</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center contact\">\r\n      <a href=\"mailto:cantina@negrogiuseppe.com?subject=Richiesta informazioni\">\r\n        <span class=\"glyphicon glyphicon-envelope icon-margin\"> </span>\r\n        cantina@negrogiuseppe.com</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <a href=\"https://www.facebook.com/cantinanegrogiuseppe/\" target=\"blank\" class=\"fa fa-facebook\"></a>\r\n      <a href=\"https://www.instagram.com/cantinanegrogiuseppe/\" target=\"blank\" class=\"fa fa-instagram\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <img src=\"assets/images/Background/where.jpg\" class=\"center-block resize-image padding-image img-rounded\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 text-center\">\r\n      <fb-comments></fb-comments>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(fb) {
        this.fb = fb;
        var initParams = {
            appId: '200610240719668',
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/components/contacts/contacts.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* fade */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/download/download.component.css":
/***/ (function(module, exports) {

module.exports = ".download-button {\r\n  margin-top: 15px;\r\n}\r\n\r\n.btn-responsive {\r\n  white-space: normal !important;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.name {\r\n  min-height: 53px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div @fade class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-xs-12 text-center\">\r\n      <h1>{{ 'Wine.Title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row wine-container\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center \" *ngFor=\"let wine of wines\">\r\n      <div class=\"wine-row\">\r\n        <a>\r\n          <div class=\"name\">\r\n            <h3 class=\"title-blue\"> {{ 'Wine.Name' | translate:wine }}</h3>\r\n          </div>\r\n          <h4 class=\"title-blue\"> {{ 'Wine.Grape.Content' | translate:wine }}</h4>\r\n          <img src={{wine.photo}} alt={{wine.grape}} class=\"center-block resize-image-bottle img-rounded\">\r\n        </a>\r\n        <div class=\"row download-button\">\r\n          <div class=\"col-xs-6 text-center\">\r\n            <p>\r\n              <a href=\"{{wine.downloadPDF}}\" class=\"btn my-btn-primary btn-responsive\" role=\"button\" download>{{\r\n                'Download.Profile' | translate }}</a>\r\n            </p>\r\n          </div>\r\n          <div class=\"col-xs-6 text-center\">\r\n            <p>\r\n              <a href=\"{{wine.downloadZIP}}\" class=\"btn my-btn-primary btn-responsive\" role=\"button\" download>{{\r\n                'Download.Image' | translate }}</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadComponent = /** @class */ (function () {
    function DownloadComponent() {
        this.wines = [
            {
                'name': 'Monsú  Langhe Nebbiolo D.O.C.',
                'grape': 'Nebbiolo',
                'photo': 'assets/images/Wines/Monsu.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/Monsu.pdf',
                'downloadZIP': 'assets/download/Monsu.zip'
            },
            {
                'name': 'Barbaresco D.O.C.G. "Pian Cavallo"',
                'grape': 'Nebbiolo',
                'photo': 'assets/images/Wines/Barbaresco_Pian_Cavallo.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/BarbarescoPianCavallo.pdf',
                'downloadZIP': 'assets/download/BarbarescoPianCavallo.zip'
            },
            {
                'name': 'Barbaresco D.O.C.G. "Gallina"',
                'grape': 'Nebbiolo',
                'photo': 'assets/images/Wines/Barbaresco_gallina.png',
                'urlLink': '/wines/barbarescoGallina',
                'downloadPDF': 'assets/download/BarbarescoGallina.pdf',
                'downloadZIP': 'assets/download/BarbarescoGallina.zip'
            },
            {
                'name': 'Barbera d\'Alba D.O.C."Pulin"',
                'grape': 'Barbera',
                'photo': 'assets/images/Wines/Barbera.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/Barbera.pdf',
                'downloadZIP': 'assets/download/Barbera.zip'
            },
            {
                'name': 'Dolcetto d\'Alba D.O.C. "Pian Cavallo"',
                'grape': 'Dolcetto',
                'photo': 'assets/images/Wines/Dolcetto.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/Dolcetto.pdf',
                'downloadZIP': 'assets/download/Dolcetto.zip'
            },
            {
                'name': 'Monsú Rosé Langhe D.O.C. Rosato',
                'grape': 'Nebbiolo',
                'photo': 'assets/images/Wines/Rose.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/MonsuRose.pdf',
                'downloadZIP': 'assets/download/MonsuRose.zip'
            },
            {
                'name': 'Roero Arneis D.O.C.G.',
                'grape': 'Arneis',
                'photo': 'assets/images/Wines/Arneis.png',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/Arneis.pdf',
                'downloadZIP': 'assets/download/Arneis.zip'
            },
            {
                'name': 'Grappa Monsú ',
                'grape': 'Nebbiolo',
                'photo': 'assets/images/Wines/grappa_monsu.jpg',
                'urlLink': '/wines/arneis',
                'downloadPDF': 'assets/download/GrappaMonsu.pdf',
                'downloadZIP': 'assets/download/GrappaMonsu.zip'
            }
        ];
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-download',
            template: __webpack_require__("./src/app/components/download/download.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* fade */]
            ],
            styles: [__webpack_require__("./src/app/components/download/download.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".wines-element {\r\n  color: #333333 !important;\r\n  font-size: 18px;\r\n}\r\n\r\n.wines-element:hover {\r\n  background-color: #074576;\r\n  color: #fff !important;\r\n}\r\n\r\n.left-line {\r\n  border-left: 1px solid #074576;\r\n}\r\n\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n\r\n.wines-format-hidden {\r\n  visibility: collapse;\r\n  height: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.list-wines {\r\n  background-color: #fff;\r\n  margin: 10px;\r\n}\r\n\r\n.list-wines:hover {\r\n  background-color: #074576;\r\n  color: #fff !important;\r\n  margin: 10px;\r\n}\r\n\r\na.wine-name:hover {\r\n  background-color: #005C90;\r\n  ;\r\n}\r\n\r\na.active {\r\n  background-color: #074576;\r\n  color: #fff;\r\n  border-color: #074576;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel>\r\n  <slide>\r\n    <img src=\"assets/images/Carousel/imagecompressor/Portone.JPG\" alt=\"portone cantina negro\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/Carousel/imagecompressor/Neve.jpg\" alt=\"paesaggio innevato\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/Carousel/imagecompressor/SalaDegustazione2.jpg\" alt=\"sala degustazione\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/Carousel/imagecompressor/VigneAutunno.jpg\" alt=\"vigne langhe in autunno\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n</carousel>\r\n\r\n\r\n<div @fade class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"hidden-xs col-sm-3 text-center no-padding\">\r\n      <div class=\"text-center\">\r\n        <h1>{{ 'Wine.Title' | translate }}</h1>\r\n      </div>\r\n      <ul class=\"nav nav-pills nav-stacked\">\r\n        <li *ngFor=\"let wine of winesList\" class=\"list-wines\" (mouseleave)=\"showFormat($event.currentTarget.id)\"\r\n          (mouseenter)=\"showFormat($event.currentTarget.id)\" id=\"ID_{{wine.name}}\" role=\"navigation\">\r\n          <a routerLink=\"{{wine.link}}\" class=\"wines-element\">\r\n            {{wine.name}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-9 left-line\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-12 text-center\">\r\n          <h1> {{ 'Home.Winery.Title' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <h3> {{ 'Home.Winery.1' | translate }}</h3>\r\n          <img @fade src=\"assets/images/Winery/imagecompressor/Botti.jpg\" alt=\"botti di vino in cantina\" class=\"center-block resize-image img-rounded\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <h3> {{ 'Home.Winery.2' | translate }}</h3>\r\n          <img src=\"assets/images/Large formats/imagecompressor/MagnumAromatiche.jpg\" alt=\"magnum aromatiche grandi formati\"\r\n            class=\"center-block resize-image img-rounded\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-12 text-center\">\r\n          <h1> <b>{{ 'Home.Tradition.Title' | translate }}</b></h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <h3> {{ 'Home.Tradition.1' | translate }}</h3>\r\n          <img src=\"assets/images/Tradition/imagecompressor/Famiglia.jpg\" alt=\"tradizioni di famiglia\" class=\"center-block resize-image img-rounded\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <h3> {{ 'Home.Tradition.2' | translate }}</h3>\r\n          <img src=\"assets/images/Tradition/tradizione.jpg\" alt=\"tradizioni di famiglia storica\" class=\"center-block resize-image-magnum img-rounded\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.user = {
            name: 'Negro Giuseppe',
            age: 42
        };
        this.winesList = [
            {
                'name': 'Monsú  Langhe Nebbiolo D.O.C.',
                'link': '/wines/monsuNebbiolo',
                'class': ''
            },
            {
                'name': 'Barbaresco D.O.C.G. "Pian Cavallo"',
                'link': '/wines/barbarescoPianCavallo',
                'class': ''
            },
            {
                'name': 'Barbaresco D.O.C.G. "Gallina"',
                'link': '/wines/barbarescoGallina',
                'class': ''
            },
            {
                'name': 'Barbera d\'Alba D.O.C. "Pulin"',
                'link': '/wines/barbera',
                'class': ''
            },
            {
                'name': 'Dolcetto d\'Alba D.O.C. "Pian Cavallo"',
                'link': '/wines/dolcetto',
                'class': ''
            },
            {
                'name': 'Monsú Rosé Langhe D.O.C. Rosato',
                'link': '/wines/monsuRose',
                'class': ''
            },
            {
                'name': 'Roero Arneis D.O.C.G.',
                'link': '/wines/arneis',
                'class': ''
            },
            {
                'name': 'Grappa Monsú ',
                'link': '/wines/grappa',
                'class': ''
            }
        ];
    }
    HomeComponent.prototype.showFormat = function (event) {
        if (event) {
            var name_1 = event;
            if (name_1.charAt(2) === '_') {
                name_1 = name_1.slice(3);
            }
            var elements = document.getElementsByClassName(name_1);
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].classList.contains('wines-format-hidden')) {
                    elements[i].classList.remove('wines-format-hidden');
                }
                else {
                    elements[i].classList.add('wines-format-hidden');
                }
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* fade */]
            ],
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".toggleMenuStyle {\r\n  display: block;\r\n}\r\n\r\n.lang:hover {\r\n  background-color: #e3e1e1;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default font-navbar\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"onToggleMenu()\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"my-navbar-brand\" routerLink=\"home\">\r\n        <img src=\"assets/images/Home.jpg\">\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'toggleMenuStyle' : toggleMenu === true}\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"lang\">\r\n          <a routerLink=\"wines\" (click)=\"onToggleMenu()\">{{ 'Menu.Wines' | translate }}</a>\r\n        </li>\r\n        <li class=\"lang\">\r\n          <a routerLink=\"tasting\" routerLinkActive=\"active\" (click)=\"onToggleMenu()\">{{ 'Menu.Tasting' | translate }}</a>\r\n        </li>\r\n        <li class=\"lang\">\r\n          <a routerLink=\"download\" (click)=\"onToggleMenu()\">{{ 'Menu.Download' | translate }}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"lang\">\r\n          <a routerLink=\"where\" (click)=\"onToggleMenu()\">{{ 'Menu.Where' | translate }}</a>\r\n        </li>\r\n        <li class=\"lang\">\r\n          <a routerLink=\"contacts\" (click)=\"onToggleMenu()\">{{ 'Menu.Contacts' | translate }}</a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{\r\n            'Menu.Lang' | translate }}\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"lang\">\r\n              <span class=\"lang-sm lang-lbl-full lang-margin\" lang=\"it\" (click)=\"onToggleMenu(); switchLanguage('it')\"></span>\r\n            </li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li class=\"lang\">\r\n              <span class=\"lang-sm lang-lbl-full lang-margin\" lang=\"en\" (click)=\"onToggleMenu(); switchLanguage('en')\"></span>\r\n            </li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li class=\"lang\">\r\n              <span class=\"lang-sm lang-lbl-full lang-margin\" lang=\"fr\" (click)=\"onToggleMenu(); switchLanguage('fr')\"></span>\r\n            </li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li class=\"lang\">\r\n              <span class=\"lang-sm lang-lbl-full lang-margin\" lang=\"de\" (click)=\"onToggleMenu(); switchLanguage('de')\"></span>\r\n            </li>\r\n\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, activatedRoute) {
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.toggleMenu = false;
        translate.setDefaultLang('it');
    }
    NavbarComponent.prototype.onToggleMenu = function () {
        this.scrollTop();
        if (this.toggleMenu === true) {
            this.toggleMenu = false;
        }
        else {
            this.toggleMenu = true;
        }
    };
    NavbarComponent.prototype.scrollTop = function () {
        window.scroll(0, 0);
        document.body.scrollTop = 0;
    };
    NavbarComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            var locale = param['locale'];
            if (locale !== undefined) {
                _this.translate.use(locale);
            }
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tasting/tasting.component.html":
/***/ (function(module, exports) {

module.exports = "<div @fade class=\"container-fluid wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h1>{{ 'Tasting.Title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <img src=\"assets/images/Tasting/imagecompressor/Mamma.jpg\" alt=\"paesaggio con donna con calice di vino\" class=\"center-block resize-image img-rounded\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h3>{{ 'Tasting.1' | translate }}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <img src=\"assets/images/Tasting/imagecompressor/Crutin.jpg\" alt=\"crutin cantinetta\" class=\"center-block resize-image img-rounded\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h3>{{ 'Tasting.2' | translate }}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <img src=\"assets/images/Tasting/imagecompressor/SalaDegustazione1.jpg\" alt=\"sala degustazione monsu\" class=\"center-block resize-image img-rounded\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center\">\r\n      <h3>{{ 'Tasting.3' | translate }}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center contact\">\r\n      <a href=\"tel:+390173677468\">\r\n        <span class=\"glyphicon glyphicon-earphone icon-margin\"> </span>\r\n        +39 0173/677468</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12 text-center contact\">\r\n      <a href=\"mailto:cantina@negrogiuseppe.com?subject=Prenotazione degustazione\">\r\n        <span class=\"glyphicon glyphicon-envelope icon-margin\"> </span>\r\n        cantina@negrogiuseppe.com</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tasting/tasting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TastingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TastingComponent = /** @class */ (function () {
    function TastingComponent() {
    }
    TastingComponent.prototype.ngOnInit = function () {
    };
    TastingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasting',
            template: __webpack_require__("./src/app/components/tasting/tasting.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* fade */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TastingComponent);
    return TastingComponent;
}());



/***/ }),

/***/ "./src/app/components/where/where.component.html":
/***/ (function(module, exports) {

module.exports = "<div @fade class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-xs-12 text-center\">\r\n      <h1>Cantina Negro Giuseppe</h1>\r\n      <h4>\r\n        Via Gallina, 22\r\n        <br> 12052 Neive (CN) Italia\r\n      </h4>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 text-center\">\r\n        <img src=\"assets/images/Where/Map.JPG\" class=\"center-block resize-image padding-image img-rounded\">\r\n        <h3>{{ 'Where.1' | translate }}</h3>\r\n        <img src=\"assets/images/Background/cartello.jpg\" class=\"center-block resize-image padding-image img-rounded\">\r\n        <h3>{{ 'Where.2' | translate }}</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 text-center\">\r\n        <iframe width=\"100%\" height=\"400\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.4005365009925!2d8.095201152581456!3d44.731844624648296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787f574e9f08d93%3A0x5c7784851d87b4bb!2sNegro+Giuseppe+Cantina!5e0!3m2!1sit!2sit!4v1538310226408&key=AIzaSyADJKj-7wHo-gO2IxP_jKqFwc5gKTrj3Qo\"\r\n          allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/where/where.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhereComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhereComponent = /** @class */ (function () {
    function WhereComponent() {
    }
    WhereComponent.prototype.ngOnInit = function () { };
    WhereComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-where',
            template: __webpack_require__("./src/app/components/where/where.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* fade */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WhereComponent);
    return WhereComponent;
}());



/***/ }),

/***/ "./src/app/components/wine-template/wine-template.component.css":
/***/ (function(module, exports) {

module.exports = ".resize-image-wine {\r\n  max-height: 400px;\r\n  max-width: 325px;\r\n}\r\n\r\n.margin-btn {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.center-dropdown {\r\n  margin-left: -80px;\r\n}\r\n\r\na.list-group-item {\r\n  background-color: #fff;\r\n  color: #074576;\r\n  border-color: #074576;\r\n  text-align: center;\r\n}\r\n\r\na.list-group-item:hover {\r\n  background-color: rgb(97, 123, 141);\r\n  color: #fff;\r\n  border-color: #074576;\r\n  text-align: center;\r\n}\r\n\r\na.wine-name:hover {\r\n  background-color: rgb(132, 153, 168);\r\n  ;\r\n}\r\n\r\na.active {\r\n  background-color: #074576;\r\n  color: #fff;\r\n  border-color: #074576;\r\n  text-align: center;\r\n}\r\n\r\na.gran-format {\r\n  border: 1px solid #074576;\r\n  background-color: #fff !important;\r\n  color: #4D4D4D !important;\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/wine-template/wine-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-3 menu-wine school-options-dropdown text-center\">\r\n      <div class=\"text-center hidden-sm hidden-xs\">\r\n        <h1>{{ 'Wine.Title' | translate }}</h1>\r\n      </div>\r\n      <div class=\"list-group hidden-sm hidden-xs\">\r\n        <a routerLink=\"{{wine.link}}\" (click)=\"resetDefaultFormat()\" (mouseleave)=\"showFormat($event.currentTarget.id)\"\r\n          (mouseenter)=\"showFormat($event.currentTarget.id)\" id=\"{{wine.id}}\" class=\"wine-name {{wine.class}} \" *ngFor=\"let wine of winesList\">\r\n          {{wine.name}}\r\n        </a>\r\n      </div>\r\n      <div class=\"dropdown btn-group hidden-md hidden-lg\">\r\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          {{ 'Wine.Title' | translate }}\r\n          <span class=\"caret\"></span>\r\n        </button>\r\n        <ul class=\"dropdown-menu center-dropdown\" aria-labelledby=\"dropdownMenu1\">\r\n          <li *ngFor=\"let wine of winesList\">\r\n            <a routerLink=\"{{wine.link}}\" (mouseleave)=\"showFormat($event.currentTarget.id)\" (mouseenter)=\"showFormat($event.currentTarget.id)\"\r\n              id=\"{{wine.id}}\" class=\"wine-name {{wine.class}}\">\r\n              {{wine.name}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-9 \">\r\n      <div @thumbnailAnimation class=\"thumbnail wine-row-generic\">\r\n        <div class=\"caption\">\r\n          <div class=\"row title-element\">\r\n            <div *ngIf=\"show075Formats && showFormats\" class=\"col col-sm-12 text-center\">\r\n              <h2> {{ 'Wine.Name' | translate:wine }} 0.75 l</h2>\r\n            </div>\r\n            <div *ngIf=\"show075Formats && !showFormats\" class=\"col col-sm-12 text-center\">\r\n              <h2> {{ 'Wine.Name' | translate:wine }}</h2>\r\n            </div>\r\n            <div *ngIf=\"show15Formats\" class=\"col col-sm-12 text-center\">\r\n              <h2> {{ 'Wine.Name' | translate:wine }} 1.5 l</h2>\r\n            </div>\r\n            <div *ngIf=\"show3Formats\" class=\"col col-sm-12 text-center\">\r\n              <h2> {{ 'Wine.Name' | translate:wine }} 3 l</h2>\r\n            </div>\r\n            <div *ngIf=\"show5Formats\" class=\"col col-sm-12 text-center\">\r\n              <h2> {{ 'Wine.Name' | translate:wine }} 5 l</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row margin-from-title\">\r\n            <div class=\"col-xs-12 col-md-4\">\r\n              <img *ngIf=\"show075Formats\" src={{wine.photo}} alt={{wine.name}} class=\"center-block resize-image-wine img-rounded\">\r\n              <img *ngIf=\"show15Formats\" src={{wine.photo15}} alt={{wine.name}} class=\"center-block resize-image-wine img-rounded\">\r\n              <img *ngIf=\"show3Formats\" src={{wine.photo3}} alt={{wine.name}} class=\"center-block resize-image-wine img-rounded\">\r\n              <img *ngIf=\"show5Formats\" src={{wine.photo5}} alt={{wine.name}} class=\"center-block resize-image-wine img-rounded\">\r\n\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-8\">\r\n              <div class=\"back-trasparent\">\r\n\r\n                <p *ngIf=\"!isGrappa\">\r\n                  <b>{{ 'Wine.Grape.Title' | translate:wine }}:</b> {{ 'Wine.Grape.Content' | translate:wine }}</p>\r\n                <p *ngIf=\"!isGrappa\">\r\n                  <b>{{ 'Wine.Fermentation.Title' | translate:wine }}:</b> {{ 'Wine.Fermentation.Content' |\r\n                  translate:wine }}</p>\r\n                <p *ngIf=\"isGrappa\">\r\n                  <b>{{ 'Wine.grapeDebris.Title' | translate:wine }}:</b> {{ 'Wine.grapeDebris.Content' |\r\n                  translate:wine\r\n                  }}</p>\r\n                <p *ngIf=\"isGrappa\">\r\n                  <b>{{ 'Wine.distillation.Title' | translate:wine }}:</b> {{ 'Wine.distillation.Content' |\r\n                  translate:wine }}</p>\r\n                <p *ngIf=\"isGrappa\">\r\n                  <b>{{ 'Wine.still.Title' | translate:wine }}:</b> {{ 'Wine.still.Content' | translate:wine }}</p>\r\n                <p>\r\n                  <b>{{ 'Wine.Aging.Title' | translate:wine }}:</b> {{ 'Wine.Aging.Content' | translate:wine }}</p>\r\n                <p>\r\n                  <b>{{ 'Wine.Characteristics.Title' | translate:wine }}:</b>\r\n                </p>\r\n                <ul>\r\n                  <li>{{ 'Wine.Characteristics.Content1' | translate:wine }}</li>\r\n                  <li>{{ 'Wine.Characteristics.Content2' | translate:wine }}</li>\r\n                  <li>{{ 'Wine.Characteristics.Content3' | translate:wine }}</li>\r\n                </ul>\r\n                <p>\r\n                  <b>{{ 'Wine.Notes.Title' | translate:wine }}:</b> {{ 'Wine.Notes.Content' | translate:wine }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"showFormats\" class=\"row\">\r\n            <div class=\"col-xs-12 text-center\">\r\n              <h4>{{ 'FormatAvailable' | translate }}:</h4>\r\n              <div class=\"btn-group btn-group-justified margin-btn\" role=\"group\" aria-label=\"...\">\r\n                <div *ngFor=\"let wineformat of wine.format ; let i = index\" (click)=\"changeSlide(i)\" class=\"btn-group\"\r\n                  role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-default\" autofocus=\"autofocus\"> {{ wineformat.value}} </button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 text-center\">\r\n              <p>\r\n                <a href=\"{{wine.downloadPDF}}\" class=\"btn my-btn-primary\" role=\"button\" download>{{ 'Download.Profile'\r\n                  | translate }}</a>\r\n                <a href=\"{{wine.downloadZIP}}\" class=\"btn my-btn-primary\" role=\"button\" download>{{ 'Download.Image' |\r\n                  translate }}</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/wine-template/wine-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WineTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WineTemplateComponent = /** @class */ (function () {
    function WineTemplateComponent(translate) {
        this.translate = translate;
        this.show075Formats = false;
        this.show15Formats = false;
        this.show3Formats = false;
        this.show5Formats = false;
        this.showFormats = false;
        this.isGrappa = false;
        this.isLarge = false;
        this.winesList = [
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
    }
    WineTemplateComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(WineTemplateComponent.prototype, "wine", {
        get: function () {
            return this._wine;
        },
        set: function (wine) {
            this._wine = wine;
            if (wine.format) {
                this.showFormats = true;
            }
            else {
                this.showFormats = false;
            }
            if (wine.name === 'Grappa Monsú ') {
                this.isGrappa = true;
            }
            else {
                this.isGrappa = false;
            }
            this.show075Formats = true;
            var largeActive = false;
            this.winesList.forEach(function (element) {
                if (element.name === wine.name) {
                    element.class = 'list-group-item active';
                }
                else if (!largeActive) {
                    element.class = 'list-group-item';
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    WineTemplateComponent.prototype.resetDefaultFormat = function () {
        this.setShowFormat(0);
    };
    WineTemplateComponent.prototype.changeSlide = function (index) {
        var desiredFormat = this._wine.format[index].value;
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
        var car = document.getElementById('carousel');
    };
    WineTemplateComponent.prototype.setShowFormat = function (index) {
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
    };
    WineTemplateComponent.prototype.showFormat = function (event) {
        if (event) {
            var name_1 = event;
            if (name_1.charAt(2) === '_') {
                name_1 = name_1.slice(3);
            }
            var elements = document.getElementsByClassName(name_1);
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].classList.contains('wines-format-hidden')) {
                    elements[i].classList.remove('wines-format-hidden');
                }
                else {
                    elements[i].classList.add('wines-format-hidden');
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WineTemplateComponent.prototype, "wine", null);
    WineTemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wine-template',
            template: __webpack_require__("./src/app/components/wine-template/wine-template.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["b" /* thumbnailAnimation */]
            ],
            styles: [__webpack_require__("./src/app/components/wine-template/wine-template.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], WineTemplateComponent);
    return WineTemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/arneis/arneis.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"arneis\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/arneis/arneis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArneisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArneisComponent = /** @class */ (function () {
    function ArneisComponent() {
        this.arneis = {
            'name': 'Roero Arneis D.O.C.G.',
            'grape': 'Arneis',
            'ITFermentation': 'Fermentazione alcoolica in acciaio per circa 20 giorni ad una temperatura controllata di 16° C.',
            'DEFermentation': 'Alkoholische Gärung im Stahltank während ca. 20 Tagen bei kontrollierter Temperatur von 16°C.',
            'ENFermentation': 'Alcoholic fermentation in stainless steel tanks for about 20 days at 16°C.',
            'FRFermentation': 'Fermentation alcoolique en cuve d\'inox pendant environ 20 jours à température contrôlée de 16°C.',
            'ITAging': 'Circa 6 mesi in acciaio.',
            'DEAging': 'ca. 6 Monate im Stahltank.',
            'ENAging': 'Around 6 months in stainless steel tanks.',
            'FRAging': 'Environ 6 mois en cuve d\'inox.',
            'ITCharacteristics1': 'Colore: giallo paglierino tenue.',
            'DECharacteristics1': 'Farbe: helles Strohgelb.',
            'ENCharacteristics1': 'Colour: pale straw yellow.',
            'FRCharacteristics1': 'Robe: limpide, jaune paille.',
            'ITCharacteristics2': 'Profumo: ampio, fresco, con sentori floreali.',
            'DECharacteristics2': 'Bukett: umfassend, frisch, blumig.',
            'ENCharacteristics2': 'Bouquet: generous, fresh, floral.',
            'FRCharacteristics2': 'Bouquet: ample, frais, aux senteurs floraux.',
            'ITCharacteristics3': 'Sapore: fresco, armonico, morbido.',
            'DECharacteristics3': 'Geschmack: frisch, harmonisch, zart.',
            'ENCharacteristics3': 'Flavour: fresh, harmonious, soft.',
            'FRCharacteristics3': 'Corps: frais, harmonieux, doux.',
            'ITNotes': 'Adatto da aperitivo, ottimo con antipasti leggeri e pesce, dà il meglio di sé nei primi 3 anni. Temperatura di servizio 8-10° C.',
            'DENotes': 'Geeignet als Aperitif, sehr gut mit leichten Vorspeisen und Fisch, optimale Trinkreife innerhalb von 3 Jahren. Trinktemperatur 8-10° C.',
            'ENNotes': 'Suitable as an aperitif, excellent companion to light hors d\'oeuvres and fish. Best consumed within 3 years. Serve at 8-10° C.',
            'FRNotes': 'Idéal en apéritif, s\'accorde parfaitement aux entrées lègéres et aux poissons. A consommer de préférence dans les 3 premières années. Servir à 8-10° C.',
            'photo': 'assets/images/Wines/Arneis.png',
            'photo15': 'assets/images/Wines/Arneis_15.png',
            'downloadPDF': 'assets/download/Arneis.pdf',
            'downloadZIP': 'assets/download/Arneis.zip',
            'format': [
                {
                    'value': '0.75 l',
                },
                {
                    'value': '1.5 l',
                }
            ]
        };
    }
    ArneisComponent.prototype.ngOnInit = function () {
    };
    ArneisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arneis',
            template: __webpack_require__("./src/app/components/wines/arneis/arneis.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ArneisComponent);
    return ArneisComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/barbaresco-gallina/barbaresco-gallina.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"barbaresco\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/barbaresco-gallina/barbaresco-gallina.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarbarescoGallinaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarbarescoGallinaComponent = /** @class */ (function () {
    function BarbarescoGallinaComponent() {
        this.barbaresco = {
            'name': 'Barbaresco D.O.C.G. "Gallina"',
            'grape': 'Nebbiolo',
            'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di circa 30° C., segue fermentazione malolattica in fusti di rovere da 500 litri.',
            'DEFermentation': 'Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 30°C; anschliessend malolaktische  äureumwandlung in Eichenfässen von 500 Litern.',
            'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 30°C followed by malo-lactic fermentation in 500 litre oak casks.',
            'FRFermentation': 'Fermentation et macération en cuve d\'inox pendant environ 2 semaines à température contrôlée de environ 30°C; suivie d\'une fermetation malolactique en fût de chêne de 500 litres.',
            'ITAging': 'Circa 24 mesi in fusti di rovere da 500 litri e 6-12 mesi in bottiglia.',
            'DEAging': 'ca. 24 Monate in Eichenfässern von 500 Litern und 6-12 Monate in der Flasche.',
            'ENAging': 'Around 24 months in 500 litre oak casks and 6-12 months in the bottle.',
            'FRAging': 'Environ 24 mois en fût de chêne de 500 litres et 6-12 mois en bouteille.',
            'ITCharacteristics1': 'Colore: rosso granato.',
            'DECharacteristics1': 'Farbe: granatrot.',
            'ENCharacteristics1': 'Colour: garnet red.',
            'FRCharacteristics1': 'Robe: rouge grenade.',
            'ITCharacteristics2': 'Profumo: intenso ed elegante con sentori di frutti di bosco e spezie.',
            'DECharacteristics2': 'Bukett: intensiv und elegant, erin nert an Waldfrüchte und Gewürze.',
            'ENCharacteristics2': 'Bouquet: intense, with hints of woodland, fruits and spices.',
            'FRCharacteristics2': 'Bouquet: intense, aux senteurs de fruits des bois et d’épices.',
            'ITCharacteristics3': 'Sapore: pieno e vellutato, delicatamente tannico ed armonico.',
            'DECharacteristics3': 'Geschmack: voll und samtig, sanf tes, harmonisches Tannin.',
            'ENCharacteristics3': 'Flavour: full and velvety, harmonious and delicate tannins.',
            'FRCharacteristics3': 'Corps: plein et velouteux, tanins delicates et harmonieux.',
            'ITNotes': 'Accompagna ottimamente carni rosse, arrosti, selvaggina e formaggi; vino che è adatto anche a lunghi invecchiamenti. Temperatura di servizio 18-20° C.',
            'DENotes': 'Idealer Begleiter zu rotem Fleisch, Braten, Wild und Käse.Eignet sich auch für lange Lagerung. Trinktemperatur 18-20° C.',
            'ENNotes': 'Accompanies entire meal, including meats, roasts, game and cheese. Very suitable for longer aging. Serve at 18-20° C.',
            'FRNotes': 'Accompagne parfaitement viandes rouges, rôtis, gibiers et fromages. Se prête à un long vieillissement. Servir à 18-20° C.',
            'photo': 'assets/images/Wines/Barbaresco_gallina.png',
            'photo15': 'assets/images/Wines/BarbarescoG_15.png',
            'photo3': 'assets/images/Wines/Barbaresco_3.png',
            'photo5': 'assets/images/Wines/Barbaresco_5.png',
            'downloadPDF': 'assets/download/BarbarescoGallina.pdf',
            'downloadZIP': 'assets/download/BarbarescoGallina.zip',
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
    }
    BarbarescoGallinaComponent.prototype.ngOnInit = function () {
    };
    BarbarescoGallinaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barbaresco-gallina',
            template: __webpack_require__("./src/app/components/wines/barbaresco-gallina/barbaresco-gallina.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BarbarescoGallinaComponent);
    return BarbarescoGallinaComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"barbarescoPianCavallo\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarbarescoPianCavalloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarbarescoPianCavalloComponent = /** @class */ (function () {
    function BarbarescoPianCavalloComponent() {
        this.barbarescoPianCavallo = {
            'name': 'Barbaresco D.O.C.G. "Pian Cavallo"',
            'grape': 'Nebbiolo',
            'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di circa 30° C., segue fermentazione malolattica in fusti di rovere da 500 litri.',
            'DEFermentation': 'Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 30°C; anschliessend malolaktische  äureumwandlung in Eichenfässen von 500 Litern.',
            'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 30°C followed by malo-lactic fermentation in 500 litre oak casks.',
            'FRFermentation': 'Fermentation et macération en cuve d\'inox pendant environ 2 semaines à température contrôlée de environ 30°C; suivie d\'une fermetation malolactique en fût de chêne de 500 litres.',
            'ITAging': 'Circa 24 mesi in fusti di rovere da 500 litri e 6-12 mesi in bottiglia.',
            'DEAging': 'ca. 24 Monate in Eichenfässern von 500 Litern und 6-12 Monate in der Flasche.',
            'ENAging': 'Around 24 months in 500 litre oak casks and 6-12 months in the bottle.',
            'FRAging': 'Environ 24 mois en fût de chêne de 500 litres et 6-12 mois en bouteille.',
            'ITCharacteristics1': 'Colore: rosso granato.',
            'DECharacteristics1': 'Farbe: granatrot.',
            'ENCharacteristics1': 'Colour: garnet red.',
            'FRCharacteristics1': 'Robe: rouge grenade.',
            'ITCharacteristics2': 'Profumo: intenso, complesso con aromi che ricordano le more, la liquirizia, le spezie.',
            'DECharacteristics2': 'Bukett: intensiv, komplexe Aromen, die an Brombeeren, Lakritze und Gewürze erinnern.',
            'ENCharacteristics2': 'Bouquet: intense, with hints of blackberries, liquorice and spices.',
            'FRCharacteristics2': 'Bouquet: intense, complexe, aux senteurs de mûres, de réglisse et d’épices.',
            'ITCharacteristics3': 'Sapore: pieno e ricco in bocca, con tannini fini ed armonici.',
            'DECharacteristics3': 'Geschmack: voll und reich im Munde, feines, harmonisches Tannin.',
            'ENCharacteristics3': 'Flavour: dry, ric, full bodied, harmonious tannins.',
            'FRCharacteristics3': 'Corps: plein et riche en bouche, tanins fins et harmonieux.',
            'ITNotes': 'Accompagna ottimamente carni rosse, arrosti, selvaggina e formaggi; vino che è adatto anche a lunghi invecchiamenti. Temperatura di servizio 18-20° C.',
            'DENotes': 'Idealer Begleiter zu rotem Fleisch, Braten, Wild und Käse.Eignet sich auch für lange Lagerung. Trinktemperatur 18-20° C.',
            'ENNotes': 'Accompanies entire meal, including meats, roasts, game and cheese. Very suitable for longer aging. Serve at 18-20° C.',
            'FRNotes': 'Accompagne parfaitement viandes rouges, rôtis, gibiers et fromages. Se prête à un long vieillissement. Servir à 18-20° C.',
            'photo': 'assets/images/Wines/Barbaresco_Pian_Cavallo.png',
            'photo15': 'assets/images/Wines/BarbarescoPC_15.png',
            'photo3': 'assets/images/Wines/Barbaresco_3.png',
            'photo5': 'assets/images/Wines/Barbaresco_5.png',
            'downloadPDF': 'assets/download/BarbarescoPianCavallo.pdf',
            'downloadZIP': 'assets/download/BarbarescoPianCavallo.zip',
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
    }
    BarbarescoPianCavalloComponent.prototype.ngOnInit = function () {
    };
    BarbarescoPianCavalloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barbaresco-pian-cavallo',
            template: __webpack_require__("./src/app/components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BarbarescoPianCavalloComponent);
    return BarbarescoPianCavalloComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/barbera/barbera.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"barbera\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/barbera/barbera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarberaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarberaComponent = /** @class */ (function () {
    function BarberaComponent() {
        this.barbera = {
            'name': 'Barbera d\'Alba D.O.C. "Pulin"',
            'grape': 'Barbera',
            'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di 28° C.; segue fermentazione malolattica in fusti di rovere da 500 litri.',
            'DEFermentation': 'Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 28 °C; anschliessend malolaktische Säureumwandlung in Eichenfässern von 500 Litern.',
            'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 28° C followed by malo-lactic fermentation in 500 litre oak casks.',
            'FRFermentation': 'Fermentation et macération en cuve d\'inox pendant environ 2 semaines à température contrôlée de 28°C; suivie d\'une fermetation malolactique en fût de chêne de 500 litres.',
            'ITAging': 'Circa 10-12 mesi in fusti di rovere da 500 litri e 2 mesi in bottiglia.',
            'DEAging': 'ca. 10-12 Monate in Eichenfässern von 500 Litern und 2 Monate in der Flasche.',
            'ENAging': 'Around 10-12 months in oak casks and 2 months in the bottle.',
            'FRAging': 'Environ 10-12 mois en fût de chêne de 500 litres et 2 mois en bouteille.',
            'ITCharacteristics1': 'Colore: rosso rubino intenso.',
            'DECharacteristics1': 'Farbe: rubinrot intensiv.',
            'ENCharacteristics1': 'Colour: intense ruby red.',
            'FRCharacteristics1': 'Robe: rouge rubis.',
            'ITCharacteristics2': 'Profumo: ampio, importante, con sentori di viola.',
            'DECharacteristics2': 'Bukett: vielschichtig, kräftig, Veilchenduft.',
            'ENCharacteristics2': 'Bouquet: intense, with hints of violets.',
            'FRCharacteristics2': 'Bouquet: ample, intense, aux senteurs de violette.',
            'ITCharacteristics3': 'Sapore: asciutto, di buon corpo e di giusta acidità, gusto pieno ed avvolgente.',
            'DECharacteristics3': 'Geschmack: trocken, harmonische Säure, gefällig, vollmundig.',
            'ENCharacteristics3': 'Flavour: dry, full bodied, with just the right acidity.',
            'FRCharacteristics3': 'Corps: vin sec, acidité équilibrée, corsé et plein en bouche.',
            'ITNotes': 'Adatto sia a primi piatti importanti che a salumi, secondi di carne e formaggi. È un vino che bene si presta anche a lunghi invecchiamenti. Temperatura di servizio 18-20° C.',
            'DENotes': 'Eignet sich als Begleiter zu Vorspeisen, Wurstwaren, Fleischgerichten und Käse. Kann viele Jahre gelagert werden. Trinktemperatur 18-20° C.',
            'ENNotes': 'Accompanies entire meal including meat and cheese. Suitable for longer aging. Serve at 18-20° C.',
            'FRNotes': 'Idéal tant avec les plats de pâtes qu\'avec saucissons, viandes et fromages. Se prête à un long vieillissement. Servir à 18-20° C.',
            'photo': 'assets/images/Wines/Barbera.png',
            'photo15': 'assets/images/Wines/Barbera_15.png',
            'photo3': 'assets/images/Wines/Barbera_3.png',
            'downloadPDF': 'assets/download/Barbera.pdf',
            'downloadZIP': 'assets/download/Barbera.zip',
            'format': [
                {
                    'value': '0.75 l',
                },
                {
                    'value': '1.5 l',
                },
                {
                    'value': '3 l',
                }
            ]
        };
    }
    BarberaComponent.prototype.ngOnInit = function () {
    };
    BarberaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barbera',
            template: __webpack_require__("./src/app/components/wines/barbera/barbera.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BarberaComponent);
    return BarberaComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/dolcetto/dolcetto.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"dolcetto\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/dolcetto/dolcetto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DolcettoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DolcettoComponent = /** @class */ (function () {
    function DolcettoComponent() {
        this.dolcetto = {
            'name': 'Dolcetto d\'Alba D.O.C. "Pian Cavallo"',
            'grape': 'Dolcetto',
            'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di 26° C., cui segue la fermentazione malolattica.',
            'DEFermentation': 'Gärung und Maischung während ca. 2 Wochen bei kontrollierter Temperatur von 26°C; anschliessend malolaktische Säureumwandlung.',
            'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 26°C followed by malo-lactic fermentation.',
            'FRFermentation': 'Fermentation alcoolique en cuve d\'inox pendant environ 2 semaines à température contrôlée de 26°C.',
            'ITAging': 'Circa 8 mesi in acciaio.',
            'DEAging': 'ca. 8 Monate im Stahltank.',
            'ENAging': 'Around 8 months in stainless steel tanks.',
            'FRAging': 'Environ 8 mois en cuve d\'inox.',
            'ITCharacteristics1': 'Colore: rosso rubino con riflessi violacei.',
            'DECharacteristics1': 'Farbe: rubinrot mit violetten Reflexen.',
            'ENCharacteristics1': 'Colour: ruby red with violet reflections.',
            'FRCharacteristics1': 'Robe: rouge rubis aux reflets violets.',
            'ITCharacteristics2': 'Profumo: vinoso, intenso e fruttato con sentori di ciliegia.',
            'DECharacteristics2': 'Bukett: weinig, intensiv, erinnert an Kirschen.',
            'ENCharacteristics2': 'Bouquet: intense, fruity, with hints of cherry.',
            'FRCharacteristics2': 'Bouquet: vineux, intense et fruité aux senteurs de cerise.',
            'ITCharacteristics3': 'Sapore: secco, asciutto, di medio corpo.',
            'DECharacteristics3': 'Geschmack: trocken, herb, mittlerer Körper.',
            'ENCharacteristics3': 'Flavour: dry, medium bodied.',
            'FRCharacteristics3': 'Corps: sec, moyennement corsé.',
            'ITNotes': 'Accompagna bene tutto il pasto, adatto ad un moderato invecchiamento. Temperatura di servizio 18-20° C.',
            'DENotes': 'Geeignet für die ganze Mahlzeit, mässige Lagerfähigkeit. Trinktemperatur 18-20° C.',
            'ENNotes': 'Accompanies entire meal. Suitable for moderate aging. Serve at 18-20° C.',
            'FRNotes': 'Accompagné parfaitement tout le repas. Se prête à un vieillissement modéré. Servir à 18-20° C.',
            'photo': 'assets/images/Wines/Dolcetto.png',
            'downloadPDF': 'assets/download/Barbera.pdf',
            'downloadZIP': 'assets/download/Barbera.zip'
        };
    }
    DolcettoComponent.prototype.ngOnInit = function () {
    };
    DolcettoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dolcetto',
            template: __webpack_require__("./src/app/components/wines/dolcetto/dolcetto.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DolcettoComponent);
    return DolcettoComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/grappa/grappa.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"grappa\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/grappa/grappa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrappaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrappaComponent = /** @class */ (function () {
    function GrappaComponent() {
        this.grappa = {
            'name': 'Grappa Monsú ',
            'grapeDebris': 'Nebbiolo',
            'ITDistillation': 'Sistema discontinuo.',
            'DEDistillation': 'mittels Destillierblase.',
            'ENDistillation': 'Discontinuous.',
            'FRDistillation': 'Discontinue.',
            'ITStill': 'Caldaiette in rame a vapore.',
            'DEStill': 'kleine Kupferdampfkessel.',
            'ENStill': 'Copper boiler.',
            'FRStill': 'Petites chaudières à vapeur en cuivre.',
            'ITAging': 'Circa 10-12 mesi in fusti di rovere da 225 litri.',
            'DEAging': 'ca. 10-12 Monate in Eichenfässern von 225 Litern.',
            'ENAging': 'Around 10-12 months in 225 litre oak casks.',
            'FRAging': 'Environ 10-12 mois en fût de chêne de 225 litres.',
            'ITCharacteristics1': 'Colore: ambrato.',
            'DECharacteristics1': 'Farbe: bernsteinfarben.',
            'ENCharacteristics1': 'Colour: amber.',
            'FRCharacteristics1': 'Couleur: ambrée.',
            'ITCharacteristics2': 'Profumo: ampio, avvolgente, con sentori di frutta matura quali marasca, albicocca, cacao e vaniglia.',
            'DECharacteristics2': 'Bukett: umfassend, mit Noten reifer Früchte wie Weichsel, Aprikose, Kakao und Vanille.',
            'ENCharacteristics2': 'Bouquet: abundant, penetrating with vanilla.',
            'FRCharacteristics2': 'Bouquet: ample, plein, aux senteurs de fruits matures comme la marasque, l\'abricot, le cacao et la vanilla.',
            'ITCharacteristics3': 'Sapore: forte ma vellutato, rotondo e armonico.',
            'DECharacteristics3': 'Geschmack: stark, samtig und rund, harmonisch.',
            'ENCharacteristics3': 'Flavour: strong, but velvety and rounded. Harmonious.',
            'FRCharacteristics3': 'Corps: fort mais velouteux, rond et harmonieux.',
            'ITNotes': 'Temperatura di servizio 18-20° C.',
            'DENotes': 'Trinktemperatur 18-20°C.',
            'ENNotes': 'Serve at 18-20° C.',
            'FRNotes': 'Servir à 18-20° C.',
            'photo': 'assets/images/Wines/grappa_monsu.jpg',
            'downloadPDF': 'assets/download/GrappaMonsu.pdf',
            'downloadZIP': 'assets/download/GrappaMonsu.zip'
        };
    }
    GrappaComponent.prototype.ngOnInit = function () {
    };
    GrappaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grappa',
            template: __webpack_require__("./src/app/components/wines/grappa/grappa.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], GrappaComponent);
    return GrappaComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/monsu-nebbiolo/monsu-nebbiolo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"nebbiolo\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/monsu-nebbiolo/monsu-nebbiolo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsuNebbioloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonsuNebbioloComponent = /** @class */ (function () {
    function MonsuNebbioloComponent() {
        this.nebbiolo = {
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
    }
    MonsuNebbioloComponent.prototype.ngOnInit = function () {
    };
    MonsuNebbioloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monsu-nebbiolo',
            template: __webpack_require__("./src/app/components/wines/monsu-nebbiolo/monsu-nebbiolo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MonsuNebbioloComponent);
    return MonsuNebbioloComponent;
}());



/***/ }),

/***/ "./src/app/components/wines/monsu-rose/monsu-rose.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wine-template [wine]=\"monsuRose\"></app-wine-template>\r\n"

/***/ }),

/***/ "./src/app/components/wines/monsu-rose/monsu-rose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsuRoseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonsuRoseComponent = /** @class */ (function () {
    function MonsuRoseComponent() {
        this.monsuRose = {
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
    }
    MonsuRoseComponent.prototype.ngOnInit = function () {
    };
    MonsuRoseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monsu-rose',
            template: __webpack_require__("./src/app/components/wines/monsu-rose/monsu-rose.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MonsuRoseComponent);
    return MonsuRoseComponent;
}());



/***/ }),

/***/ "./src/app/routerConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* unused harmony export AppRoutingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_where_where_component__ = __webpack_require__("./src/app/components/where/where.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contacts_contacts_component__ = __webpack_require__("./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_download_download_component__ = __webpack_require__("./src/app/components/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tasting_tasting_component__ = __webpack_require__("./src/app/components/tasting/tasting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_wines_arneis_arneis_component__ = __webpack_require__("./src/app/components/wines/arneis/arneis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_wines_barbaresco_gallina_barbaresco_gallina_component__ = __webpack_require__("./src/app/components/wines/barbaresco-gallina/barbaresco-gallina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_wines_barbaresco_pian_cavallo_barbaresco_pian_cavallo_component__ = __webpack_require__("./src/app/components/wines/barbaresco-pian-cavallo/barbaresco-pian-cavallo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_wines_barbera_barbera_component__ = __webpack_require__("./src/app/components/wines/barbera/barbera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_wines_grappa_grappa_component__ = __webpack_require__("./src/app/components/wines/grappa/grappa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_wines_monsu_rose_monsu_rose_component__ = __webpack_require__("./src/app/components/wines/monsu-rose/monsu-rose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_wines_monsu_nebbiolo_monsu_nebbiolo_component__ = __webpack_require__("./src/app/components/wines/monsu-nebbiolo/monsu-nebbiolo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_wines_dolcetto_dolcetto_component__ = __webpack_require__("./src/app/components/wines/dolcetto/dolcetto.component.ts");















var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'tasting',
        component: __WEBPACK_IMPORTED_MODULE_6__components_tasting_tasting_component__["a" /* TastingComponent */]
    },
    {
        path: 'where',
        component: __WEBPACK_IMPORTED_MODULE_2__components_where_where_component__["a" /* WhereComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_3__components_contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        path: 'download',
        component: __WEBPACK_IMPORTED_MODULE_4__components_download_download_component__["a" /* DownloadComponent */]
    },
    {
        path: 'wines',
        component: __WEBPACK_IMPORTED_MODULE_13__components_wines_monsu_nebbiolo_monsu_nebbiolo_component__["a" /* MonsuNebbioloComponent */]
    },
    {
        path: 'wines/arneis',
        component: __WEBPACK_IMPORTED_MODULE_7__components_wines_arneis_arneis_component__["a" /* ArneisComponent */]
    },
    {
        path: 'wines/barbarescoGallina',
        component: __WEBPACK_IMPORTED_MODULE_8__components_wines_barbaresco_gallina_barbaresco_gallina_component__["a" /* BarbarescoGallinaComponent */]
    },
    {
        path: 'wines/barbarescoPianCavallo',
        component: __WEBPACK_IMPORTED_MODULE_9__components_wines_barbaresco_pian_cavallo_barbaresco_pian_cavallo_component__["a" /* BarbarescoPianCavalloComponent */]
    },
    {
        path: 'wines/barbera',
        component: __WEBPACK_IMPORTED_MODULE_10__components_wines_barbera_barbera_component__["a" /* BarberaComponent */]
    },
    {
        path: 'wines/grappa',
        component: __WEBPACK_IMPORTED_MODULE_11__components_wines_grappa_grappa_component__["a" /* GrappaComponent */]
    },
    {
        path: 'wines/monsuRose',
        component: __WEBPACK_IMPORTED_MODULE_12__components_wines_monsu_rose_monsu_rose_component__["a" /* MonsuRoseComponent */]
    },
    {
        path: 'wines/monsuNebbiolo',
        component: __WEBPACK_IMPORTED_MODULE_13__components_wines_monsu_nebbiolo_monsu_nebbiolo_component__["a" /* MonsuNebbioloComponent */]
    },
    {
        path: 'wines/dolcetto',
        component: __WEBPACK_IMPORTED_MODULE_14__components_wines_dolcetto_dolcetto_component__["a" /* DolcettoComponent */]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
    imports: [
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
    ],
    exports: [
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
    ]
});
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map