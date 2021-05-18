import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { NavComponent } from './nav/nav.component';
import { VarComponent } from './var/var.component';
import { VarStepComponent } from './var-step/var-step.component';
import { DialogComponent, DialogTemplateComponent } from './dialog/dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DemoMaterialModule } from './mat.module';
import { CharanModule } from './charan/charan.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecruitersComponent,
    InterviewsComponent,
    NavComponent,
    VarComponent,
    VarStepComponent,
    DialogComponent,
    DialogTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharanModule,
    // material modules
    DemoMaterialModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
