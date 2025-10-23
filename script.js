async function loadData(file, elementId) {
  try {
    const response = await fetch(file);
    const text = await response.text();
    const lines = text.trim().split("\n");
    const list = document.getElementById(elementId);
    list.innerHTML = "";

    lines.forEach(line => {
      const li = document.createElement("li");
      li.innerHTML = line;
      list.appendChild(li);
    });
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
}

loadData("data/papers.txt", "papers-list");
loadData("data/code.txt", "code-list");
loadData("data/teaching.txt", "teaching-list");

(() => {
  const header = document.querySelector('header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', checkScroll);
})();
