import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }, {
    path: 'landing',
    component: LandingComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: '**',
    component: ErrorPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
