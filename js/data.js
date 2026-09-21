const itens = [
  { id: 1, nome: "Bússola Caprichosa", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-1.png" },
  { id: 2, nome: "Enxame de Colecionadores", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-2.png" },
  { id: 3, nome: "Carapaça Robusta", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-3.png" },
  { id: 4, nome: "Apanhador de Almas", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-4.png" },
  { id: 5, nome: "Pedra do Xamã", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-5.png" },
  { id: 6, nome: "Devorador de Almas", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-6.png" },
  { id: 7, nome: "Mestre da Esquiva", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-7.png" },
  { id: 8, nome: "Mestre da Corrida", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-8.png" },
  { id: 9, nome: "Canção das Larvas", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-9.png" },
  { id: 10, nome: "Elegia da Larvamosca", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-10.png" },
  { id: 11, nome: "Coração Frágil", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-11.png" },
  { id: 12, nome: "Ganância Frágil", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-12.png" },
  { id: 13, nome: "Força Frágil", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-13.png" },
  { id: 14, nome: "Dobrador de Magias", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-14.png" },
  { id: 15, nome: "Corpo Firme", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-15.png" },
  { id: 16, nome: "Golpe Pesado", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-16.png" },
  { id: 17, nome: "Corte Rápido", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-17.png" },
  { id: 18, nome: "Ferrão Longo", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-18.png" },
  { id: 19, nome: "Marca de Orgulho", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-19.png" },
  { id: 20, nome: "Fúria dos Caídos", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-20.png" },
  { id: 21, nome: "Espinhos da Agonia", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-21.png" },
  { id: 22, nome: "Carapaça de Baldur", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-22.png" },
  { id: 23, nome: "Ninho de Flukes", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-23.png" },
  { id: 24, nome: "Insígnia do Defensor", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-24.png" },
  { id: 25, nome: "Útero Brilhante", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-25.png" },
  { id: 26, nome: "Foco Rápido", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-26.png" },
  { id: 27, nome: "Foco Profundo", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-27.png" },
  { id: 28, nome: "Coração de Sangue Vital", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-28.png" },
  { id: 29, nome: "Núcleo de Sangue Vital", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-29.png" },
  { id: 30, nome: "Bênção de Joni", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-30.png" },
  { id: 31, nome: "Sangue da Colmeia", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-31.png" },
  { id: 32, nome: "Cogumelo com Esporos", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-32.png" },
  { id: 33, nome: "Sombra Afiada", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-33.png" },
  { id: 34, nome: "Forma de Unn", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-34.png" },
  { id: 35, nome: "Glória do Mestre do Ferrão", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-35.png" },
  { id: 36, nome: "Canção das Tecelãs", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-36.png" },
  { id: 37, nome: "Portador dos Sonhos", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-37.png" },
  { id: 38, nome: "Escudo dos Sonhos", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-38.png" },
  { id: 39, nome: "Criança Grimm", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-39.png" },
  { id: 40, nome: "Alma do Rei", categoria: "Amuletos", valor: 1, imagem: "imgs/charm-40.png" },


  // ---------- Ferrões ----------
  { id: 41, nome: "Ferrão Afiado", categoria: "FerraoUp", valor: 1, imagem: "imgs/nail-41.webp" },
  { id: 42, nome: "Ferrão Canalizado", categoria: "FerraoUp", valor: 1, imagem: "imgs/nail-42.webp" },
  { id: 43, nome: "Ferrão Serpenteado", categoria: "FerraoUp", valor: 1, imagem: "imgs/nail-43.webp" },
  { id: 44, nome: "Ferrão Puro", categoria: "FerraoUp", valor: 1, imagem: "imgs/nail-44.webp" },


  // ---------- Arte do Ferrão ----------
  { id: 45, nome: "Corte Ciclone", categoria: "FerraoArt", valor: 1, imagem: "imgs/nailArt-45.webp" },
  { id: 46, nome: "Corte Impulsionado", categoria: "FerraoArt", valor: 1, imagem: "imgs/nailArt-46.webp" },
  { id: 47, nome: "Grande Corte", categoria: "FerraoArt", valor: 1, imagem: "imgs/nailArt-47.webp" },


  // ---------- Chefes ----------
  { id: 48, nome: "Falso Cavaleiro", categoria: "Chefes", valor: 1, imagem: "imgs/boss-48.webp" },
  { id: 49, nome: "Mãe Mosca", categoria: "Chefes", valor: 1, imagem: "imgs/boss-49.webp" },
  { id: 50, nome: "Hornet Protetora", categoria: "Chefes", valor: 1, imagem: "imgs/boss-50.webp" },
  { id: 51, nome: "Hornet Sentinela (Borda do Reino)", categoria: "Chefes", valor: 1, imagem: "imgs/boss-51.webp" },
  { id: 52, nome: "Mawlek Incubador", categoria: "Chefes", valor: 1, imagem: "imgs/boss-52.webp" },
  { id: 53, nome: "Mestre das Almas", categoria: "Chefes", valor: 1, imagem: "imgs/boss-53.webp" },
  { id: 54, nome: "Lordes Louva-a-Deus", categoria: "Chefes", valor: 1, imagem: "imgs/boss-54.webp" },
  { id: 55, nome: "Defensor do Esterco", categoria: "Chefes", valor: 1, imagem: "imgs/boss-55.webp" },
  { id: 56, nome: "Cavaleiro da Colmeia", categoria: "Chefes", valor: 1, imagem: "imgs/boss-56.webp" },
  { id: 57, nome: "Nosk", categoria: "Chefes", valor: 1, imagem: "imgs/boss-57.webp" },
  { id: 58, nome: "Receptáculo Quebrado", categoria: "Chefes", valor: 1, imagem: "imgs/boss-58.webp" },
  { id: 59, nome: "Uumuu", categoria: "Chefes", valor: 1, imagem: "imgs/boss-59.webp" },
  { id: 60, nome: "Cavaleiro Sentinela", categoria: "Chefes", valor: 1, imagem: "imgs/boss-60.webp" },
  { id: 61, nome: "O Colecionador", categoria: "Chefes", valor: 1, imagem: "imgs/boss-61.webp" },
  { id: 62, nome: "Lorde Traidor", categoria: "Chefes", valor: 1, imagem: "imgs/boss-62.webp" },
  { id: 63, nome: "Grimm", categoria: "Chefes", valor: 1, imagem: "imgs/boss-63.webp" },
  { id: 64, nome: "Rei do Pesadelo", categoria: "Chefes", valor: 1, imagem: "imgs/boss-64.webp" },


  // ---------- Guerreiros dos Sonhos ----------
  { id: 65, nome: "Xero", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-65.webp" },
  { id: 66, nome: "Gorb", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-66.webp" },
  { id: 67, nome: "Ancião Hu", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-67.webp" },
  { id: 68, nome: "Marmu", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-68.webp" },
  { id: 69, nome: "Sem Olhos", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-69.webp" },
  { id: 70, nome: "Galien", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-70.webp" },
  { id: 71, nome: "Markoth", categoria: "Chefes dos Sonhos", valor: 1, imagem: "imgs/boss-71.webp" },


  // ---------- Habilidades ----------
  { id: 72, nome: "Manto de Asa de Mariposa", categoria: "Itens", valor: 2, imagem: "imgs/item-72.webp" },
  { id: 73, nome: "Manto Sombrio", categoria: "Itens", valor: 2, imagem: "imgs/item-73.webp" },
  { id: 74, nome: "Asas do Monarca", categoria: "Itens", valor: 2, imagem: "imgs/item-74.webp" },
  { id: 75, nome: "Garra de Louva-a-Deus", categoria: "Itens", valor: 2, imagem: "imgs/item-75.webp" },
  { id: 76, nome: "Coração de Cristal", categoria: "Itens", valor: 2, imagem: "imgs/item-76.webp" },
  { id: 77, nome: "Lágrima de Isma", categoria: "Itens", valor: 2, imagem: "imgs/item-77.webp" },


  // ---------- Outros ----------
  { id: 78, nome: "Marca do Rei", categoria: "Outros", valor: 2, imagem: "imgs/item-78.webp" },
  { id: 79, nome: "Sintonizador de Deuses", categoria: "Outros", valor: 1, imagem: "imgs/item-79.webp" },


  // ---------- Magias ----------
  { id: 80, nome: "Espírito Vingativo", categoria: "Magia", valor: 1, imagem: "imgs/spells-80.webp" },
  { id: 83, nome: "Alma Sombria", categoria: "Magia", valor: 1, imagem: "imgs/spells-83.webp" },
  { id: 81, nome: "Mergulho Desolador", categoria: "Magia", valor: 1, imagem: "imgs/spells-81.webp" },
  { id: 84, nome: "Escuridão Descente", categoria: "Magia", valor: 1, imagem: "imgs/spells-84.webp" },
  { id: 82, nome: "Espectros Uivantes", categoria: "Magia", valor: 1, imagem: "imgs/spells-82.webp" },
  { id: 85, nome: "Grito do Abismo", categoria: "Magia", valor: 1, imagem: "imgs/spells-85.webp" },


  // ---------- Ferrão dos Sonhos ----------
  { id: 86, nome: "Ferrão dos Sonhos", categoria: "FerraoSon", valor: 1, imagem: "imgs/dreamNail-86.webp" },
  { id: 87, nome: "Ferrão dos Sonhos Despertado", categoria: "FerraoSon", valor: 1, imagem: "imgs/dreamNail-87.webp" },
  { id: 88, nome: "Ascensão", categoria: "FerraoSon", valor: 1, imagem: "imgs/dreamNail-88.png" },


  // ---------- Sonhadores ----------
  { id: 89, nome: "Monomon a Professora", categoria: "Sonhadores", valor: 1, imagem: "imgs/dreamer-89.png" },
  { id: 90, nome: "Lurien o Observador", categoria: "Sonhadores", valor: 1, imagem: "imgs/dreamer-90.png" },
  { id: 91, nome: "Herrah a Besta", categoria: "Sonhadores", valor: 1, imagem: "imgs/dreamer-91.png" },


  // ---------- Mascaras ----------
  { id: 92, nome: "Sly 1", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 93, nome: "Sly 2", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 94, nome: "Sly 3", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 95, nome: "Sly 4", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 96, nome: "Bretta", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 97, nome: "5 Larvas", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 98, nome: "Encruzilhada Esquecida", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 99, nome: "Estação da Rainha", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 100, nome: "Guardião Enfurecido", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 101, nome: "Vidente", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 102, nome: "Flor Delicada", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 103, nome: "Hidrovia Real", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 104, nome: "Santuário de Pedra", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 105, nome: "Mawlek Incubador", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 106, nome: "Ninho Profundo", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },
  { id: 107, nome: "A Comeia", categoria: "Mascaras", valor: 0.25, imagem: "imgs/mask-92.png" },


  // ---------- Receptáculos ----------
  { id: 108, nome: "Sly 1", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 109, nome: "Sly 2", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 110, nome: "Encruzilhada Esquecida", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 111, nome: "Caminho Verde", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 112, nome: "Cidade das Lágrimas", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 113, nome: "Terra do Repouso", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 114, nome: "Ninho dos Besouros", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 115, nome: "Ninho Profundo", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },
  { id: 116, nome: "Bacia Antiga", categoria: "Receptaculo", valor: 0.33, imagem: "imgs/vessel-93.png" },


  // ---------- Provações ----------
  { id: 117, nome: "Provação do Guerreiro", categoria: "Coliseu", valor: 1, imagem: "imgs/trial-117.webp" },
  { id: 118, nome: "Provação do Conquistador", categoria: "Coliseu", valor: 1, imagem: "imgs/trial-118.webp" },
  { id: 119, nome: "Provação do Tolo", categoria: "Coliseu", valor: 1, imagem: "imgs/trial-119.webp" },


  // ---------- Panteões ----------
  { id: 120, nome: "Panteão do Mestre", categoria: "Panteao", valor: 1, imagem: "imgs/pantheon-120.webp" },
  { id: 121, nome: "Panteão do Artista", categoria: "Panteao", valor: 1, imagem: "imgs/pantheon-121.webp" },
  { id: 122, nome: "Panteão do Sábio", categoria: "Panteao", valor: 1, imagem: "imgs/pantheon-122.webp" },
  { id: 123, nome: "Panteão do Cavaleiro", categoria: "Panteao", valor: 1, imagem: "imgs/pantheon-123.webp" }
];