import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { NewsResolver } from './news.resolver';
import { VarStepComponent } from './var-step/var-step.component';
import { CharanComponent } from './charan/charan/charan.component';
import { TransComponent } from './trans/trans.component';
import { CharanAccessComponent } from './charan-access/charan-access.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { NativeScroll2Component } from './native-scroll2/native-scroll2.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  { path: 'var', component: VarComponent, resolve: { message: NewsResolver } },
  { path: 'var-step', component: VarStepComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'charan', component: CharanComponent },
  { path: 'trans', component: TransComponent },
  { path: 'access', component: CharanAccessComponent },
  { path: 'form', component: FormFieldComponent },
  { path: 'nat-scroll', component: NativeScroll2Component },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
