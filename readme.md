# Hollow CheckList

Checklist interativa e não-oficial para acompanhar o progresso de conclusão de *Hollow Knight*. Marque o que já foi coletado/derrotado em cada categoria do jogo e acompanhe seu percentual de conclusão em tempo real, com progresso salvo automaticamente no navegador.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (variáveis customizadas, Grid, `:has()`)
- JavaScript (vanilla, sem frameworks ou bibliotecas)
- Web Storage API (`localStorage`)
- Fonte [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## ✨ Funcionalidades

- 14 categorias completas do jogo: Amuletos, Upgrades de Ferrão, Artes do Ferrão, Ferrão dos Sonhos, Magias, Chefes, Chefes dos Sonhos, Sonhadores, Fragmentos de Máscara, Fragmentos de Receptáculo, Habilidades, Derivados, Coliseu dos Tolos e Panteões
- Progresso calculado por **peso** (`valor`), não só por contagem de itens — categorias e itens diferentes contribuem proporcionalmente ao percentual real de conclusão do jogo
- Contador de progresso individual por categoria e total geral, mostrando tanto quantidade de itens quanto percentual
- Progresso salvo automaticamente no `localStorage` — permanece mesmo após fechar o navegador
- Navegação por âncoras entre as seções
- Fallback automático de imagem (placeholder) quando um arquivo não é encontrado
- Interface totalmente estilizada com identidade visual própria (paleta escura, tipografia Inter, cards com seleção visual via CSS puro)

## 🔗 Como rodar

Clone o repositório e abra o arquivo `index.html` diretamente no navegador:

```bash
git clone https://github.com/seu-usuario/hollow-checklist.git
cd hollow-checklist
```

Depois é só abrir o `index.html` no navegador de sua preferência.

## 🧩 Estrutura do código

- `index.html` — estrutura das seções e navegação
- `css/style.css` — estilização (paleta de cores, layout em grid, efeitos de seleção)
- `js/data.js` — array com todos os itens do jogo (nome, categoria, peso, imagem)
- `js/script.js` — renderização dinâmica dos itens, cálculo de progresso e persistência

O código usa um objeto de configuração central (`categorias`) que mapeia cada categoria do jogo ao seu prefixo de id, elemento da lista e elemento de progresso — isso evita repetição de lógica e facilita adicionar novas categorias no futuro.

## 📄 Créditos

Este é um projeto pessoal, não-comercial, feito para fins de aprendizado e portfólio. Imagens, nomes e demais elementos de *Hollow Knight* pertencem à Team Cherry.