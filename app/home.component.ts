import { Component }  from '@angular/core';

@Component({
	selector : 'home',	
	template: '<div class="container"> <h1> {{ title }} </h1> </div>'
})

export class HomeComponent{
	title = 'home';
}