import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { UiModule } from "./ui/ui.module";

import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NavComponent } from "./nav/nav.component";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    UiModule,

    AngularFireModule.initializeApp(environment.firebase, "angular-key"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
