export class ViaCepModel {
  //ViaCepModel = essa classe é a representaçao de um objeto, nesse caso, retorno da api. (pode ser chamado também de result object)
  //os atributos que sao programados aqui são aqueles que vêm da API. 
  //json trabalha com chave e valor. Chave do atributo e o valor do mesmo. 
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;


constructor (object: Partial<ViaCepModel>) {
  Object.assign(this, object);
}

}
