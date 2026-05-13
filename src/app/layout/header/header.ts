import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HEADER_NAV_LINKS } from '../../core/constants/header-nav-links';
import { ThemeService } from '../../core/services/theme.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

const MD_MIN_PX = 768;

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    CvIconComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  protected readonly theme = inject(ThemeService);

  readonly drawerOpened = input(false);

  readonly toggleMobileNav = output<void>();

  readonly links = HEADER_NAV_LINKS;

  readonly isMdUp = signal(typeof matchMedia !== 'undefined' ? matchMedia(`(min-width: ${MD_MIN_PX}px)`).matches : true);

  private readonly mqMd =
    typeof matchMedia !== 'undefined' ? matchMedia(`(min-width: ${MD_MIN_PX}px)`) : null;

  ngOnInit(): void {
    this.mqMd?.addEventListener('change', () => {
      this.isMdUp.set(this.mqMd?.matches ?? true);
    });
  }

  onToggleMobileMenu(): void {
    this.toggleMobileNav.emit();
  }
}
