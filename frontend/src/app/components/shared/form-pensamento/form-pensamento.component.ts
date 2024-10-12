import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPensamento } from '../../../interfaces/IPensamento';
import { CardComponent } from "../thoughts/card/card.component";
import { PensamentoService } from '../../../services/pensamento.service';
import { NavigationService } from '../../../services/navigation.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-pensamento',
  standalone: true,
  imports: [FormsModule, CardComponent, ButtonComponent],
  templateUrl: './form-pensamento.component.html',
  styleUrl: './form-pensamento.component.css',
})
export class FormPensamentoComponent {
  @Input() pensamento: IPensamento = { mensagem: '', autor: '', modelo: 0 };
  @Output() onSave = new EventEmitter<IPensamento>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(
    private navigationService: NavigationService,
    private service: PensamentoService,
    private router: Router
  ) { }

  salvaPensamento(pensamento: IPensamento): void {
    this.service.salvaPensamento(pensamento).subscribe(() => {
      alert('Pensamento salvo com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}
