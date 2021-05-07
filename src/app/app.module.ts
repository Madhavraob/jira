import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from '@angular/material/menu';
import { VarComponent } from './var/var.component';
import { VarStepComponent } from './var-step/var-step.component';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { DemoMaterialModule } from './mat.module';

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
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // material modules
    // DemoMaterialModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    OverlayModule
  ],
  providers: [],
  entryComponents: [DialogComponent, DialogContentExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
