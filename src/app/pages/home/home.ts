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
  protected readonly cv = inject(CvDataService);

  protected readonly profile = this.cv.content.profile;
  protected readonly highlights = this.cv.content.highlights ?? [];
}
