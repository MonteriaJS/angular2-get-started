import { ModuleWithProviders } 	from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } 	from './persons.component';
import { HomeComponent }			from './home.component';

const appRoutes: Routes = [
	{ path : 'persons', component : PersonsComponent },
	{ path : '', component : HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);