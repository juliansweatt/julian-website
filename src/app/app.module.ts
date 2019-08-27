import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { 
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatMenuModule,
 } from "@angular/material";
import { ResumeComponent } from './resume/resume.component';
import { ResumeModule } from './resume/resume.module';
import { ConnectComponent } from './connect/connect.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ThemeControlService } from './services/theme-control.service';
import { BlogComponent } from './blog/blog.component';
import { BlogModule } from './blog/blog.module';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'home', component: ConnectComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    ThemeSelectorComponent,
    HeaderBarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ResumeModule,
    BlogModule
  ],
  providers: [ThemeControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
