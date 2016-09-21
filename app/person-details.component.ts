import { Component, Input, OnInit } from '@angular/core';
import { Person } 					from './person';
import { ActivatedRoute, Params } 	from '@angular/router';

import { PersonService } 			from './person.service';


@Component({
	selector		: 'person-detail',
	templateUrl 	: 'app/templates/person-detail.html',
	providers 		: [ PersonService ]
})


export class PersonDetailsComponent implements OnInit{
	@Input()
	person : Person;

	constructor(private personServices: PersonService, private route: ActivatedRoute){}

	ngOnInit(){
		this.route.params.forEach( (params:Params) => {
			let id = +params['id'];
			this.personServices.getPerson(id)
				.then( person => this.person = person );
		} )
	}

}