document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("neonText");
    let colors = ["cyan", "deepskyblue", "aqua", "lightblue"];
    let index = 0;

    setInterval(() => {
        text.style.textShadow = `0 0 10px ${colors[index]}, 0 0 20px ${colors[index]}, 0 0 30px ${colors[index]}`;
        index = (index + 1) % colors.length;
    }, 1000);
});
