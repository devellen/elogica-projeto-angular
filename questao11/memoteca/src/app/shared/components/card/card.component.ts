import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Quote } from '../../interfaces/quote';
import Swal from 'sweetalert2';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() modelo: number = 0;
  @Input() pensamento: string = '';
  @Input() autor: string = '';
  @Input() id?: number;
  @Input() telaInicial: boolean = true;


  constructor(private formService: FormService) {}

  ngOnInit() {
    console.log(this.telaInicial)
  }
  chamaAlert() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.excluirPensamento().then(() => {
          Swal.fire('Deletado!', 'Seu arquivo foi deletado.', 'success')
            .then(() => {
              window.location.reload();
            });
        });
      }
    });
  }

  excluirPensamento(): Promise<void> {
    return new Promise((resolve) => {
      this.formService.excluirPensamento(this.id ? this.id : 0).subscribe(() => {
        resolve();
      });
    });
  }
}
