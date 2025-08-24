// src/components/Article.js
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature: minutes to read
  let minutesText = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    minutesText = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    minutesText = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {minutesText} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
