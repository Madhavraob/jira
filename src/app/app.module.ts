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
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TransComponent } from './trans/trans.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CharanAccessComponent } from './charan-access/charan-access.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { AppService } from './app.service';
import { TemplateDialogComponent } from './template-dialog/template-dialog.component';
import { DateDiffPipe } from './date-diff/date-diff.pipe';
import { FormFieldComponent } from './form-field/form-field.component';
import { NativeScrollComponent } from './native-scroll/native-scroll.component';
import { NativeScroll2Component } from './native-scroll2/native-scroll2.component';
import { EffectsModule } from '@ngrx/effects';
import { NavEffects } from './store/nav.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StepperComponent } from './stepper/stepper.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    DialogTemplateComponent,
    TransComponent,
    AccessibilityComponent,
    DragScrollComponent,
    CharanAccessComponent,
    AvatarComponent,
    DateFormatPipe,
    TemplateDialogComponent,
    DateDiffPipe,
    FormFieldComponent,
    NativeScrollComponent,
    NativeScroll2Component,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CharanModule,
    DragScrollModule,
    HttpClientModule,
    // material modules
    DemoMaterialModule,
    BrowserAnimationsModule,
    OverlayModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    EffectsModule.forRoot([NavEffects]),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
