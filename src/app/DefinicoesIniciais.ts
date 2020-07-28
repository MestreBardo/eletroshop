export class DefinicoesIniciais {
    static carrinhoInicial = {
      pokemon: [],
      quantidadeCarrinho: 0,
      valorTotal: 0
    };
    static quentes = [
        {
          url: 'https://pokeapi.co/api/v2/pokemon/pikachu/',
          nome: 'pikachu',
          extraInfo: 'CHOCANTE'
        },
        {
          url: 'https://pokeapi.co/api/v2/pokemon/voltorb/',
          nome: 'voltorb',
          extraInfo: 'CHOCANTE'
        },
        {
          url: 'https://pokeapi.co/api/v2/pokemon/elekid/',
          nome: 'elekid',
          extraInfo: 'CHOCANTE'
        }
    ];
    static doForno = [
      {
        url: 'https://pokeapi.co/api/v2/pokemon/helioptile/',
        nome: 'Helioptile',
        extraInfo: 'NOVO'
      },
      {
        url: 'https://pokeapi.co/api/v2/pokemon/togedemaru/',
        nome: 'Togedemaru',
        extraInfo: 'NOVO'
      },
      {
        url: 'https://pokeapi.co/api/v2/pokemon/pichu/',
        nome: 'Pichu',
        extraInfo: 'NOVO'
      }
    ];
    static cartoesIniciais = [
      {
        id: 1,
        nomeCartao: 'josé da silva santos souza',
        numeroCartao: 'xxxx xxxx xxxx 5444',
        bandeira: 'mastercard',
        ativo: true
      },
      {
        id: 2,
        nomeCartao: 'josé da silva santos souza',
        numeroCartao: 'xxxx xxxx xxxx 8888',
        bandeira: 'visa',
        ativo: true
      }
    ];
}
