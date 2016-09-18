import  { Component } from '@angular/core';

export class Person {
	id 		: number;
	name 	: string;
}

@Component({
	selector	: 'my-app',
	template 	: 	`<h1>
						{{ title }}
					</h1>
					<h2> {{ person.id }}  {{ person.name }} </h2>
					`
})

export class AppComponent{ 
	title	= 'lista de personas';
	person  : Person = {
				id 		: 1,
				name 	: 'dennis ritchie'
			};
}