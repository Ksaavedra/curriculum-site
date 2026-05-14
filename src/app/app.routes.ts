import { Routes } from '@angular/router';
import { ROUTE_SEGMENTS } from './core/constants/internal-routes';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { EducationComponent } from './pages/education/education';
import { ExperienceComponent } from './pages/experience/experience';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { SkillsComponent } from './pages/skills/skills';

export const routes: Routes = [
  { path: ROUTE_SEGMENTS.home, component: HomeComponent },
  { path: ROUTE_SEGMENTS.sobre, component: AboutComponent },
  { path: ROUTE_SEGMENTS.experiencia, component: ExperienceComponent },
  { path: ROUTE_SEGMENTS.formacao, component: EducationComponent },
  { path: ROUTE_SEGMENTS.habilidades, component: SkillsComponent },
  { path: ROUTE_SEGMENTS.projetos, component: ProjectsComponent },
  { path: ROUTE_SEGMENTS.contato, component: ContactComponent },
  { path: '**', redirectTo: ROUTE_SEGMENTS.home },
];
