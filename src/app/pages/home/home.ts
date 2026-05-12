import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { appPath } from '../../core/constants/internal-routes';
import { CvDataService } from '../../core/services/cv-data.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CvIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly cv = inject(CvDataService);

  /** Modelo explícito da home (`HomeSection` ↔ blocos herói, CTAs, destaques). */
  protected readonly home = this.cv.home;

  /** Sem PDF em `public/`, o botão principal leva à página de experiência. */
  protected readonly resumeFallbackRoute = appPath('experiencia');
}
