import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JudgeComponent} from "./judge/judge.component";
import {InformationsComponent} from "./informations/informations.component";
import {ScenarioComponent} from "./scenario/scenario.component";

const routes: Routes = [
  {path: '', component:JudgeComponent},
  {path: 'informations', component:InformationsComponent},
  {path: 'judge', component:JudgeComponent},
  {path: 'create', component:ScenarioComponent},
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }