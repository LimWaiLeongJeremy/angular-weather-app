import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider';

const matModules: any[] = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatButtonModule,
  MatDividerModule
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
