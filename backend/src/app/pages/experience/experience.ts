import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  protected readonly cv = inject(CvDataService);
}
