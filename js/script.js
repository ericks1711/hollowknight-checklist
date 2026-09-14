const listas = document.getElementById("listas");
const listaAm = document.getElementById("lista-amuleto");
const listaFe = document.getElementById("lista-ferrao");
const listaCh = document.getElementById("lista-chefes");
const listaCS = document.getElementById("lista-chefes-sonhos");
const listaIt = document.getElementById("lista-itens");
itens.forEach((item) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  if (item.categoria === "Amuletos") {
    checkbox.id = "charm-" + item.id;
  } else if (item.categoria === "FerraoUp") {
    checkbox.id = "nail-" + item.id;
  } else if (item.categoria === "Chefes") {
    checkbox.id = "boss-" + item.id;
  } else if (item.categoria === "Chefes dos Sonhos") {
    checkbox.id = "warrior-" + item.id;
  } else if (item.categoria === "Itens") {
    checkbox.id = "equipment-" + item.id;
  }
  const valorSalvo = localStorage.getItem(checkbox.id);

  if (valorSalvo === "true") {
    checkbox.checked = true;
  }

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = item.nome;

  const imagem = document.createElement("img");
  imagem.src = item.imagem;
  imagem.alt = "" /*nn precisa de nome, ja tem o label embaixo*/
  imagem.addEventListener("error", () => { imagem.src = "imgs/placeholder.webp"; });

  const div = document.createElement("div");
  div.appendChild(checkbox);
  div.appendChild(imagem);
  div.appendChild(label);
  div.className = "itens"

  if (item.categoria === "Amuletos") {
    listaAm.appendChild(div);
  } else if (item.categoria === "FerraoUp") {
    listaFe.appendChild(div);
  } else if (item.categoria === "Chefes") {
    listaCh.appendChild(div);
  } else if (item.categoria === "Chefes dos Sonhos") {
    listaCS.appendChild(div);
  } else if (item.categoria === "Itens") {
    listaIt.appendChild(div);
  }
  checkbox.addEventListener("change", (event) => {
    save(event);
    atualizarProgresso();
  });
});
atualizarProgresso();
function atualizarProgresso() {
  //Ids
  const progresso = document.getElementById("progresso");
  const progressoAmuletos = document.getElementById("progresso-amuletos");
  const progressoFerrao = document.getElementById("progresso-ferrao");
  const progressoChefes = document.getElementById("progresso-chefes");
  const progressoChefesSonhos = document.getElementById("progresso-chefes-sonhos");
  const progressoItens = document.getElementById("progresso-itens");

  //Amuletos
  const dadosAmuletos = calcularProgresso(listaAm, "Amuletos");
  progressoAmuletos.textContent = `Total de Amuletos: ${dadosAmuletos.marcados}/${dadosAmuletos.total} | ${dadosAmuletos.porcentagem}%`;

  //Ferrão
  const dadosFerraoUp = calcularProgresso(listaFe, "FerraoUp")
  progressoFerrao.textContent = `Total de Upgrades no Ferrão: ${dadosFerraoUp.marcados}/${dadosFerraoUp.total} | ${dadosFerraoUp.porcentagem}%`;

  //Chefes
  const dadosChefes = calcularProgresso(listaCh, "Chefes")
  progressoChefes.textContent = `Total de Chefes Derrotados: ${dadosChefes.marcados}/${dadosChefes.total} | ${dadosChefes.porcentagem}%`;

  //Chefes dos Sonhos
  const dadosChefesSonhos = calcularProgresso(listaCS, "Chefes dos Sonhos")
  progressoChefesSonhos.textContent = `Total de Chefes dos Sonhos Derrotados: ${dadosChefesSonhos.marcados}/${dadosChefesSonhos.total} | ${dadosChefesSonhos.porcentagem}%`;

  //Itens
  const dadosItens = calcularProgresso(listaIt, "Itens")
  progressoItens.textContent = `Total de Equipamentos coletados: ${dadosItens.marcados}/${dadosItens.total} | ${dadosItens.porcentagem}%`;

  //Total
  const totalMarcados = calcularProgresso(listas)
  progresso.textContent = `Total para a conclusão: ${totalMarcados.marcados}/${totalMarcados.total} | ${totalMarcados.porcentagem}%`;
}
function calcularProgresso(elementoLista, categoria) {
  const marcados = elementoLista.querySelectorAll('input[type="checkbox"]:checked');
  let total;
  if (categoria === undefined) {
    total = itens.length
  } else {
    total = itens.filter(item => item.categoria === categoria).length;
  }
  const porcentagem = (marcados.length / total) * 100;

  return {
    marcados: marcados.length,
    total: total,
    porcentagem: porcentagem.toFixed(0)
  };
}
function save(event) {
  localStorage.setItem(event.target.id, event.target.checked);
}