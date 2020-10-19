import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NewGameComponent } from "./new-game/new-game.component";
import { GameComponent } from "./game/game.component";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AppNavComponent } from "./app-nav/app-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NewGameComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
