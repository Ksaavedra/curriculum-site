import { Injectable } from '@angular/core';
import { CV_DATA } from '../data/cv-data';
import { CvContent, HomeSection, homeSectionFromCv } from '../models/cv.types';

@Injectable({ providedIn: 'root' })
export class CvDataService {
  get content(): CvContent {
    return CV_DATA;
  }

  get home(): HomeSection {
    return homeSectionFromCv(CV_DATA);
  }
}
