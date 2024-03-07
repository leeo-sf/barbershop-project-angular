import { Component } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServiceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
