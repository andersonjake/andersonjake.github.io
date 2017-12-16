import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './components/root/app.component';
import {ProfileComponent} from './components/profile/profile';
import {AboutComponent} from './components/about/about';
import {ContactComponent} from './components/contact/contact';
import {EducationComponent} from './components/education/education';
import {ExperienceComponent} from './components/experience/experience';
import {FooterComponent} from './components/footer/footer';
import {NavbarComponent} from './components/navbar/navbar';
import {ProjectsComponent} from './components/projects/projects';
import {SkillsComponent} from './components/skills/skills';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
