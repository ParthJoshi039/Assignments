import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArithmeticOperationComponent } from './arithmetic-operation/arithmetic-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmeticOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
