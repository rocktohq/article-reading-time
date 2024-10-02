// Select the article
const article = document.querySelector("article");

// If the article is there
if (article) {
  const content = article.textContent;
  const words = content.split(/\s+/);

  const wordCount = words.length;
  // Per word 200 ms
  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("p");
  Object.assign(badge.style, {
    color: "black",
    padding: "2px 5px",
    fontSize: "1rem",
    background: "lightgray",
    borderRadius: "4px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
  });

  badge.textContent = `⏱️ ${readingTime} min reading time`;
  article.append(badge);
}
