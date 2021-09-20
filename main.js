const datos = [{
    nombre:"",
    img: "",
    imgAlt:"",
    precio:"",
},{
    nombre:"",
    img: "",
    imgAlt:"",
    precio:"",
},{
    nombre:"",
    img: "",
    imgAlt:"",
    precio:"",
},{
    nombre:"",
    img: "",
    imgAlt:"",
    precio:"",
}
]




const navIconContainer = document.querySelector(".iconContainer")
const aContainer = document.querySelector(".aContainer")
const navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})