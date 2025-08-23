const baseURL = "https://www.fclovejourney.site/?n=";

const generateBtn = document.getElementById("generateBtn");
const namesInput = document.getElementById("namesInput");
const results = document.getElementById("results");

generateBtn.addEventListener("click", () => {
  results.innerHTML = ""; // clear previous results
  const names = namesInput.value
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n);

  names.forEach((name) => {
    const url = baseURL + encodeURIComponent(name);

    // buat container link + tombol copy
    const div = document.createElement("div");
    div.className = "flex items-center justify-between bg-gray-100 p-2 rounded";

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = url;
    link.className = "text-blue-600 underline break-all";

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className =
      "ml-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(url);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    });

    div.appendChild(link);
    div.appendChild(copyBtn);
    results.appendChild(div);
  });
});
