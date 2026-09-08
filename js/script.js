const progressoT = document.getElementById("listas");
const listaAm = document.getElementById("lista-amuleto");
const listaFe = document.getElementById("lista-ferrao");
itens.forEach((item) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  if (item.categoria === "Amuletos") {
    checkbox.id = "charm-" + item.id;
  } else {
    checkbox.id = "nail-" + item.id;
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

  const div = document.createElement("div");
  div.appendChild(checkbox);
  div.appendChild(imagem);
  div.appendChild(label);

  if (item.categoria === "Amuletos") {
    listaAm.appendChild(div);
  } else {
    listaFe.appendChild(div);
  }
  checkbox.addEventListener("change", atualizarProgresso);

  checkbox.addEventListener("change", save);

});
atualizarProgresso();
function atualizarProgresso() {
  //Ids
  const progresso = document.getElementById("progresso");
  const progressoAmuletos = document.getElementById("progresso-amuletos");
  const progressoFerrao = document.getElementById("progresso-ferrao");

  //Amuletos
  const dadosAmuletos = calcularProgresso(listaAm, "Amuletos");
  progressoAmuletos.textContent = `Total de Amuletos: ${dadosAmuletos.marcados}/${dadosAmuletos.total} | ${dadosAmuletos.porcentagem}%`;
  
  //Ferrão
  const dadosFerraoUp = calcularProgresso(listaFe, "Ferrao")
  progressoFerrao.textContent = `Total de Upgrades no Ferrão: ${dadosFerraoUp.marcados}/${dadosFerraoUp.total} | ${dadosFerraoUp.porcentagem}%`;
  
  //Total
  const totalMarcados = calcularProgresso(progressoT)
  progresso.textContent = `Total para a coclusão: ${totalMarcados.marcados}/${totalMarcados.total} | ${totalMarcados.porcentagem}%`;
}
function save(event) {
  localStorage.setItem(event.target.id, event.target.checked);
}
function calcularProgresso(elementoLista, categoria) {
  const marcados = elementoLista.querySelectorAll('input[type="checkbox"]:checked');
  let total;
  if (categoria === undefined) {
    total = itens.length
  }else{
    total = itens.filter(item => item.categoria === categoria).length;
  }
  const porcentagem = (marcados.length / total) * 100;

  return {
    marcados: marcados.length,
    total: total,
    porcentagem: porcentagem.toFixed(0)
  };
}