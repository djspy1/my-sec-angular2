import {NgModule} from '@angular/core'                    /*inbuilt module*/
import {BrowserModule} from '@angular/platform-browser'   /*inbuilt module*/
import {FormsModule} from '@angular/forms'                /*inbuilt module*/

import {AppComponent} from './app.component'                  /*customised component*/
import {HomeComponent} from './components/home/home.component'/*customised component*/
import {AboutComponent} from './components/about/about.component'/*customised component*/


@NgModule({
	 imports:[BrowserModule,FormsModule],
     declarations:[AppComponent,HomeComponent,AboutComponent],
	 bootstrap:[AppComponent]
})
export class AppModule{

}