import  { Component } from '@angular/core';

export class Person {
	id 		: number;
	name 	: string;

	constructor(idParam: number, nameParam: string){
		this.id 		= idParam;
		this.name 		= nameParam;
	}
}

const personsArray : Person[] = [
	{ id: 1, name: 'Dennis ritchie' },
	{ id: 2, name: 'Linus Torvalds' },
	{ id: 3, name: 'Richard Stallman' },
	{ id: 4, name: 'Steve Jobs' },
	{ id: 5, name: 'Bill Gates' }
];

@Component({
	selector	: 'my-app',
	template 	: 	`<h1>
						{{ title }}
					</h1>
					<ul *ngFor=" let person of persons ">
						<li > {{person.id}} {{person.name}} </li>
					</ul>
					<h2> {{ person.id }}  {{ person.name }} </h2>
					<input [(ngModel)]="person.name" placeholder="name">`
})

export class AppComponent{ 
	title	= 'lista de personas';
	person  = new Person(1, 'Dennis ritchie');
	persons = personsArray;
}