import { CoreModule } from './core/core.module';
import { ChatModule } from './chat/chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ChatModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
