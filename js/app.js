console.log("hello");

let age;
age=15;
//la variable age est un type entier(int)
console.log(typeof age);
const prenom="ugo";
//prenom est de type string 
let addition = 4+12;
console.log(addition);
let soustraction =2-50; 
console.log(soustraction);
let multiplication=3*8;
console.log(multiplication);
let division=7/2;
console.log(division);
let modulo=5%2;
console.log(modulo);
let test=3>5;
console.log(test);
console.log(typeof test);
//test est une variable de type boolean 
//=== == != !== <= >= < > 
const identity = "Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans"
//c'est une addition


let masjuscule=identity.toUpperCase();
console.log(identity);
console.log(masjuscule);
//j'ai enregistrer identity en maj dans majusucle car je ne peux pas modifier une constante 
age=prompt("quel age avez vous");

    if (age <=0){
        console.log("vous etes un poisson (pané)")
    } 
    if (age <=120){
        console.log("votre âge est validé");
    } 
    if (age <0 || age >120) {
        console.log("je ne suis pas d'accord");
    }
    if (age >=21) {
        console.log("vous etes majeur");
    }
    if (age <21 || age >=18) {
        console.log("vous etes majeur mais pas au usa");
    } 
    if (age <18) {
        console.log("vous etes mineur");
    }
// les 3 operateur boolean sont > < = 

function direBonjour(){
    console.log("Bonjour");
}
direBonjour();

let name=prenom 
function direBonjourAkelkain(name) { 
    console.log("bonjour "+name);
}
direBonjourAkelkain(name)



function hello(name,city) {
    console.log("bonjour "+name +" vous habitez "+city );
} hello(name,city=("lyon"));


function add(a,b) {
    console.log(a+b);
    return a+b;
}
add(3,4);

function div(a,b){
    console.log(a+b);
    return a+b;
} div(1,2);

function positive(num){
    return (num>0); 
} 
console.log(positive(34));

 