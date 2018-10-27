import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from "./product/product.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: "product", component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
