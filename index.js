class Producto {
    constructor(foto, nombre, descripcion, precio) {
      this.foto = foto;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  
  const productos = [
    new Producto("images/imgA.jpeg", "Producto 1", "Descripción 1", 100),
    new Producto("images/imgB.jpeg", "Producto 2", "Descripción 2", 200),
    new Producto("images/imgC.jpeg", "Producto 3", "Descripción 3", 300),
    new Producto("images/imgD.jpeg", "Producto 4", "Descripción 4", 400),
    new Producto("images/imgE.jpeg", "Producto 5", "Descripción 5", 200),
    new Producto("images/imgF.jpeg", "Producto 6", "Descripción 6", 700),
    new Producto("images/imgG.jpeg", "Producto 7", "Descripción 7", 1000),
    new Producto("images/imgH.jpeg", "Producto 8", "Descripción 8", 500),
    new Producto("images/imgI.jpeg", "Producto 9", "Descripción 9", 300)
  ];

  var containerProducto = document.getElementById("container-producto")

  for (let i = 0; i < productos.length; i++) {
    
    let divproducto = document.createElement("div")
    divproducto.classList.add("card")
    
    let imagen = document.createElement("img")
    imagen.setAttribute("src",productos[i].foto)
    divproducto.append(imagen)

    let informacion = document.createElement("div")
    informacion.classList.add("informacion")
    
    let h1 = document.createTextNode(productos[i].nombre)
    informacion.appendChild(h1)
    divproducto.appendChild(informacion)

    let precio = document.createTextNode(`$ ${productos[i].precio}`)
    informacion.appendChild(precio)
    divproducto.appendChild(precio)


    let comprar = document.createElement("button")
    comprar.innerHTML = "comprar"
    
    comprar.addEventListener("click", (e)=>{
      e.preventDefault()
      console.log (`compraste  ${productos[i].nombre} a $ ${productos[i].precio}`)
    }

    )

    divproducto.appendChild(comprar)



    containerProducto.appendChild(divproducto)
  }