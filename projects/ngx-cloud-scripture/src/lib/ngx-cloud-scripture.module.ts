import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CloudScriptureConfig } from './interfaces';
import { NgxCloudScriptureService } from './ngx-cloud-scripture.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgxCloudScriptureModule {
  public static forRoot(config: CloudScriptureConfig): ModuleWithProviders {
    return {
      ngModule: NgxCloudScriptureModule,
      providers: [NgxCloudScriptureService, {provide: 'config', useValue: config}]
    };
  }
}
