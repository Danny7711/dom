// 1
document.querySelector("#message").textContent = "Добро пожаловать в JavaScript!";

// 2
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}

// 3
document.querySelector("#text").textContent = "Текст изменён с помощью querySelector!";

let allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(function(box) {
    box.style.border = "3px solid black";
});

// 4
let highlights = document.querySelectorAll("p.highlight");

highlights.forEach(function(paragraph) {
    paragraph.style.color = "red";
});