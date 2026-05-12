import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly cv = inject(CvDataService);
  protected readonly profile = this.cv.content.profile;

  /** Parágrafos do resumo (separados por linha em branco no `summary`). */
  protected get summaryParagraphs(): string[] {
    return this.profile.summary
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
  }
}
