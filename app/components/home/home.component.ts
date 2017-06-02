import {Component} from '@angular/core'

@Component({
	moduleId:module.id,
	selector:'my-home',
	templateUrl: './home.component.html'


})

export class HomeComponent{
	private message:string;

	constructor(){
     this.message="I am from constructor";
	}
}

/*once we are creating thuis file automaticaly remaining 2 files will got 
created in this folder
*/