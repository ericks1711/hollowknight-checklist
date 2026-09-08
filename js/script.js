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
  const amuletosMarcados = listaAm.querySelectorAll('input[type="checkbox"]:checked');
  const totalAmuletos = itens.filter(item => item.categoria === "Amuletos").length;
  const porcentagemAmuletos = (amuletosMarcados.length / totalAmuletos) * 100;
  progressoAmuletos.textContent = `Total de Amuletos: ${amuletosMarcados.length}/${totalAmuletos} | ${porcentagemAmuletos.toFixed(0)}%`;
  
  //Ferrão
  const ferraoUpMarcados = listaFe.querySelectorAll('input[type="checkbox"]:checked');
  const totalFerraoUp = itens.filter(item => item.categoria === "Ferrao").length;
  const porcentagemFerraoUp = (ferraoUpMarcados.length / totalFerraoUp) * 100;
  progressoFerrao.textContent = `Total de Upgrades no Ferrão: ${ferraoUpMarcados.length}/${totalFerraoUp} | ${porcentagemFerraoUp.toFixed(0)}%`;
  
  //Total
  const totalMarcados = progressoT.querySelectorAll('input[type="checkbox"]:checked');
  const totalItens = totalAmuletos + totalFerraoUp;
  const porcentagemConclusao = (totalMarcados.length / totalItens) * 100;
  progresso.textContent = `Total para a coclusão: ${totalMarcados.length}/${totalItens} | ${porcentagemConclusao.toFixed(0)}%`;
}
function save(event) {
  localStorage.setItem(event.target.id, event.target.checked);
}