function createBoxes (s) {
    let body = document.querySelector("body");
    let biggerContainer = document.createElement("div");
    biggerContainer.setAttribute("id", "biggerContainer");
    body.appendChild(biggerContainer);
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "buttonContainer");

    let resetButton = document.createElement("button")
    resetButton.textContent = "Reset";
    buttonContainer.appendChild(resetButton);
    resetButton.setAttribute("class", "button");

    let partyButton = document.createElement("button")
    partyButton.textContent = "Party Mode";
    partyButton.setAttribute("class", "button");
    buttonContainer.appendChild(partyButton);
    biggerContainer.appendChild(buttonContainer);
    
    
    for (let i = 0; i < s ** 2; i++) {
        container.setAttribute("style", `grid-template: repeat(${s}, 1fr) / repeat(${s}, 1fr);`)
        let div = document.createElement("div");
        div.setAttribute("class", "box")
        div.onmouseover = () => div.style.background = "black";
        container.appendChild(div);
    }
    
    biggerContainer.appendChild(container);
    
    
    boxes = document.querySelectorAll(".box");
    
    function clearBoxes() {
        boxes.forEach((box) => {
            box.style.background = "white";
        });
    }
    
    resetButton.addEventListener("click", () => {
        clearBoxes()
        let boxesPerSide = prompt("How many squares per side?");
        createBoxes(boxesPerSide);
        biggerContainer.remove();
    });

    partyButton.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.onmouseover = () => box.style.background = getRandomColor();
        });
    });
}

function getRandomColor() {
    let selection = "0123456789ABCDEF";
    selection = selection.split('');
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += selection[Math.floor(Math.random() * selection.length)];
    }
    return color;
}

createBoxes(8);