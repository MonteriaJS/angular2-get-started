import  { Component } from '@angular/core';

@Component({
	selector	: 'my-app',
	template 	: 	`<h1>
						{{ tittle }}
					</h1>
					<h2> {{ person }} </h2>
					`
})

export class AppComponent{ 
	tittle	= 'lista de personas';
	person	= 'dennis ritchie';
}