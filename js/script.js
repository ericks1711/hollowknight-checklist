const listas = document.getElementById("listas");
const listaFe = document.getElementById("lista-ferrao");
const listaFA = document.getElementById("lista-ferraoArt");
const listaMag = document.getElementById("lista-magias");
const listaFS = document.getElementById("lista-ferraoSon");
const listaAm = document.getElementById("lista-amuleto");
const listaCh = document.getElementById("lista-chefes");
const listaCS = document.getElementById("lista-chefes-sonhos");
const listaSon = document.getElementById("lista-sonhadores");
const listaMas = document.getElementById("lista-mascara");
const listaRe = document.getElementById("lista-receptaculo");
const listaIt = document.getElementById("lista-itens");
const listaOu = document.getElementById("lista-outros");
const listaCT = document.getElementById("lista-coliseu");
const listaPa = document.getElementById("lista-panteoes");

const categorias = {
  "Amuletos": {
    prefixo: "charm",
    pasta: listaAm,
    nomeExibicao: "Total de Amuletos",
    progresso: document.getElementById("progresso-amuletos")
  },
  "FerraoUp": {
    prefixo: "nail",
    pasta: listaFe,
    nomeExibicao: "Total de Upgrades no Ferrão",
    progresso: document.getElementById("progresso-ferrao")
  },
  "FerraoArt": {
    prefixo: "nailArts",
    pasta: listaFA,
    nomeExibicao: "Total de Artes do Ferrão Coletadas",
    progresso: document.getElementById("progresso-ferraoArt")
  },
  "Chefes": {
    prefixo: "boss",
    pasta: listaCh,
    nomeExibicao: "Total de Chefes Derrotados",
    progresso: document.getElementById("progresso-chefes")
  },
  "Chefes dos Sonhos": {
    prefixo: "warrior",
    pasta: listaCS,
    nomeExibicao: "Total de Chefes dos Sonhos Derrotados",
    progresso: document.getElementById("progresso-chefes-sonhos")
  },
  "Itens": {
    prefixo: "equipment",
    pasta: listaIt,
    nomeExibicao: "Total de Habilidades coletadas",
    progresso: document.getElementById("progresso-itens")
  },
  "Magia": {
    prefixo: "spells",
    pasta: listaMag,
    nomeExibicao: "Total de Magias coletadas",
    progresso: document.getElementById("progresso-magias")
  },
  "Outros": {
    prefixo: "outher",
    pasta: listaOu,
    nomeExibicao: "Total de Derivados coletados",
    progresso: document.getElementById("progresso-outros")
  },
  "FerraoSon": {
    prefixo: "dreamNail",
    pasta: listaFS,
    nomeExibicao: "Total de Ferrões dos Sonhos concluídos",
    progresso: document.getElementById("progresso-ferraoSon")
  },
  "Sonhadores": {
    prefixo: "dreamer",
    pasta: listaSon,
    nomeExibicao: "Total de Sonhadores Derrotados",
    progresso: document.getElementById("progresso-sonhadores")
  },
  "Mascaras": {
    prefixo: "mask",
    pasta: listaMas,
    nomeExibicao: "Total de Fragmentos de Máscara Coletadas",
    progresso: document.getElementById("progresso-mascara")
  },
  "Receptaculo": {
    prefixo: "vessel",
    pasta: listaRe,
    nomeExibicao: "Total de Fragmentos de Receptáculo Coletadas",
    progresso: document.getElementById("progresso-receptaculo")
  },
  "Coliseu": {
    prefixo: "trial",
    pasta: listaCT,
    nomeExibicao: "Total de Provações Completas",
    progresso: document.getElementById("progresso-coliseu")
  },
  "Panteao": {
    prefixo: "pantheon",
    pasta: listaPa,
    nomeExibicao: "Total de Panteões Completos",
    progresso: document.getElementById("progresso-panteoes")
  },
};

itens.forEach((item) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = categorias[item.categoria].prefixo + "-" + item.id;

  const valorSalvo = localStorage.getItem(checkbox.id);
  if (valorSalvo === "true") {
    checkbox.checked = true;
  }

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = item.nome;

  const imagem = document.createElement("img");
  imagem.src = item.imagem;
  imagem.alt = "";
  imagem.addEventListener("error", () => { imagem.src = "imgs/placeholder.webp"; });

  const div = document.createElement("div");
  div.appendChild(checkbox);
  div.appendChild(imagem);
  div.appendChild(label);
  div.className = "itens";

  categorias[item.categoria].pasta.appendChild(div);

  checkbox.addEventListener("change", (event) => {
    save(event);
    atualizarProgresso();
  });
});

atualizarProgresso();

function atualizarProgresso() {
  const progressos = document.getElementById("progresso");

  const totalGeral = calcularProgresso();
  progressos.textContent = `Total para a conclusão: ${totalGeral.quantidadeMarcada}/${totalGeral.quantidadeTotal} | ${totalGeral.porcentagem}%`;

  for (const nomeCategoria in categorias) {
    const config = categorias[nomeCategoria];
    const dados = calcularProgresso(nomeCategoria);
    config.progresso.textContent = `${config.nomeExibicao}: ${dados.quantidadeMarcada}/${dados.quantidadeTotal} | ${dados.porcentagem}%`;
  }
}

function calcularProgresso(categoria) {
  const itensDaCategoria = categoria === undefined
    ? itens
    : itens.filter(item => item.categoria === categoria);

  const itensMarcados = itensDaCategoria.filter(item => {
    const prefixo = categorias[item.categoria].prefixo;
    return localStorage.getItem(prefixo + "-" + item.id) === "true";
  });

  const quantidadeTotal = itensDaCategoria.length;
  const quantidadeMarcada = itensMarcados.length;

  const valorTotal = itensDaCategoria.reduce((soma, item) => soma + item.valor, 0);
  const valorMarcado = itensMarcados.reduce((soma, item) => soma + item.valor, 0);

  const porcentagem = (valorMarcado / valorTotal) * 100;

  return {
    quantidadeMarcada: quantidadeMarcada,
    quantidadeTotal: quantidadeTotal,
    valorMarcado: valorMarcado.toFixed(0),
    valorTotal: valorTotal.toFixed(0),
    porcentagem: porcentagem.toFixed(0)
  };
}

function save(event) {
  localStorage.setItem(event.target.id, event.target.checked);
}