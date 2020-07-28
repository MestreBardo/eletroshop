export class DefinicoesIniciais {
    static carrinhoInicial = {
      pokemon: [],
      quantidadeCarrinho: 0,
      valorTotal: 0
    };
    static quentes = [
        {
          url: 'https://pokeapi.co/api/v2/pokemon/6/',
          nome: 'charizard',
          extraInfo: 'QUENTE'
        },
        {
          url: 'https://pokeapi.co/api/v2/pokemon/59/',
          nome: 'arcanine',
          extraInfo: 'QUENTE'
        },
        {
          url: 'https://pokeapi.co/api/v2/pokemon/146/',
          nome: 'moltres',
          extraInfo: 'QUENTE'
        }
    ];
    static doForno = [
      {
        url: 'https://pokeapi.co/api/v2/pokemon/322/',
        nome: 'numel',
        extraInfo: 'DO FORNO'
      },
      {
        url: 'https://pokeapi.co/api/v2/pokemon/636/',
        nome: 'larvesta',
        extraInfo: 'DO FORNO'
      },
      {
        url: 'https://pokeapi.co/api/v2/pokemon/37/',
        nome: 'vulpix',
        extraInfo: 'DO FORNO'
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
