import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCommonModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    DragDropModule
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    DragDropModule
  ]
})
export class SharedModule {
}
