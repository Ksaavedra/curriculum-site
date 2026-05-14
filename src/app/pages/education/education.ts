import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  protected readonly cv = inject(CvDataService);
}
