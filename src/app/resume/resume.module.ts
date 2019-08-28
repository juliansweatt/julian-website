import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EducationComponent } from './components/education/education.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SkillsComponent } from './components/skills/skills.component';
import { ConnectComponent } from './components/connect/connect.component'
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { JsonImportService } from './services/json-import.service';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [
    EducationComponent,
    EmploymentComponent,
    SkillsComponent,
    ConnectComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
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
    HttpClientModule,
    MatMenuModule
  ],
  providers: [ JsonImportService ],
  bootstrap: [],
})
export class ResumeModule { }
