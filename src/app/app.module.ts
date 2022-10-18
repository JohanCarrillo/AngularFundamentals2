import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { GrandpaComponent } from './components/grandpa/grandpa.component';
import { BadMessagePipe } from './pipes/badMessage.pipe';
import { GoodMessagePipe } from './pipes/goodMessage.pipe';
import { UpperLowerCaseRandomizePipe } from './pipes/upperLowerCaseRandomize.pipe';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    GrandpaComponent,
    BadMessagePipe,
    GoodMessagePipe,
    UpperLowerCaseRandomizePipe,
    MessageFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
