import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PensamentoService } from '../../../services/pensamento.service';
import { NavigationService } from '../../../services/navigation.service';
import { IPensamento } from '../../../interfaces/IPensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { FormPensamentoComponent } from '../../shared/form-pensamento/form-pensamento.component';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    FormPensamentoComponent
  ],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  pensamento: IPensamento = {
    id: 0,
    mensagem: '',
    autor: '',
    modelo: 0
  };

  constructor(
    private navigationService: NavigationService,
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.listarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editaPensamento(): void {
      this.service.editaPensamento(this.pensamento).subscribe(() => {
        alert('Pensamento editado com sucesso!');
        this.router.navigate(['/home'])
      });
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}