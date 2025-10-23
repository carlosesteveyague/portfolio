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
