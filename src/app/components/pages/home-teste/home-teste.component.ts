import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-home-teste',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-teste.component.html',
  styleUrl: './home-teste.component.css'
})
export class HomeTesteComponent {
  constructor(private navigationService: NavigationService) {}

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}
