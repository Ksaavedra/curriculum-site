import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { HEADER_NAV_LINKS } from './core/constants/header-nav-links';
import { HeaderComponent } from './layout/header/header';
import { CvIconComponent } from './shared/cv-icon/cv-icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    CvIconComponent,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('Currículo');
  protected readonly year = new Date().getFullYear();
  protected readonly navLinks = HEADER_NAV_LINKS;

  /** Sincroniza `aria-expanded` no botão menu do header. */
  protected readonly mobileDrawerOpen = signal(false);

  @ViewChild('navDrawer') private navDrawer?: MatSidenav;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected onMobileDrawerOpened(opened: boolean): void {
    this.mobileDrawerOpen.set(opened);
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMobileDrawer());
  }

  private closeMobileDrawer(): void {
    if (this.navDrawer?.opened) {
      this.navDrawer.close();
    }
    this.mobileDrawerOpen.set(false);
  }
}
