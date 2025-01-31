document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response").textContent = "¡Sabía que dirías que sí! 😍💖 Te amo 😘";
    document.getElementById("response").classList.remove("hidden");
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
