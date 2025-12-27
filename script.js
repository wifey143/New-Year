function checkLogin() {
  const pass = document.getElementById("pass").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (pass === "Love You Bandar") {
    window.location.href = "lounge.html";
  } else {
    errorMsg.textContent = "Wrong password 💔 Try again";
  }
}
// ❄️ SNOW EFFECT (ALL PAGES)
const snowContainer = document.querySelector(".snow");

for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement("span");

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.width = snowflake.style.height =
    4 + Math.random() * 6 + "px";

  snowContainer.appendChild(snowflake);
}
