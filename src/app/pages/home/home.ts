import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly cv = inject(CvDataService);

  /** Modelo explícito da home (`HomeSection` ↔ blocos herói, CTAs, destaques). */
  protected readonly home = this.cv.home;
}
