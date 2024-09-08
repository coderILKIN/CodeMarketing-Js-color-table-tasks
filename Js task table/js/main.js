// 1. 1ci yazilma hali

// let telementbody = document.querySelector("tbody");

// let newArr = [];

// let count = 1;

// setInterval(() => {

//    if(newArr.length <= 5){
//     let trelemet = document.createElement("tr");

//     let tdelemet = document.createElement("td");
//     tdelemet.innerHTML = `Test ${count}`;
//     tdelemet.style.border = "2px solid black"
//     let tdelemet1 = document.createElement("td");
//     tdelemet1.innerHTML = `Testov ${count}`;
//     tdelemet1.style.border = "2px solid black"
//     let tdelemet2 = document.createElement("td");
//     tdelemet2.innerHTML = `${count}`;
//     tdelemet2.style.border = "2px solid black"

//     count++;

//     trelemet.append(tdelemet,tdelemet1,tdelemet2);


//     newArr.push(trelemet);
//     telementbody.append(trelemet);
    
//     console.log(newArr);
    
//    }
    
// }, 2000);






// 2. 2ci yazilma hali

let telementbody = document.querySelector("tbody");


let objets = [
    {
        name : "Ilkin",
        surname : "Yusubov"
    },

    {
        name : "Kenan",
        surname : "Mahmudov"
    },

    {
        name : "Vuqar",
        surname : "Hemidov"
    },

    {
        name : "Hecer",
        surname : "Qafarova"
    }

];
let index = 0;
let id = 1;

setInterval(() => {

   if(id <= objets.length){

        let trelemet = document.createElement("tr");
        let tdelemet = document.createElement("td");
            tdelemet.innerHTML = ` ${objets[index].name}`;
        let tdelemet1 = document.createElement("td");
            tdelemet1.innerHTML = ` ${objets[index].surname}`;
        let tdelemet2 = document.createElement("td");
             tdelemet2.innerHTML = `${id}`;
        trelemet.append(tdelemet,tdelemet1,tdelemet2);
        telementbody.append(trelemet);
        id++;
        index++;   
   }
    
}, 2000);





