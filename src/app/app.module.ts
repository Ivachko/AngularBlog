import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { PostlistComponent } from './postlist/postlist.component';



@NgModule({
  declarations: [
    AppComponent,
    PostlistitemComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
