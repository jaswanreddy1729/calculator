var res = document.querySelector(".result");
var theme = document.querySelector("#theme-changer");

theme.addEventListener("click", function () {
  console.log("dark");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.setAttribute("src", "assests/images/brightness.png");
  } else {
    theme.setAttribute("src", "assests/images/moon.png");
  }
});

function display(key) {
  res.value += key;
}

function clearALL() {
  res.value = "";
}

function clearLast() {
  res.value = res.value.slice(0, -1);
}

function calculate() {
  try {
    res.value = eval(res.value);
  } catch {
    res.value = "Math Error";
  }
}

// KEYBOARD LISTENER
document.addEventListener("keydown", function (e) {
  var out = e.key;
  //   console.log(out);
  if (
    out === "0" ||
    out === "1" ||
    out === "2" ||
    out === "3" ||
    out === "4" ||
    out === "5" ||
    out === "6" ||
    out === "7" ||
    out === "8" ||
    out === "9" ||
    out === "+" ||
    out === "-" ||
    out === "*" ||
    out === "/" ||
    out === "%"
  ) {
    display(out);
  } else if (out == "Backspace" || out === "Delete") {
    clearLast();
  } else if (out === "Enter" || out === "=") {
    calculate();
  }
});
