const menudeabrir = document.querySelector("#menu-open-button");
const menudecerrar = document.querySelector("#menu-close-button");

menudeabrir.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menudecerrar.addEventListener("click", () => menudeabrir.click ());