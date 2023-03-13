import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';


const modulesComponents = [
  AccordionModule,
  CalendarModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulesComponents
  ],
  exports:[
    modulesComponents
  ]
})
export class SharedModule { }
