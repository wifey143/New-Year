function checkLogin() {
  const pass = document.getElementById("pass").value;

  if (pass === "Love You Bandar") {
    window.location.href = "lounge.html";
  } else {
    alert("Wrong password 💔");
  }
}
