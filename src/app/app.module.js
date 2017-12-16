"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./components/root/app.component");
var profile_1 = require("./components/profile/profile");
var about_1 = require("./components/about/about");
var contact_1 = require("./components/contact/contact");
var education_1 = require("./components/education/education");
var experience_1 = require("./components/experience/experience");
var footer_1 = require("./components/footer/footer");
var navbar_1 = require("./components/navbar/navbar");
var projects_1 = require("./components/projects/projects");
var skills_1 = require("./components/skills/skills");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            profile_1.ProfileComponent,
            about_1.AboutComponent,
            contact_1.ContactComponent,
            education_1.EducationComponent,
            experience_1.ExperienceComponent,
            footer_1.FooterComponent,
            navbar_1.NavbarComponent,
            profile_1.ProfileComponent,
            projects_1.ProjectsComponent,
            skills_1.SkillsComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map