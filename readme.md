# Hollow CheckList

Uma checklist web para acompanhar as 112% de conclusão de *Hollow Knight*, feita com HTML, CSS e JavaScript puro.

O jogo espalha 112% de conclusão entre amuletos, chefes, fragmentos de máscara, panteões e mais uma dezena de categorias — cada uma com um peso diferente. Um fragmento de máscara vale 0,25%, um amuleto vale 1%, uma habilidade vale 2%. Esse projeto acompanha tudo isso, categoria por categoria, e mostra a porcentagem real em tempo real.

## Como funciona

Todo o conteúdo do jogo vive em um único arquivo, `js/data.js`, onde cada entrada carrega nome, categoria, peso e imagem:

```javascript
{ id: 48, nome: "Falso Cavaleiro", categoria: "Chefes", valor: 1, imagem: "imgs/boss-48.webp" }
```

O `script.js` lê esse array, distribui cada item na seção certa e calcula o progresso somando os pesos dos itens marcados. Adicionar conteúdo novo é adicionar uma linha no `data.js` — nada mais precisa ser tocado.

O progresso fica no `localStorage`, então continua lá quando você fecha o navegador.

## Categorias

| Seção | Peso |
|---|---|
| Amuletos | 40% |
| Chefes | 17% |
| Habilidades | 12% |
| Chefes dos Sonhos | 7% |
| Magias | 6% |
| Ferrão | 4% |
| Fragmentos de Máscara | 4% |
| Panteões | 4% |
| Artes do Ferrão | 3% |
| Ferrão dos Sonhos | 3% |
| Sonhadores | 3% |
| Fragmentos de Receptáculo | 3% |
| Derivados | 3% |
| Coliseu dos Tolos | 3% |

## Rodando localmente

```bash
git clone https://github.com/ericks1711/hollow-knight-tracker.git
```

Abra o `index.html` no navegador. Não há build, dependências ou servidor.

## Estrutura

```
hk-tracker/
├── index.html
├── css/style.css
├── js/
│   ├── data.js      # o conteúdo do jogo
│   └── script.js    # renderização, progresso e persistência
└── imgs/
```

## Créditos

Projeto pessoal, sem fins comerciais, feito para aprendizado e portfólio. *Hollow Knight*, suas imagens e seus nomes pertencem à Team Cherry.
