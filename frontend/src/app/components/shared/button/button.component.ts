import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() text: string = 'Botão Padrão';
  @Input() route: string = '/';
  @Input() disabled: boolean = false; 
  @Output() btnClick = new EventEmitter<string>();

  onClick(): void {
    if (!this.disabled) { 
      this.btnClick.emit(this.route);
    }
  }
}
