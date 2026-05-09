import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly links = [
    { path: '/', label: 'Início', exact: true },
    { path: '/sobre', label: 'Sobre', exact: false },
    { path: '/experiencia', label: 'Experiência', exact: false },
    { path: '/formacao', label: 'Formação', exact: false },
    { path: '/habilidades', label: 'Habilidades', exact: false },
    { path: '/projetos', label: 'Projetos', exact: false },
    { path: '/contato', label: 'Contato', exact: false },
  ];
}
