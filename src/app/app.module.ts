import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadzoneDirective } from './directives/uploadzone.directive';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadzoneDirective,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
