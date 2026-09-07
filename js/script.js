const listaEl = document.getElementById("checklist");
charms.forEach((charm) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "charm-" + charm.id;

  const label = document.createElement("label")
  label.htmlFor = checkbox.id
  label.textContent = charm.nome;

  const item = document.createElement("div");
  item.appendChild(checkbox);
  item.appendChild(label);

  listaEl.appendChild(item)
  checkbox.addEventListener("change", AmuletosV)
});
function AmuletosV() {
  let numAmuletos = listaEl.querySelectorAll('input[type="checkbox"]:checked').length;
}
