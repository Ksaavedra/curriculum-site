import { Component } from '@angular/core';
import type { Routes } from '@angular/router';

@Component({ standalone: true, template: '' })
export class TestRouteStubComponent {}

export const MINIMAL_TEST_ROUTES: Routes = [
  { path: '', component: TestRouteStubComponent },
  { path: 'sobre', component: TestRouteStubComponent },
  { path: 'experiencia', component: TestRouteStubComponent },
  { path: 'formacao', component: TestRouteStubComponent },
  { path: 'habilidades', component: TestRouteStubComponent },
  { path: 'projetos', component: TestRouteStubComponent },
  { path: 'contato', component: TestRouteStubComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
