import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  zeroFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  step1Completed = true;
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  stepsCompleted = 3;
  colo = 'red';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.zeroFormGroup = this._formBuilder.group({
      zeroCtrl: ['', Validators.required]
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // setTimeout(() => {
    //   this.secondFormGroup.clearValidators();
    //   this.secondFormGroup.clearAsyncValidators();
    //   this.secondFormGroup.reset();
    //   this.secondFormGroup.updateValueAndValidity();
    // }, 2000);
  }

  selectionChange(event) {
    // debugger
    // console.log('=========', this.stepperLine);
    // console.log('=========', this.stepLine);
  }

  isNormal(index) {
    return (index%2) ? true: false;
  }

  f1() {
    return {
      valid: (this.firstFormGroup.valid),
      inValid: !this.firstFormGroup.valid,
      hasErrors: !this.firstFormGroup.valid,
      errors: !this.firstFormGroup.valid
    }
  }
}
