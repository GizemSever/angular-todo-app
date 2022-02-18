import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule, TranslatePipe} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../../environments/environment";
import {AppTranslateService} from "./app-translate/app-translate.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class CoreModule {
  constructor(
    private translateService: AppTranslateService
  ) {
    this.translateService.init(environment.defaultLanguage)
  }
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule
    }
  }
}
