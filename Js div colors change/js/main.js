let element = document.querySelector(".element");

let colorArr = ["green","yellow","blue","grey"];

let index = 0;


setInterval(() => {
    if(index < colorArr.length){
        element.style.backgroundColor = colorArr[index];
        index = (index + 1);
        index = index % colorArr.length;
    }
}, 2000);