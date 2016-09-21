import  { Component } 		from '@angular/core';
import 	{ Person } 			from './person'
import 	{ PersonService } 	from './person.service';
import 	{ OnInit } 			from '@angular/core';

@Component({
	selector	: 'my-persons',
	templateUrl	: 'app/templates/my-persons.html',
	styleUrls 	: ['app/styles/my-persons.css'],
	providers	: [ PersonService ]
})

export class PersonsComponent implements OnInit{ 
	title			= 'lista de personas';
	selectedPerson 	: Person;	
	persons 		: Person[];

	constructor( private personService : PersonService ){}

	onSelect( person : Person ): void {
		this.selectedPerson = person;
	}

	getPerson(): void {
		this.personService.getPerson()
			.then( persons => {
				this.persons = persons
			} )
			.catch ( err => {
				console.log(err)
			} )
	}

	ngOnInit(): void {
		this.getPerson();
	}
}