const listaEl = document.getElementById("checklist");
charms.forEach((charm) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "charm-" + charm.id;

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = charm.nome;
  
  const imagem = document.createElement("img");
  imagem.src = charm.imagem;
  
  const item = document.createElement("div");
  item.appendChild(checkbox);
  item.appendChild(imagem);
  item.appendChild(label);

  listaEl.appendChild(item);
  checkbox.addEventListener("change", AmuletosV);
});
AmuletosV();
function AmuletosV() {
  const marcados = listaEl.querySelectorAll('input[type="checkbox"]:checked');
  const progresso = document.getElementById("progresso");
  progresso.textContent = `${marcados.length}/${charms.length}`;
}
