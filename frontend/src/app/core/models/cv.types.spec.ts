import type { CvContent } from './cv.types';
import { homeSectionFromCv } from './cv.types';

describe('homeSectionFromCv', () => {
  const minimalCv: CvContent = {
    profile: {
      name: 'Test',
      lastName: 'User',
      headline: 'Dev',
      summary: 'Sumário.',
      location: 'PT',
      email: 't@t.com',
      phone: '0',
    },
    primaryCtas: [
      { label: 'A', route: '/a', variant: 'primary' },
      { label: 'B', route: '/b', variant: 'ghost' },
    ],
    experience: [],
    education: [],
    skills: [],
    projects: [],
  };

  it('mapeia perfil e CTAs do CV para a secção home', () => {
    const home = homeSectionFromCv(minimalCv);
    expect(home.profile).toBe(minimalCv.profile);
    expect(home.primaryCtas).toBe(minimalCv.primaryCtas);
    expect(home.highlights).toEqual([]);
  });

  it('usa valores por omissão quando eyebrow e aria label faltam', () => {
    const home = homeSectionFromCv(minimalCv);
    expect(home.eyebrow).toBe('Olá, sou');
    expect(home.highlightsSectionAriaLabel).toBe('Destaques');
  });

  it('preserva eyebrow e highlights do CV quando existem', () => {
    const cv: CvContent = {
      ...minimalCv,
      heroEyebrow: 'Olá, eu sou',
      highlightsSectionAriaLabel: 'Métricas',
      highlights: [{ value: '1', label: 'Um' }],
    };
    const home = homeSectionFromCv(cv);
    expect(home.eyebrow).toBe('Olá, eu sou');
    expect(home.highlightsSectionAriaLabel).toBe('Métricas');
    expect(home.highlights).toEqual([{ value: '1', label: 'Um' }]);
  });
});
