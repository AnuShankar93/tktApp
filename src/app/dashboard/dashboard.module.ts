import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(DashboardRoutes)],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
