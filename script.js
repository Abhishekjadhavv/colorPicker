const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function colorChanger() {
    let code = "0123456789ABCDEF";
    let newCode = "#";

    for (let i = 1; i <= 6; i++) {
        newCode = newCode + (code[Math.floor(Math.random() * 15)]);
    }

    return newCode;
}

function colors() {
    let i = 0;
    container.innerHTML = "";
    for (let index = 0; index < 9; index++) {
        let newColor = colorChanger();
        let sql = `<div class="box flex justify-center" onclick="selectColor(this)"><span>${newColor}</span></div>`;
        container.insertAdjacentHTML("beforeend", sql)
        let box = document.querySelectorAll(".box");
        box[i].style.backgroundColor = newColor;
        i++;
    }
}

colors();


function selectColor(element) {
    let color = element.lastElementChild.textContent;
    navigator.clipboard.writeText(element.lastElementChild.textContent);
    element.lastElementChild.textContent = "Copied";
    setTimeout(() => {
        element.lastElementChild.textContent = color;
    }, 2000)
}

btn.addEventListener("click", colors);



