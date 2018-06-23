import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
 {{ title }}!
  </h1>

<label>Marvellous InfoSystems:</label>
<input type="text"/>
`,
  styles: [`input[type="text"]
  {
      color: blue;
  }`]
})
export class AppComponent {
  public title ="Ass2";
}
