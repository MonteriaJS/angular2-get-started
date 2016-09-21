import { NgModule } 		from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';

import { PersonsComponent }   		from './persons.component';
import { PersonDetailsComponent } 	from './person-details.component';
import { HomeComponent } 			from './home.component';
import { AppComponent } 			from './app.component';
import { routing }					from './app.routing';


@NgModule({
	imports 		: [ 
						BrowserModule,
						FormsModule,
						routing
					],
	declarations 	: [ 
						PersonsComponent,
						PersonDetailsComponent,
						AppComponent,
						HomeComponent
					],
	bootstrap 		: [ AppComponent ]
})

export class AppModule {}