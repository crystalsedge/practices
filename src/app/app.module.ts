import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
////THIS IS TO MARK CURRENT STABLE FILES, VI MAKE SURE TO SAVE THIS////

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreviewAnyFile
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
