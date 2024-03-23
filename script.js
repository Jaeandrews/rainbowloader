const container = document.querySelector(".loader");
for (let i = 1; i <= 100; i++) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.setProperty("--i", i);
  container.appendChild(circle);
}
