import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>
      <p-button label="Toggle Dark Mode"  (onClick)="toggleDarkMode()"/>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  toggleDarkMode (){
    console.log('app running times')
    const element = document.querySelector('html');
    if(element !== null) {
      element.classList.toggle('my-app-dark');
    }
  }
  title = 'gco';
}
