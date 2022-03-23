import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformationsComponent } from './informations/informations.component';
import { JudgeComponent } from './judge/judge.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { FooterComponent } from './footer/footer.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationsComponent,
    JudgeComponent,
    ScenarioComponent,
    FooterComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
