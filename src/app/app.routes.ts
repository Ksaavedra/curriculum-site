import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { EducationComponent } from './pages/education/education';
import { ExperienceComponent } from './pages/experience/experience';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { SkillsComponent } from './pages/skills/skills';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'formacao', component: EducationComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'projetos', component: ProjectsComponent },
  { path: 'contato', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
