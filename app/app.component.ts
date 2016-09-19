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
						<li> 
							<a [class.selected] = " person === selectedPerson " href="#" (click)="onSelect(person)"> {{person.id}} {{person.name}} </a> 
						</li>
					</ul>
					<div *ngIf="selectedPerson">
						<h2> {{ selectedPerson.name }} Details </h2>
						<div>
							<label> id: {{ selectedPerson.id }} </label> 
						</div>
						<div>
							<label> name: </label>
							<input [(ngModel)]="selectedPerson.name" placeholder="name">
						</div>
					</div>`,
	styles 		: [`
					ul{
						list-style: none;
					}
					ul li a {
						text-decoration : none;
					}

					.selected {
						background-color : gray;
						color : white;
					}
				`]
})

export class AppComponent{ 
	title			= 'lista de personas';
	selectedPerson 	: Person;	
	persons 		= personsArray;

	onSelect( person : Person ): void {
		this.selectedPerson = person;
	}
}