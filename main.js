const datos = [{
    pregunta:"¿Qué es producción masiva de ropa?",
    img: "media/ProduccionMasiva.jpg",
    imgAlt:"Basurero gigante",
    Link:"",
},{
    pregunta:"¿Qué daños puede causar?",
    img: "media/ProduccionMasiva.jpg",
    imgAlt:"Fast Fashion",
    Link:"",
},{
    pregunta:"¿Qué es la contaminación?",
    img: "media/QueEsLaContaminacion.jpg",
    imgAlt:"Basurero gigante",
    Link:"",
},{
    pregunta:"Cómo nos afecta?",
    img: "media/ComoNosAfecta.jpg",
    imgAlt:"Agua sucia",
    Link:"",
},{
    pregunta:"¿Cómo lo podemos evitar?",
    img: "media/TomarIniciativa.jpg",
    imgAlt:"Replantar arboles",
    Link:"",
}]

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



const navIconContainer = document.querySelector(".iconContainer")
const aContainer = document.querySelector(".aContainer")
const navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})