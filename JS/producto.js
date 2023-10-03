const detalleProducto = sessionStorage.getItem("id");

const productos = JSON.parse(localStorage.getItem("productos"));

const mostrarProducto = document.querySelector("#detalle-producto");


productos.forEach((producto) => {
    if(producto.id == detalleProducto){
    let content = document.createElement("div");
    content.className = "presentacionproducto";
    content.innerHTML = `
        <div>
            <h3 class="name">${producto.nombre}</h3> </div>
        <div class="imagen-descripcion">
            <img class="imagen" src="${producto.imagen}">
            <p class="detalle">${producto.detalle}</p>
        </div>
        <div>
            <p class="precio">${producto.precio}</p>
        </div>
        <div>
        <p>${producto.puntuacion}</p>
        </div>
    `;
    mostrarProducto.append(content);
}
});