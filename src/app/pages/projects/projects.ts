import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';
import { CvIconComponent } from '../../shared/cv-icon/cv-icon';

@Component({
  selector: 'app-projects',
  imports: [CvIconComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly cv = inject(CvDataService);
}
