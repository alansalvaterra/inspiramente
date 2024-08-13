import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'Botão Padrão';
  @Input() route: string = '/';
  @Output() btnClick = new EventEmitter<string>();

  onClick(): void {
    this.btnClick.emit(this.route);
  }
}
