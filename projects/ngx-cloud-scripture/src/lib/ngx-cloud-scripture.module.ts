import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CloudScriptureConfig, CLOUD_SCRIPTURE_CONFIG } from './interfaces';
import { NgxCloudScriptureService } from './ngx-cloud-scripture.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgxCloudScriptureModule {
  public static forRoot(config: CloudScriptureConfig): ModuleWithProviders<NgxCloudScriptureModule> {
    return {
      ngModule: NgxCloudScriptureModule,
      providers: [NgxCloudScriptureService, {provide: CLOUD_SCRIPTURE_CONFIG, useValue: config}]
    };
  }
}
