import { AntModule } from "./modules/ant/ant.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/table/table.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./components/registration/registration.component";
import { StoreModule } from "@ngrx/store";
import * as fromReducer from "./components/registration/register.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AntModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: fromReducer.reducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
