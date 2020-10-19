import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  addGame(data) {
    this.games.push(new Game(data.name, data.brief));
  }

  getGames() {
    this.games;
  }

  constructor() {}

  games = [
    new Game(
      "Ekapeli",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris non nisi finibus, eu scelerisque lorem egestas. Aenean pharetra, justo eu semper semper, massa nisi pulvinar lacus, sed feugiat arcu nulla ac diam. In tincidunt semper lacinia. Mauris finibus sodales commodo. Nam porta in elit vitae pharetra."
    ),
    new Game(
      "Tokapeli",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris non nisi finibus, eu scelerisque lorem egestas. Aenean pharetra, justo eu semper semper, massa nisi pulvinar lacus, sed feugiat arcu nulla ac diam. In tincidunt semper lacinia. Mauris finibus sodales commodo. Nam porta in elit vitae pharetra."
    ),
    new Game(
      "Kolmaspeli",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris non nisi finibus, eu scelerisque lorem egestas. Aenean pharetra, justo eu semper semper, massa nisi pulvinar lacus, sed feugiat arcu nulla ac diam. In tincidunt semper lacinia. Mauris finibus sodales commodo. Nam porta in elit vitae pharetra."
    ),
  ];
}

export class Game {
  static game: any;
  constructor(public name: string, public brief: string) {}
}

export class Character {
  constructor(
    public gameid: number,
    public name: string,
    public role: string,
    public age: number,
    public ap: number,
    public hp: number
  ) {}
}

export class Npc {
  constructor(
    public gameid: number,
    public name: string,
    public role: string,
    public ap: number,
    public hp: number
  ) {}
}
