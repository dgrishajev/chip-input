import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

export const ROUTES = RouterModule.forRoot([
  { path: 'invoices', component: SampleComponent },
  { path: '**', redirectTo: '/sample', pathMatch: 'full' },
  { path: '', redirectTo: '/sample', pathMatch: 'full' }
]);