import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { appPath } from '../../core/constants/internal-routes';
import { CvDataService } from '../../core/services/cv-data.service';
import { ThemeService } from '../../core/services/theme.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

type HeroTechPlane = 'near' | 'mid' | 'far';

type HeroTechColumn = 'left' | 'right' | 'center';

type HeroTechChip = {
  readonly id: string;
  readonly simpleIcon: string;
  readonly depth: number;
  readonly plane: HeroTechPlane;
  readonly layoutColumn: HeroTechColumn;
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, CvIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly cv = inject(CvDataService);
  private readonly theme = inject(ThemeService);

  protected readonly home = this.cv.home;

  protected readonly resumeFallbackRoute = appPath('experiencia');

  protected readonly heroParticleIndices = Array.from({ length: 5 }, (_, i) => i);

  private readonly spotX = signal(50);
  private readonly spotY = signal(42);

  private readonly tiltX = signal(0);
  private readonly tiltY = signal(0);

  private readonly parallaxNx = signal(0);
  private readonly parallaxNy = signal(0);

  protected readonly heroTechChips: readonly HeroTechChip[] = [
    { id: 'ts', simpleIcon: 'typescript', depth: 1.95, plane: 'near', layoutColumn: 'left' },
    { id: 'nodejs', simpleIcon: 'nodedotjs', depth: 0.8, plane: 'mid', layoutColumn: 'left' },
    { id: 'mysql', simpleIcon: 'mysql', depth: 0.45, plane: 'far', layoutColumn: 'left' },
    { id: 'json', simpleIcon: 'json', depth: 0.52, plane: 'far', layoutColumn: 'left' },
    { id: 'api', simpleIcon: 'swagger', depth: 0.72, plane: 'far', layoutColumn: 'left' },
    { id: 'terraform', simpleIcon: 'terraform', depth: 0.58, plane: 'far', layoutColumn: 'left' },
    { id: 'docker', simpleIcon: 'docker', depth: 0.48, plane: 'far', layoutColumn: 'left' },
    { id: 'angular', simpleIcon: 'angular', depth: 1.95, plane: 'near', layoutColumn: 'right' },
    { id: 'sass', simpleIcon: 'sass', depth: 0.62, plane: 'far', layoutColumn: 'right' },
    { id: 'dotnet', simpleIcon: 'dotnet', depth: 0.5, plane: 'far', layoutColumn: 'right' },
    { id: 'css', simpleIcon: 'css', depth: 0.92, plane: 'mid', layoutColumn: 'right' },
    { id: 'markdown', simpleIcon: 'markdown', depth: 0.48, plane: 'far', layoutColumn: 'right' },
    { id: 'html', simpleIcon: 'html5', depth: 0.82, plane: 'mid', layoutColumn: 'right' },
    { id: 'postgresql', simpleIcon: 'postgresql', depth: 0.5, plane: 'far', layoutColumn: 'right' },
    { id: 'ga4', simpleIcon: 'googleanalytics', depth: 0.52, plane: 'far', layoutColumn: 'right' },
    { id: 'jest', simpleIcon: 'jest', depth: 1.05, plane: 'mid', layoutColumn: 'center' },
  ];

  private heroTechIconHex(chip: HeroTechChip): string {
    const dark = this.theme.effectiveTheme() === 'dark';
    if (chip.id === 'mysql') {
      return dark ? 'e8ddff' : '00758f';
    }
    switch (chip.plane) {
      case 'near':
        return dark ? 'e8ddff' : '5a36c4';
      case 'mid':
        return dark ? 'cbb5ff' : '4a2ca3';
      default:
        return dark ? 'a890e8' : '6b4ab8';
    }
  }

  protected readonly heroSceneTransform = computed(() => {
    const x = this.tiltX();
    const y = this.tiltY();
    return `perspective(1320px) rotateX(${x}deg) rotateY(${y}deg) translateZ(0)`;
  });

  protected readonly heroSpotX = computed(() => `${this.spotX()}%`);
  protected readonly heroSpotY = computed(() => `${this.spotY()}%`);

  protected onHeroPointerMove(event: MouseEvent): void {
    if (this.prefersReducedMotion()) {
      return;
    }
    const el = event.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const w = Math.max(r.width, 1);
    const h = Math.max(r.height, 1);
    this.spotX.set(((event.clientX - r.left) / w) * 100);
    this.spotY.set(((event.clientY - r.top) / h) * 100);

    if (this.prefersCoarsePointer()) {
      this.tiltX.set(0);
      this.tiltY.set(0);
      this.parallaxNx.set(0);
      this.parallaxNy.set(0);
      return;
    }
    const nx = (event.clientX - r.left) / w - 0.5;
    const ny = (event.clientY - r.top) / h - 0.5;
    this.parallaxNx.set(Math.max(-0.5, Math.min(0.5, nx)));
    this.parallaxNy.set(Math.max(-0.5, Math.min(0.5, ny)));
    this.tiltY.set(Math.max(-3.5, Math.min(3.5, nx * -7)));
    this.tiltX.set(Math.max(-2.8, Math.min(2.8, ny * 5.5)));
  }

  protected onHeroPointerLeave(): void {
    if (this.prefersReducedMotion()) {
      return;
    }
    this.spotX.set(50);
    this.spotY.set(42);
    this.parallaxNx.set(0);
    this.parallaxNy.set(0);
    this.tiltX.set(0);
    this.tiltY.set(0);
  }

  private prefersReducedMotion(): boolean {
    return globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }

  private prefersCoarsePointer(): boolean {
    return globalThis.matchMedia?.('(pointer: coarse)').matches ?? false;
  }

  protected heroTechIconUrl(chip: HeroTechChip): string {
    return `https://cdn.simpleicons.org/${chip.simpleIcon}/${this.heroTechIconHex(chip)}`;
  }

  protected heroFloatMarkClass(chip: HeroTechChip): string {
    const dominant = chip.id === 'ts' || chip.id === 'angular' ? ' hero-tech-float__mark--dominant' : '';
    return `hero-tech-float__mark hero-tech-float__mark--${chip.id} hero-tech-float__mark--plane-${chip.plane} hero-tech-float__mark--col-${chip.layoutColumn}${dominant}`;
  }

  protected heroTechIconSize(chip: HeroTechChip): number {
    if (chip.id === 'ts' || chip.id === 'angular') {
      return 86;
    }
    if (chip.id === 'jest') {
      return 50;
    }
    if (chip.id === 'mysql') {
      return 44;
    }
    if (chip.id === 'nodejs' || chip.id === 'sass') {
      return 42;
    }
    if (chip.id === 'postgresql') {
      return 36;
    }
    if (chip.plane === 'mid') {
      return 50;
    }
    if (chip.plane === 'far') {
      return chip.id === 'api' || chip.id === 'ga4' ? 38 : 36;
    }
    return 48;
  }

  protected heroTechChipParallax(chip: HeroTechChip): string {
    if (this.prefersReducedMotion()) {
      return 'translate3d(0, 0, 0)';
    }
    const mx = this.parallaxNx();
    const my = this.parallaxNy();
    const z = chip.depth * 24;
    const px = mx * (38 + (chip.id === 'ts' || chip.id === 'angular' ? 14 : 0)) * chip.depth;
    const py = my * (26 + (chip.id === 'jest' ? 4 : 0)) * chip.depth;
    return `translate3d(${px}px, ${py}px, ${z}px)`;
  }

  protected heroDisplayGivenNames(): string {
    const parts = this.home.profile.name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1]}`;
    }
    return parts[0] ?? '';
  }

  protected heroSummaryLead(): string {
    const s = this.home.profile.summary?.trim();
    if (!s) {
      return '';
    }
    const dot = s.indexOf('.');
    if (dot > 24 && dot <= 280) {
      return s.slice(0, dot + 1).trim();
    }
    return s.length > 200 ? `${s.slice(0, 197).trim()}…` : s;
  }
}
