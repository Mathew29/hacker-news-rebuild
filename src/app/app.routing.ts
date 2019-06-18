import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DataComponent } from './data/data.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { FlawComponent } from './flaw/flaw.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'decryption',
    component: DecryptionComponent
  },
  {
    path: 'flaw',
    component: FlawComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);