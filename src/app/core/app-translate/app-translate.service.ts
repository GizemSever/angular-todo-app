import {Injectable} from '@angular/core';
import {LocalStorageService} from "../local-storage/local-storage.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {

  constructor(
    private localStorageService: LocalStorageService,
    private translateService: TranslateService
  ) {
  }

  init(defaultLang: string): void {
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }
}
