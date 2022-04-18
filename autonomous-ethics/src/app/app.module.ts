import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformationsComponent } from './informations/informations.component';
import { JudgeComponent } from './judge/judge.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { FooterComponent } from './footer/footer.component';
import { TileComponent } from './tile/tile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ScenarioCharacterChooserComponent } from './scenario/scenario-character-chooser/scenario-character-chooser.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SumupComponent } from './sumup/sumup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationsComponent,
    JudgeComponent,
    ScenarioComponent,
    FooterComponent,
    TileComponent,
    StatisticsComponent,
    ScenarioCharacterChooserComponent,
    UserProfileComponent,
    SumupComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
