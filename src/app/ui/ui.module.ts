import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { LayoutComponent } from "./containers/layout/layout.component";
import { HeaderComponent } from "./containers/header/header.component";
import { FooterComponent } from "./containers/footer/footer.component";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent,
    FooterComponent
  ]
})
export class UiModule {}
