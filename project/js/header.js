export async function loadPartial(selector, file) {
    const container = document.querySelector(selector);
    if (!container) { return; }

    const response = await fetch(file);
    container.innerHTML = await response.text();
}

export async function loadLayout() {
    await loadPartial('#header', 'components/header.html');
    await loadPartial('#footer', 'components/footer.html');
}

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("menu-open-button");
    const closeBtn = document.getElementById("menu-close-button");
    const drawer = document.getElementById("nav-drawer");

    openBtn.addEventListener("click", () => {
        drawer.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("open");
    });
});