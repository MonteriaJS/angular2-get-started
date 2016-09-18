import  { Component } from '@angular/core';

export class Person {
	id 		: number;
	name 	: string;

	constructor(idParam: number, nameParam: string){
		this.id 		= idParam;
		this.name 		= nameParam;
	}
}

@Component({
	selector	: 'my-app',
	template 	: 	`<h1>
						{{ title }}
					</h1>
					<h2> {{ person.id }}  {{ person.name }} </h2>`
})

export class AppComponent{ 
	title	= 'lista de personas';
	person  = new Person(1, 'Dennis ritchie');
}