import { Injectable } 	from '@angular/core';

import { Person } 		from './person';
import { personsArray } from './data-person';

@Injectable()
export class PersonService {
	getPersons(): Promise<Person[]> {
		return new Promise<Person[]>(function(resolve, reject){
			resolve(personsArray);
		})  
	}

	getPerson(id : number): Promise<Person> {
		return this.getPersons()
				.then( persons => persons.find( person => person.id === id ) );
	}
}