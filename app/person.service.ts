import { Injectable } 	from '@angular/core';

import { Person } 		from './person';
import { personsArray } from './data-person';

@Injectable()
export class PersonService {
	getPerson(): Promise<Person[]> {
		return new Promise<Person[]>(function(resolve, reject){
			resolve(personsArray);
		})  
	}
}