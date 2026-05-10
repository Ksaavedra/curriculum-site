import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { appPath } from '../../core/constants/internal-routes';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);

  readonly links = [
    { path: appPath('home'), label: 'Início', exact: true },
    { path: appPath('sobre'), label: 'Sobre', exact: false },
    { path: appPath('experiencia'), label: 'Experiência', exact: false },
    { path: appPath('formacao'), label: 'Formação', exact: false },
    { path: appPath('habilidades'), label: 'Habilidades', exact: false },
    { path: appPath('projetos'), label: 'Projetos', exact: false },
    { path: appPath('contato'), label: 'Contato', exact: false },
  ];
}
