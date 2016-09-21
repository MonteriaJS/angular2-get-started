import  { Component } 		from '@angular/core';
import 	{ Person } 			from './person'
import 	{ PersonService } 	from './person.service';
import 	{ OnInit } 			from '@angular/core';
import 	{ Router } 			from '@angular/router';

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

	constructor( private personService : PersonService, private router: Router ){}

	onSelect( person : Person ): void {
		this.selectedPerson = person;
	}

	getPerson(): void {
		this.personService.getPersons()
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

	gotoDetail(person: Person): void {
		let link = ['/persons', person.id];
		this.router.navigate(link);
	}
}