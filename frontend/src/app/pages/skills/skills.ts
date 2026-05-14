import { Component, inject } from '@angular/core';
import { CvDataService } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected readonly cv = inject(CvDataService);
}
