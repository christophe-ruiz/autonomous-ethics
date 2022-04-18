import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JudgeComponent} from "./judge/judge.component";
import {InformationsComponent} from "./informations/informations.component";
import {ScenarioComponent} from "./scenario/scenario.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {UserProfileService} from '../services/user-profile.service';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SumupComponent} from './sumup/sumup.component';

const routes: Routes = [
  { path: '', redirectTo:'judge', pathMatch:'prefix' },
  { path: 'informations', component:InformationsComponent },
  { path: 'user-profile', component:UserProfileComponent },
  { path: 'judge', component:JudgeComponent, canActivate:[UserProfileService,] },
  { path: 'create', component:ScenarioComponent },
  { path: 'statistics', component:StatisticsComponent },
  { path: 'sumup', component:SumupComponent },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
