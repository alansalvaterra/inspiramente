import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { NavigationService } from '../../../services/navigation.service';
import { PensamentoService } from '../../../services/pensamento.service';
import { IPensamento } from '../../../interfaces/IPensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.listarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.deletaPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }

}
