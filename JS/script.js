const listaProductos = document.querySelector("#lista-de-productos");
let productos;

const listaDeProductos = async () => {
  listaProductos.innerHTML = "";

  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("json/productos.json");
    productos = await response.json();

    localStorage.setItem("productos", JSON.stringify(productos));
  }

  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }

  productos.forEach(cargarProductos);
};

const cargarProductos = (product) => {
  const itemHtml = `
    <div class="card">
        <h3>${product.nombre}</h3>
        <p class="descripcion">${product.descripcion}</p>
        <p class="precio">  ${product.precio}</p>
        <button class="verProducto" id="${product.id}">Ver producto</button>
    </div>
  `;

  listaProductos.innerHTML += itemHtml;
};

listaDeProductos();

document.addEventListener("click", (event) => {
  if (event.target.id){
    sessionStorage.setItem("id", event.target.id);
    window.location = "producto.html";
  }
  });

  function mostrarEstrellas (estrellas) {
    const estrellasLlenas = estrellas.length;
    const estrellasVacias = 5 - estrellasLlenas;

const estrellasHTML = '<p class="estrella-llena">⭐</p>'.repeat(estrellasLlenas) +
'<p class="estrella-vacia">⭐</p>'.repeat(estrellasVacias);

return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
};