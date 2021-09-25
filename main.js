const datos = [{
    pregunta:"¿Qué es producción masiva de ropa?",
    img: "media/ProduccionMasiva.jpg",
    imgAlt:"Produccino masiva de prendas",
    Link:"Posters/Produccion.html",
},{
    pregunta:"¿Qué daños puede causar?",
    img: "media/ProduccionMasiva.jpg",
    imgAlt:"Daños",
    Link:"Posters/Daños.html",
},{
    pregunta:"¿Qué es la contaminación?",
    img: "media/QueEsLaContaminacion.jpg",
    imgAlt:"Que es la contaminacion",
    Link:"Posters/Contaminacion.html",
},{
    pregunta:"Cómo nos afecta?",
    img: "media/ComoNosAfecta.jpg",
    imgAlt:"Como nos afecta",
    Link:"Posters/Afecta.html",
},{
    pregunta:"¿Cómo lo podemos evitar?",
    img: "media/TomarIniciativa.jpg",
    imgAlt:"Contaminacion",
    Link:"Posters/Evitar.html",
},{
    pregunta:"Empresas Ecológicas",
    img: "media/marcas.jpg",
    imgAlt:"Empresas ecologicas",
    Link:"Posters/Empresas.html",
}
]

const portadas = document.querySelector(".portadas")

for (dato in datos){
    let info = datos[dato]
    let pregunta = info["pregunta"]
    let imagen = info["img"]
    let imgalt = info["imgAlt"]
    let link = info["Link"]
    
    function htmlCode(){
        let div = document.createElement("div")
        let a1 = document.createElement("a")
        let img = document.createElement("img")
        let a2 = document.createElement("a")
        
        div.className = "portafolio-container"; 

        a1.href = link; //a1.target = "_BLANK"

        img.className = "imagen"; img.src = imagen; img.alt = imgalt;

        a1.appendChild(img)

        a2.className = "pregunta"; a2.href = link; a2.target= "_BLANK"; a2.textContent = pregunta;
        
        div.appendChild(a1)
        div.appendChild(a2)
        portadas.appendChild(div)

        // if (proyecto == 2) {
        //     div.classList.add("rojo")
        //     a2.classList.add("rojo")
        // }
    }
    htmlCode()
}



let navIconContainer = document.querySelector(".iconContainer")
let aContainer = document.querySelector(".aContainer")
let navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})