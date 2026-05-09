import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly cv = inject(CvDataService);
}
