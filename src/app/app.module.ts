import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { RecebeFormsComponent } from './recebe-forms/recebe-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as formsReducer from '../app/state-management/reducer/form.reducer'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    RecebeFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({forms: formsReducer.AddValuesReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
