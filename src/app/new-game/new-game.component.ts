import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { from } from "rxjs";

import { DataService } from "../data.service";
import { Game } from "../data.service";
import { Character } from "../data.service";
import { Npc } from "../data.service";

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.component.html",
  styleUrls: ["./new-game.component.css"],
})
export class NewGameComponent implements OnInit {
  newGameForm: FormGroup;
  panelOpenState = false;
  allGames;

  constructor(
    public dataService: DataService,
    public formBuilder: FormBuilder
  ) {
    this.newGameForm = this.formBuilder.group({
      name: "",
      brief: "",
    });
  }

  getGames() {
    this.allGames = this.dataService.games;
  }

  ngOnInit() {
    this.getGames();
  }

  onSubmit(data) {
    this.dataService.addGame(data);
    console.log(this.dataService.games);
    this.getGames();
  }
}
