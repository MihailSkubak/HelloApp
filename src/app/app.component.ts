import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
visibility: boolean = true;
toggle(){
 this.visibility = !this.visibility;
}

  title = 'HelloApp';
}