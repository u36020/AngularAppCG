import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "./shared/pipe/filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from "primeng/dataview";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DialogModule } from "primeng/dialog";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    ScrollingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
