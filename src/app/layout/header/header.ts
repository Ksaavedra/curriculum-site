import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { appPath } from '../../core/constants/internal-routes';
import type { CvIconName } from '../../core/icons/cv-icon.types';
import { ThemeService } from '../../core/services/theme.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

/** Breakpoint `md` do Bootstrap 5 (navbar-expand-md). */
const MD_MIN_PX = 768;

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CvIconComponent, NgbCollapse],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  protected readonly theme = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly navPanelId = 'header-main-nav';

  /** `true` = menu fechado (ecrãs abaixo do breakpoint `md`). */
  navCollapsed = true;

  private readonly mqMd =
    typeof matchMedia !== 'undefined' ? matchMedia(`(min-width: ${MD_MIN_PX}px)`) : null;

  readonly links: { path: string; label: string; exact: boolean; icon: CvIconName }[] = [
    { path: appPath('home'), label: 'Início', exact: true, icon: 'home' },
    { path: appPath('sobre'), label: 'Sobre', exact: false, icon: 'user' },
    { path: appPath('experiencia'), label: 'Experiência', exact: false, icon: 'briefcase' },
    { path: appPath('formacao'), label: 'Formação', exact: false, icon: 'graduation' },
    { path: appPath('habilidades'), label: 'Habilidades', exact: false, icon: 'code' },
    { path: appPath('projetos'), label: 'Projetos', exact: false, icon: 'folder' },
    { path: appPath('contato'), label: 'Contato', exact: false, icon: 'mail' },
  ];

  ngOnInit(): void {
    this.applyViewportCollapse();

    this.mqMd?.addEventListener('change', () => this.applyViewportCollapse());

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        if (!this.isMdUp()) {
          this.navCollapsed = true;
        }
      });
  }

  toggleNav(): void {
    this.navCollapsed = !this.navCollapsed;
  }

  onNavLinkClick(): void {
    if (!this.isMdUp()) {
      this.navCollapsed = true;
    }
  }

  private isMdUp(): boolean {
    return this.mqMd?.matches ?? true;
  }

  /** No desktop o menu fica sempre expandido; em mobile inicia/recolhe conforme o breakpoint. */
  private applyViewportCollapse(): void {
    if (this.isMdUp()) {
      this.navCollapsed = false;
    } else {
      this.navCollapsed = true;
    }
  }
}
