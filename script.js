const background = document.getElementById("background");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (20 + Math.random() * 35) + "px";

    background.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

function createMessage() {

    const message = document.createElement("div");

    message.classList.add("message");

    message.innerHTML = "TE QUIEROOOO EDYAIRIII ♥";

    message.style.left = Math.random() * 70 + "vw";

    message.style.animationDuration =
        (5 + Math.random() * 3) + "s";

    background.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 9000);
}

setInterval(createHeart, 180);
setInterval(createMessage, 900);