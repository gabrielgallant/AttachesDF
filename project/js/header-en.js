export async function loadPartial(selector, file) {
    const container = document.querySelector(selector);
    if (!container) { return; }

    const response = await fetch(file);
    container.innerHTML = await response.text();
}

export async function loadLayout() {
    await loadPartial('#header', '/components/header-en.html');
    await loadPartial('#footer', '/components/footer-en.html');

    const openBtn = document.getElementById("menu-open-button");
    const closeBtn = document.getElementById("menu-close-button");
    const drawer = document.getElementById("nav-drawer");
    const overlay = document.getElementById("nav-drawer-overlay");

    openBtn?.addEventListener("click", () => {
        drawer.classList.add("open");
        overlay?.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
        drawer.classList.remove("open");
        overlay?.classList.remove("open");
    });

    overlay?.addEventListener("click", () => {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
    });
}