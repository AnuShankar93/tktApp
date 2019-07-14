import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { SpinnerComponent } from './spinner.component';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { FormErrorWrapperComponent } from './form-error-wrapper/form-error-wrapper.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  declarations: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  exports: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
