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
    return a/b;
} div 


function positive(num){
    return (num>0); 
} 
console.log(positive(34));

age=parseInt(age); 

let VERIFIER_NOM;

VERIFIER_NOM = isNaN(age);

console.log(age);
console.log(VERIFIER_NOM);

function isValid(userInput) {
    if (!isNaN(parseInt(userInput))){
        userInput = parseInt(userInput)
        if (userInput >12 && userInput <90) return true
        else return false
    }
    else return false 
}

console.log(isValid("99"));

let resultat =isValid(age); 

let resultatInverse = !resultat ; 

console.log(!resultat)
console.log(resultatInverse)

console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)


//while (index <=4) {
//    console.log(index);
   // index ++ ;
//} 

// while (index >=3) {
//     console.log(index);
//     index -=3;
// }
let index =0; 
let result = "";

while(index <= 100) {
    if(index <= 10) {
        result += index;
    }
    if(index >= 90 && index <= 100) {
        result += index;
    }
    index++
}
console.log(result)

let key = 0;
while(key > 100){
   console.log(key);
   key++;
}
//sa marche pas car il debute de 0 et la variable demande de +1 a partir de 100 donc ca marche pas
let id = 0;
do {
   console.log(id);
   id++;
} while(id > 100);
//je remaque que c'est la meme chose qu'avec keys mais avec do while 

let ages = [14,14,14,15,14,15,16,16,16,16,16,17]; 

console.log(ages);
console.log(ages[0]);
console.log(ages[1]);
console.log(ages[2]);
console.log(ages[3]);

let longueur = ages.length 
console.log(longueur)
//la longueur du tableau est egale au dernier index - 1
console.log(ages[11])
let ix= 0 ;
while(ix<=ages.length-1) {
    console.log(ages[ix]);
    ix++ ;
}