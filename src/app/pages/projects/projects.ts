import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ProjectItem } from '../../core/models/cv.types';
import { CvDataService } from '../../core/services/cv-data.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

@Component({
  selector: 'app-projects',
  imports: [CvIconComponent, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly cv = inject(CvDataService);

  /** `github.com` ou páginas `*.github.io` tratadas como repositório/página GitHub. */
  protected isGitHubRepo(url: string | undefined): boolean {
    const u = url?.trim();
    if (!u) {
      return false;
    }
    try {
      const host = new URL(u).hostname.toLowerCase();
      return host === 'github.com' || host === 'www.github.com' || host.endsWith('.github.io');
    } catch {
      return /^https?:\/\/(www\.)?github\.com\//i.test(u);
    }
  }

  protected hasActions(p: ProjectItem): boolean {
    return !!(p.link?.trim() || p.demoUrl?.trim());
  }

  /** Rota interna (`/…`) sem `//` — demo na mesma SPA. */
  protected isInternalRoute(url: string): boolean {
    return url.startsWith('/') && !url.startsWith('//');
  }
}
