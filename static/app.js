
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let so = document.getElementById("so");
crearBarra(so);
let java = document.getElementById("java");
crearBarra(java);
let python = document.getElementById("python");
crearBarra(python);
let mantenimiento = document.getElementById("mantenimiento");
crearBarra(mantenimiento);
let database = document.getElementById("database");
crearBarra(database);
let ai = document.getElementById("ai");
crearBarra(ai);
let mo = document.getElementById("mo");
crearBarra(mo);
let ps = document.getElementById("ps");
crearBarra(ps);



let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];

let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalso = setInterval(function(){
            pintarBarra(so, 9, 0, intervalso);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 6, 1, intervalJava);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 6, 2, intervalPython);
        },100);
        const intervalmante = setInterval(function(){
            pintarBarra(mantenimiento, 16, 3, intervalmante);
        },100);
        const intervaldata = setInterval(function(){
            pintarBarra(database, 6, 4, intervaldata);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ai, 9, 5, intervalIlustrator);
        },100);
        const intervalmo = setInterval(function(){
            pintarBarra(mo, 9, 6, intervalmo);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(ps, 7, 7, intervalPhotoshop);
        },100);
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#0DA90F";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}