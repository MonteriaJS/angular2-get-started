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
	templateUrl	: 'app/templates/my-app.html',
	styleUrls 	: ['app/styles/my-app.css']
})

export class AppComponent{ 
	title			= 'lista de personas';
	selectedPerson 	: Person;	
	persons 		= personsArray;

	onSelect( person : Person ): void {
		this.selectedPerson = person;
	}
}