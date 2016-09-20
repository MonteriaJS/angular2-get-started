import { Component, Input } from '@angular/core';
import { Person } 			from './person';

@Component({
	selector		: 'person-detail',
	templateUrl 	: 'app/templates/person-detail.html' 
})


export class PersonDetailsComponent{
	@Input()
	person : Person;
}