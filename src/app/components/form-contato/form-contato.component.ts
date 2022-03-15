import { ViaCepModel } from './../../models/via-cep-model';
import { ViaCepApiService } from './../../services/via-cep-api.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  formContato: ViaCepModel = {};

  showForm = new Subject<boolean>();

  cepInput: string = '';

//serviço injetado
//variavel: cepService
  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
  }

  getViaCep(cep: FocusEvent) {
    if ((cep.target as HTMLInputElement)?.value)
    {
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
        (CepModel) => {
          this.formContato = CepModel;
          this.showForm.next(true);
        }
      );
    }
  }
}
