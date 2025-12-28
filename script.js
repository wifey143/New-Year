/* ===== TELEGRAM CONFIG ===== */
const BOT_TOKEN = "8004503294:AAHYcR7K20cZp6FgjOy6I8RxaZaov_iR2zI"; // paste token here
const CHAT_ID = "8120420757";

/* ===== SEND TELEGRAM MESSAGE ===== */
function sendToTelegram(name, pass, status) {
  const message =
`💌 GF Website Entry 💌

👤 Name: ${name}
🔐 Password: ${pass}
📌 Status: ${status}
⏰ Time: ${new Date().toLocaleString()}
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  }).catch(() => {});
}

/* ===== LOGIN CHECK ===== */
function checkLogin() {
  const name = document.getElementById("name").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const errorMsg = document.getElementById("error"); // FIXED ID

  if (!name || !pass) {
    errorMsg.textContent = "Please enter name & password 💗";
    return;
  }

  if (pass === "Love You Bandar") {
    sendToTelegram(name, pass, "✅ Correct Password");
    window.location.href = "page1.html";
  } else {
    sendToTelegram(name, pass, "❌ Wrong Password");
    errorMsg.textContent = "Wrong password 💔 Try again";
  }
}

/* ❄️ SNOW EFFECT (ALL PAGES) */
const snowContainer = document.querySelector(".snow");

if (snowContainer) {
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("span");

    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height =
      4 + Math.random() * 6 + "px";

    snowContainer.appendChild(snowflake);
  }
}
