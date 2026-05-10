import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { appPath } from '../../core/constants/internal-routes';
import type { CvIconName } from '../../core/icons/cv-icon.types';
import { ThemeService } from '../../core/services/theme.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CvIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);

  readonly links: { path: string; label: string; exact: boolean; icon: CvIconName }[] = [
    { path: appPath('home'), label: 'Início', exact: true, icon: 'home' },
    { path: appPath('sobre'), label: 'Sobre', exact: false, icon: 'user' },
    { path: appPath('experiencia'), label: 'Experiência', exact: false, icon: 'briefcase' },
    { path: appPath('formacao'), label: 'Formação', exact: false, icon: 'graduation' },
    { path: appPath('habilidades'), label: 'Habilidades', exact: false, icon: 'code' },
    { path: appPath('projetos'), label: 'Projetos', exact: false, icon: 'folder' },
    { path: appPath('contato'), label: 'Contato', exact: false, icon: 'mail' },
  ];
}
