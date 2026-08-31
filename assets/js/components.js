async function loadComponent(elementId, filePath) {
  const element = document.getElementById(elementId);

  if (!element) return;

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Gagal memuat: ${filePath}`);
    }

    element.innerHTML = await response.text();
  } catch (error) {
    console.error("Component Error:", error);
  }
}

async function loadComponents() {
  await Promise.all([
    loadComponent("header", "components/header.html"),

    loadComponent("footer", "components/footer.html"),
  ]);

  // COMPONENT SUDAH SELESAI DIMUAT
  document.dispatchEvent(new CustomEvent("componentsLoaded"));
}

document.addEventListener("DOMContentLoaded", loadComponents);
