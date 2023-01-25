import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FormatFileSizePipe } from './pipes/formatFileSize.pipe';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadzoneDirective } from './directives/uploadzone.directive';
import { UploadComponent } from './components/upload/upload.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadzoneDirective,
    UploadComponent,
    TableComponent,
    FormatFileSizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
