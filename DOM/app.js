// let elemento = document;

// elemento = document.body;

// console.log(elemento);

// let elementoId = document.getElementById('TituloDOM');
// console.log(elementoId);

// let elementoId1 = document.getElementById('Contenido');
// console.log(elementoId1);
/*
let opid =document.getElementById('p1');
opid.innerHTML = 'JavaScript';

let opid2 =document.getElementById('p2');
opid2.innerHTML = 'Kotlin';

let opid3 =document.getElementById('p3');
opid3.innerHTML = 'C++';

let elementoclase = document.getElementsByClassName('listas');
console.log(elementoclase);
*/

/*
let elementoTag = document.getElementsByTagName('p');
console.log(elementoTag);

*/


// let elementoQ = document.querySelector('ul');
/*
console.log(elementoQ);
console.log(elementoQ.childElementCount); // Para contar los elementos de la clase sus hijos
console.log(elementoQ.children); // Retorna los hijos de la clase
console.log(elementoQ.children[0]); // Retorna el elemento de la lista en este caso el 2
*/
/*
console.log(elementoQ.firstElementChild);
console.log(elementoQ.lastElementChild);

let elementoClase = document.querySelector('#p1');
console.log(elementoClase);

let elemetosP = document.getElementsByTagName('p');
console.log(elemetosP.length);

for(let i = 0; i < elemetosP.length; i++){
    console.log(elemetosP[i].textContent);
}

elemetosP[2].innerHTML = 'prueba';

let opid = document.getElementById('p1');

opid.style.background = 'blue';
opid.style.color = 'red';
opid.style.borderRadius = '8px';
opid.style.width = '250px';
opid.style.height = '20px';
opid.style.textAlign = 'center';
*/

// Ver fecha
function verFecha(){
    let Fec = document.getElementById("resultado");
    Fec.innerHTML = Date();
}

// quitar fecha
function quitarFecha(){
    let qfech = document.getElementById("resultado");
    qfech.innerHTML = "Fecha";
}

function temperatura(){
    let numero = parseFloat(document.getElementById('dato1').value);
    let calculo = numero-273.5;
    let res1 = document.getElementById('res');
    res1.innerHTML = (`Resultado: ${calculo}`);
    alert(`La conversión es: ${calculo}`);
}