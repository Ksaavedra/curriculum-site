import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { CvIconName } from '../../core/icons/cv-icon.types';

@Component({
  selector: 'app-cv-icon',
  standalone: true,
  imports: [],
  templateUrl: './cv-icon.html',
  styleUrl: './cv-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
  },
})
export class CvIconComponent {
  readonly name = input.required<CvIconName>();
}
