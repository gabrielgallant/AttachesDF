export async function loadPartial(selector, file) {
    const container = document.querySelector(selector);
    if (!container) { return; }

    const response = await fetch(file);
    container.innerHTML = await response.text();
}

export async function loadLayout() {
    const isEnglish = window.location.pathname.includes("-en");

    await loadPartial('#header', isEnglish 
        ? './components/header-en.html' 
        : './components/header.html'
    );

    await loadPartial('#footer', isEnglish 
        ? './components/footer-en.html' 
        : './components/footer.html'
    );

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

    const langToggle = document.getElementById("lang-toggle");

    langToggle?.addEventListener("click", (e) => {
        e.preventDefault();

        let currentPath = window.location.pathname;

        if (currentPath.includes("-en.html")) {
            // Switch to French
            const newPath = currentPath.replace("-en.html", ".html");
            window.location.href = newPath;
        } else {
            // Switch to English
            const newPath = currentPath.replace(".html", "-en.html");
            window.location.href = newPath;
        }
    });
}