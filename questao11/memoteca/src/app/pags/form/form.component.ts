import { FormService } from './../../shared/services/form/form.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  quoteForm!: FormGroup;

  constructor(private formService: FormService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.quoteForm = new FormGroup({
      pensamento: new FormControl(''),
      modelo: new FormControl(''),
      autor: new FormControl(''),

    })
  }

  salvarQuote() {
    const novoQuote = this.quoteForm.value;
    this.formService.salvarPensamento(novoQuote).subscribe(
      () => {
      this.quoteForm.reset();
      this.router.navigateByUrl('/mural');

            // {
      //   next: response => {
      //     console.log(response)
      //   },
      //   error: err => {console.log('erro', err)}
      // }
    }
  );


  }

}
