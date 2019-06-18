import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { routing } from './app.routing';
import { DataComponent } from './data/data.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { FlawComponent } from './flaw/flaw.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DataComponent,
    DecryptionComponent,
    FlawComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
