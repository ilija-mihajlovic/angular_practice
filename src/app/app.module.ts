import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LandingPageComponent, AppComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent, AppComponent],
})
export class AppModule {}
