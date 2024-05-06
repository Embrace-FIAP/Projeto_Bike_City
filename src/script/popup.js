// Exibe o pop-up de login ao clicar no ícone de login
document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

// Exibe o pop-up de contatos ao clicar no ícone de contatos
document.querySelector("#show-contacts").addEventListener("click", function() {
    document.querySelector(".contacts-popup").classList.add("active");
});

// Fecha o pop-up de login ao clicar no botão de fechar
document.querySelectorAll(".popup .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });
});

// Fecha o pop-up de contatos ao clicar no botão de fechar
document.querySelectorAll(".contacts-popup .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".contacts-popup").classList.remove("active");
    });
});

