import { NgModule } 		from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';

import { AppComponent }   			from './app.component';
import { PersonDetailsComponent } 	from './person-details.component';

@NgModule({
	imports 		: [ 
						BrowserModule,
						FormsModule
					],
	declarations 	: [ 
						AppComponent,
						PersonDetailsComponent
					],
	bootstrap 		: [ AppComponent ]
})

export class AppModule {}