import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private navigationService: NavigationService) {}

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}
