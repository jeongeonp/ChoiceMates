// Copy BibTeX to clipboard.
const copyBtn = document.getElementById("copy-bibtex");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const text = document.getElementById("bibtex-text").innerText;
    try {
      await navigator.clipboard.writeText(text);
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = original), 1600);
    } catch (e) {
      copyBtn.textContent = "Select & copy manually";
    }
  });
}
