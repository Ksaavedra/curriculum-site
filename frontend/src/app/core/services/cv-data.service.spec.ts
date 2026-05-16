import { TestBed } from '@angular/core/testing';
import { CV_DATA } from '../data/cv-data';
import { homeSectionFromCv } from '../models/cv.types';
import { CvDataService } from './cv-data.service';

describe('CvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('content devolve CV_DATA', () => {
    const service = TestBed.inject(CvDataService);
    expect(service.content).toBe(CV_DATA);
  });

  it('home devolve a secção derivada do CV', () => {
    const service = TestBed.inject(CvDataService);
    expect(service.home).toEqual(homeSectionFromCv(CV_DATA));
  });
});
