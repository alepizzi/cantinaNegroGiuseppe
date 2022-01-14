import { Component, OnInit } from "@angular/core";
import { fade } from "./../../animations";

@Component({
  selector: "app-tasting",
  templateUrl: "./tasting.component.html",
  animations: [fade],
  styleUrls: ["./tasting.component.css"],
})
export class TastingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
