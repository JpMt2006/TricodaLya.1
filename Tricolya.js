// MENU TOGGLE
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// SCROLL VENDA
function scrollVenda(direction) {
  const container = document.getElementById("vendaScroll");
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

//Peças
function scrollGaleria(direction) {
  const container = document.getElementById("galeriaScroll");
  const item = container.querySelector(".item:not(.hidden)");
  const itemWidth = item ? item.offsetWidth + 20 : 220;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (direction === 1) {
    // Se estiver no final, volta para o início
    if (Math.ceil(container.scrollLeft + itemWidth) >= maxScrollLeft) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  } else {
    container.scrollBy({ left: -itemWidth, behavior: "smooth" });
  }
}

const botoes = document.querySelectorAll(".filtro-btn");
const container = document.getElementById("galeriaScroll");

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    const categoria = btn.dataset.categoria;
    const itens = container.querySelectorAll(".item");

    itens.forEach(item => {
      const cat = item.dataset.categoria;
      if (categoria === "todos" || cat === categoria) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    container.scrollLeft = 0;
  });
});

function adicionarNovoProjeto(url, categoria) {
  const novo = document.createElement("div");
  novo.classList.add("item");
  novo.setAttribute("data-categoria", categoria);
  novo.innerHTML = `<img src="${url}" alt="Novo Projeto" />`;
  document.getElementById("galeriaScroll").appendChild(novo);
}

function abrirModal(src) {
const modal = document.getElementById("imagemModal");
const modalImg = document.getElementById("imagemModalConteudo");
modal.style.display = "block";
modalImg.src = src;
}

function fecharModal() {
document.getElementById("imagemModal").style.display = "none";
}

document.querySelectorAll(".galeria-scroll img").forEach(img => {
img.addEventListener("click", () => abrirModal(img.src));
});

let zoomAtivo = false;

const modalImg = document.getElementById("imagemModalConteudo");

modalImg.addEventListener("dblclick", () => {
if (zoomAtivo) {
modalImg.style.transform = "scale(1)";
modalImg.style.cursor = "zoom-in";
} else {
modalImg.style.transform = "scale(2)";
modalImg.style.cursor = "zoom-out";
}
zoomAtivo = !zoomAtivo;
});

// Mostrar o botão ao rolar
window.onscroll = () => {
  const btn = document.getElementById("btnTopo");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Rolar suavemente para o topo
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
//Loja
function scrollVenda(direction) {
  const container = document.getElementById("vendaScroll");
  const card = container.querySelector(".venda-card");
  const cardWidth = card ? card.offsetWidth + 20 : 220;
  container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
}

function abrirDetalhes(titulo, descricao, preco, imagem) {
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalDescricao").innerText = descricao;
  document.getElementById("modalPreco").innerText = preco;
  document.getElementById("modalImg").src = imagem;
  document.getElementById("detalheModal").style.display = "flex";
}

function fecharDetalhes() {
  document.getElementById("detalheModal").style.display = "none";
}
