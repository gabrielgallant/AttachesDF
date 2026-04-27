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