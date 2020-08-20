import { TextInputComponent } from './text-input/text-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttachButtonComponent } from './attach-button/attach-button.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    AttachButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

