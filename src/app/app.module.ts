import { TextInputComponent } from './text-input/text-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MatTabsComponent } from './mat-tabs/mat-tabs.component';

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
    MatTabsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

