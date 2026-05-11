import type { CvIconName } from '../icons/cv-icon.types';
import { appPath } from './internal-routes';

export interface HeaderNavLink {
  path: string;
  label: string;
  exact: boolean;
  icon: CvIconName;
}

/** Links do header e do `mat-sidenav` mobile (mesma ordem). */
export const HEADER_NAV_LINKS: HeaderNavLink[] = [
  { path: appPath('home'), label: 'Início', exact: true, icon: 'home' },
  { path: appPath('sobre'), label: 'Sobre', exact: false, icon: 'user' },
  { path: appPath('experiencia'), label: 'Experiência', exact: false, icon: 'briefcase' },
  { path: appPath('formacao'), label: 'Formação', exact: false, icon: 'graduation' },
  { path: appPath('habilidades'), label: 'Habilidades', exact: false, icon: 'code' },
  { path: appPath('projetos'), label: 'Projetos', exact: false, icon: 'folder' },
  { path: appPath('contato'), label: 'Contato', exact: false, icon: 'mail' },
];
