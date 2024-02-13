import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CongratsComponent } from './congrats/congrats.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component:  QuestionComponent},
  { path: 'congrats', component: CongratsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
