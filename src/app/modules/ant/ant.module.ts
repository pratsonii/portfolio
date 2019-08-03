import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { IconDefinition } from "@ant-design/icons-angular";
import { DownloadOutline, StarFill } from "@ant-design/icons-angular/icons";
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS
} from "ng-zorro-antd";
const icons: IconDefinition[] = [DownloadOutline, StarFill];

@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroAntdModule, NzDividerModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: "#00ff00" }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons }
  ],
  exports: [NgZorroAntdModule, NzDividerModule]
})
export class AntModule {}
