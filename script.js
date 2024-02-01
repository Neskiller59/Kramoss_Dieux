"use strict"
const item = document.querySelectorAll(".item")
// const vie = document.querySelector('.item1')
// const mort = document.querySelector('.item2')
// const espace = document.querySelector('.item3')
// const sang1 = document.querySelector('.item4')
// const renaissance = document.querySelector('.item5')
// const espoir = document.querySelector('.item6')
// const jeux = document.querySelector('.item7')
// const guerre = document.querySelector('.item8')
// const poison = document.querySelector('.item9')
// const justice = document.querySelector('.item10')
// const equite = document.querySelector('.item11')
// const festivite = document.querySelector('.item12')
// const artisanat = document.querySelector('.item13')
// const destruction = document.querySelector('.item14')
// const passion = document.querySelector('.item15')
// const reve = document.querySelector('.item16')
// const clairevoyance = document.querySelector('.item17')
// const savoir = document.querySelector('.item18')
// const or = document.querySelector('.item19')
// const sang2= document.querySelector('.item20')
// const feu = document.querySelector('.item21')
// const vent = document.querySelector('.item22')
// const eau = document.querySelector('.item23')
// const murmure = document.querySelector('.item24')
// const arc = document.querySelector('.item25')
// const terre = document.querySelector('.item26')
// const foret = document.querySelector('.item27')
// const conquete = document.querySelector('.item28')
// const desert = document.querySelector('.item29')
// const sang3 = document.querySelector('.item30')
var reloads = document.querySelector("#reload")
const p = document.querySelector("p")
const img = document.querySelectorAll("img")
let x = Math.floor(Math.random()*30);
var storage = sessionStorage.getItem("god")

reloads.addEventListener("click", reload)
reload(); 
function reload() {
if (storage) {
    x = storage
    sessionStorage.removeItem("god")
    storage = undefined;
    console.log(storage);
}else{
    item[x].style.display = "";
    x = Math.floor(Math.random()*30);
}
sessionStorage.setItem("god",x); 

 console.log(x);
item[x].style.display = "flex";



// if (x==1) {
//     console.log("Erictus,Dieu de la vie/lumiére");
//     vie.style.display = "flex"
// }
// if (x==2) {
//     console.log("Maria,Déesse de la mort/ténébres");
//     mort.style.display = "flex"
// }
// if (x==3) {
//     console.log("Xénoverse,Déesse de l'espace");
//     espace.style.display = "flex"
// }
// if (x==4) {
//     console.log("Neivi'hana,Déesse du sang/être de sang");
//     sang1.style.display = "flex"
// }
// if (x==5) {
//     console.log("Aphi,Déesse de la Renaissance");
//     renaissance.style.display = "flex"
// }
// if (x==6) {
//     console.log("Virgo,Déesse de l'espoir/de la détermination");
//     espoir.style.display = "flex"
// }
// if (x==7) {
//     console.log("Azuri,Déesse du jeux/farce");
//     jeux.style.display = "flex"
// }
// if (x==8) { 
//     console.log("Hisanagi,Dieu de la guerre/bataille");
//     guerre.style.display = "flex"
// }
// if (x==9) {
//     console.log("Miserie,Déesse du poison");
//     poison.style.display = "flex"
// }
// if (x==10) {
//     console.log("Aurore,Déesse de la justice/pureté");
//     justice.style.display = "flex"
// }
// if (x==11) {
//     console.log("Crépuscule,Déesse de l'équité/compassion");
//     equite.style.display = "flex"
// }
// if (x==12) {
//     console.log("Mirai,Déesse de la festivité");
//     festivite.style.display = "flex"
// }
// if (x==13) {
//     console.log("Lydia,Déesse de l'artisanat");
//     artisanat.style.display = "flex"
// }
// if (x==14) {
//     console.log("Farfenlis,Dieu de la destruction");
//     destruction.style.display = "flex"
// }
// if (x==15) {
//     console.log("Camphie,Déesse de la passion");
//     passion.style.display = "flex"
// }
// if (x==16) {
//     console.log("Yami et Malicia, Dieu des cauchemars et Déesse des rêves");
//     reve.style.display = "flex"
// }
// if (x==17) {
//     console.log("Koven,Déesse de la clairevoyance");
//     clairevoyance.style.display = "flex"
// }
// if (x==18) {
//     console.log("Lucarist,Déesse du Savoir");
//     savoir.style.display = "flex"
// }
// if (x==19) {
//     console.log("Mammon,Dieu de l'or");
//     or.style.display = "flex"
// }
// if (x==20) {
//     console.log("Nurolox,Dieu du sang/Art du sang");
//     sang2.style.display = "flex"
// }
// if (x==21) {
//     console.log("Yamar,Dieu du feu");
//     feu.style.display = "flex"
// }
// if (x==22) {
//     console.log("Ono,Dieu du vent");
//     vent.style.display = "flex"
// }
// if (x==23) {
//     console.log("Miwa,Déesse de l'eau");
//     eau.style.display = "flex"
// }
// if (x==24) {
//     console.log("Sémiramis,Déesse des mumures");
//     murmure.style.display = "flex"
// }
// if (x==25) {
//     console.log("Alenjendro,Dieu de l'arc en ciel");
//     arc.style.display = "flex"
// }
// if (x==26) {
//     console.log("Martoho,Dieu de la terre");
//     terre.style.display = "flex"
// }
// if (x==27) {
//     console.log("Fea,Déesse de la foret et de la flaure");
//     foret.style.display = "flex"
// }
// if (x==28) {
//     console.log("Vanilla,Déesse de la conquête");
//     conquete.style.display = "flex"
// }
// if (x==29) {
//     console.log("Famira,Déesse du désert");
//     desert.style.display = "flex"
// }
// if (x==30) {
//     console.log("Arbre du sang,Dieu du sang/lien du sang");
//     sang3.style.display = "flex"
// }
}

img.forEach((image) => {
    image.addEventListener("click", ()=>{
       if (window.matchMedia("(max-width: 450px)").matches) {
           image.classList.toggle("zoom")
       }
    })
    
});