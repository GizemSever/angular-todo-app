import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {SnackBarColor} from "./snack-bar-color.enum";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
  }

  private show(message: string, type: SnackBarColor, action?: string, duration?: number): MatSnackBarRef<any> {
    const barClass = ['todo-snackbar', type];

    const config = {
      panelClass: barClass,
      duration
    };

    return this.snackBar.open(message, action, config);
  }

  success(message: string, action: string = undefined, duration: number = 2500) {
    this.translateService.get(message)
      .subscribe(translated => {
        this.show(translated, SnackBarColor.SUCCESS, action, duration);
      });
  }

  error(message: string, action: string = undefined, duration: number = 2500) {
    this.translateService.get(message)
      .subscribe(translated => {
        this.show(translated, SnackBarColor.DANGER, action, duration);
      });
  }
}
