function showMessage() {
    for (let i = 0; i < 300; i++) {
        createFlower();
    }
    alert("OWW THANKS! <3")
}

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "&#x2740;";
    document.body.appendChild(flower);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    flower.style.left = x + "px";
    flower.style.top = y + "px";

    setTimeout(() => {
        flower.remove();
    }, 5000);
} 

function changeButton() {
    var laterButton = document.getElementById("laterButton");
    laterButton.innerHTML = "Yes! Sure!<3";
    laterButton.onclick = showMessage;
    setTimeout(function() {
        showMessage(); 
    }, 100);
}

function moveButton() {
    var buttonNo = document.getElementById("noButton");
    var maxX = window.innerWidth - buttonNo.offsetWidth;
    var maxY = window.innerHeight - buttonNo.offsetHeight;

    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);

    buttonNo.style.left = x + "px";
    buttonNo.style.top = y + "px";
}

function removeButton() {
    var neverButton = document.getElementById("neverButton");
    neverButton.style.display = "none";
}

var buttonNo = document.getElementById("noButton");
buttonNo.addEventListener("mouseover", moveButton);