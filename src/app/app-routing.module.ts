import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { NewsResolver } from './news.resolver';
import { VarStepComponent } from './var-step/var-step.component';

const routes: Routes = [
  { path: 'var', component: VarComponent, resolve: { message: NewsResolver } },
  { path: 'var-step', component: VarStepComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
