import { ViaCepModel } from './../models/via-cep-model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViaCepApiService {

  constructor(private http: HttpClient) { }
  //o http client quando chamamos o metodo get, faz a requisicao ao servidor atraves da url que fornecer
  //aqui no ex é urlGet que vem da api. 
  //o get tem como segundo parametro opçoes, que pode ser: um header, posso enviar um token de 
  //autenticacao para aquela api, tipo de arquivo, tipo de dado que está sendo enviado. Tudo no header. 
  //por padrao o httpClient.get sempre retorna um json. é no body da resposta da requisição que estará as info
  //que eu quero.
  //a requisicao e a resposta desta possuem header e body
  //request -> response -> tratativas

  getCep(cep: string) {
    const urlGet = `${environment.urlApiViaCep}${cep}/json/`;
    return this.http.get<ViaCepModel>(urlGet);// o httpClient quando recebe os dados faz o binding

  }

}
