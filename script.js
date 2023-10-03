

/* console lessson */

// console.log('welcome to lessons on js');


// let firstName = 'Abah';
// let middle = 'Imoni';
// let surName = 'Iduh';
// let age = 40;
// let height = 7;
// let profession = 'programmer';
// let tribe = 'Idoma';
// let state = 'Benue';

// let firsMIddle = firstName + ' ' + middle;



let person = {};//NOTATION : OJECT LITERALS///////square bracket notation
person.firsName='peter';
person.age=45;
person.height = 6;
person.country = 8;

person.learning = function() { return 'learing coding wella'};
// person[country] = 8;

console.log(person.learning());



let man = {
    firsMIddle: 'sameon',
    middle: 'musa',
    age: 34
}


/* FUNCTION CONSTRUCTOR OR CONTRUCTOR FUNCTION*/
function Yoruba(firsNamed, middle, birth) {//function declaration
    this.name = firsNamed;
    this.middleName = middle;
    this.age = birth;

}

let P1 = new Yoruba('taiwo', 'docas', 27);//instances of the
let P2 = new Yoruba('Mayowa', 'samuel', 32);
P2.address = '14B';


/* CREATING CLASSES HERE */





let Cars = {};
let womann = new Object();
womann.age= 45;

console.log(person);
console.log(man);
console.log(P1);
console.log(P2);
console.log(womann);




// function schAtribute() {
//     return 'greate learning';
// }

// let school = 'friendly';
// if(school){

//     schAtribute();
// } else {

//     console.log('you are loosing');
// }

console.log(pressing());

function pressing() {
    return {
        mantle:'serving God',
    };
}

