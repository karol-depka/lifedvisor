import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AskPageComponent } from './ask-page/ask-page.component';
import { HintComponent } from './hint/hint.component';
import { HintBenefitsComponent } from './hint/hint-benefits/hint-benefits.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    AskPageComponent,
    HintComponent,
    HintBenefitsComponent
  ],
  exports: [
    AskPageComponent,
  ]
})
export class ExpertModule { }
