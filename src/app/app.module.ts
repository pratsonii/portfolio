import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS
} from "ng-zorro-antd";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { IconDefinition } from "@ant-design/icons-angular";
import { DownloadOutline, StarFill } from "@ant-design/icons-angular/icons";
import { HomeComponent } from "./components/home/home.component";
import { ButtonsPanelComponent } from "./components/buttons-panel/buttons-panel.component";
import { TableComponent } from "./components/table/table.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./components/registration/registration.component";
import { StoreModule } from "@ngrx/store";
import * as fromReducer from "./components/registration/register.reducer";

const icons: IconDefinition[] = [DownloadOutline, StarFill];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsPanelComponent,
    TableComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzDividerModule,
    StoreModule.forRoot({ count: fromReducer.reducer })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: "#00ff00" }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
