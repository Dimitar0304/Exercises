import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe, CurrencyPipe, DecimalPipe, UpperCasePipe, CommonModule } from "@angular/common";
import { SummaryPipe } from "./summary.pipe";

@Component({
  selector: 'pipes',
  template: `
  <h2>{{obejct.title|uppercase}}</h2>
  <p>Raiting: {{obejct.raiting | number:'1.2-2'}}</p>
  <p>Students: {{obejct.students | number}}</p>
  <p>Price: {{obejct.price | currency:'EUR'}}</p>
  <p>Release Date: {{obejct.releaseDate | date:'longDate'}}</p>
  <p>Summmary{{obejct.summary | summary:2}}</p>
  `,
  standalone: true,
  imports: [CommonModule,SummaryPipe]
})

export class PipesComponent {
  obejct = {
    title :'Title of the object',
    raiting : 4.9745,
    students : 30123,
    price : 99.95,
    releaseDate : new Date(2020, 1, 1),
    summary : "this is my custom pipe"
  }
}
