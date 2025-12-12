let cow = document.getElementById("cow");
let position = 0;
let interval;

function startRun() {
    clearInterval(interval);
    interval = setInterval(() => {
        position += 5;
        cow.style.left = position + "px";

        if (position > window.innerWidth - 150) {
            clearInterval(interval);
            alert("Sapi mencapai garis finish!");
        }
    }, 50);
}

function resetRun() {
    clearInterval(interval);
    position = 0;
    cow.style.left = "0px";
}
