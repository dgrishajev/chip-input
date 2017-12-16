import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';

export const ROUTES = RouterModule.forRoot([
  { path: 'sample', component: SampleComponent }
]);