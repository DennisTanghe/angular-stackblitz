import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NullCheckComponent } from './null-check/null-check.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NullCheckComponent,
    RxjsTestComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
