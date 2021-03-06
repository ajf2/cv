import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { EmploymentRecordComponent } from './employment-record/employment-record.component';
import { HeaderComponent } from './header/header.component';
import { PersonalSummaryComponent } from './personal-summary/personal-summary.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { EmploymentExperienceComponent } from './employment-experience/employment-experience.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    EmploymentHistoryComponent,
    EmploymentRecordComponent,
    HeaderComponent,
    PersonalSummaryComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    EmploymentExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
