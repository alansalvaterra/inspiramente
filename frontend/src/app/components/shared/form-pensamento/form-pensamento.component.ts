import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IPensamento } from '../../../interfaces/IPensamento';
import { CardComponent } from "../thoughts/card/card.component";
import { PensamentoService } from '../../../services/pensamento.service';
import { NavigationService } from '../../../services/navigation.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-pensamento',
  standalone: true,
  imports: [
    FormsModule, 
    CardComponent, 
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-pensamento.component.html',
  styleUrl: './form-pensamento.component.css',
})

export class FormPensamentoComponent {
  @Input() pensamento: IPensamento = { mensagem: '', autor: '', modelo: 0 };
  @Output() onSave = new EventEmitter<IPensamento>();
  // @Output() onCancel = new EventEmitter<void>();

  formulario!: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private service: PensamentoService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      mensagem: [this.pensamento.mensagem, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      autor: [this.pensamento.autor, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      modelo: [this.pensamento.modelo, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const pensamento: IPensamento = this.formulario.value; 
      this.salvaPensamento(pensamento); 
    } else {
      this.formulario.markAllAsTouched();
    }
  }

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
