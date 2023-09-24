"use strict";
// SELECTORS
const res = document.querySelector(".result");
const theme = document.querySelector("#theme-changer");
const digits = document.querySelectorAll(".number");
const oprs = document.querySelectorAll(".opr");
const clearAllBtn = document.querySelector(".clearAllBtn");
const clearLastBtn = document.querySelector(".clearLastBtn");
const equalBtn = document.querySelector(".equalBtn");

// THEME CHANGER
theme.addEventListener("click", function () {
  console.log("dark");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.setAttribute("src", "assests/images/brightness.png");
  } else {
    theme.setAttribute("src", "assests/images/moon.png");
  }
});

const display = function (key) {
  res.value += key;
};

const clearAll = function () {
  res.value = "";
};

const clearLast = function () {
  res.value = res.value.slice(0, -1);
};

const calculate = function () {
  try {
    // console.log(res.value);
    if (res.value == "") {
      console.log("do nothing");
    } else {
      const val = eval(res.value);
      if (val == "Infinity") {
        throw new Error();
      } else {
        res.value = val;
      }
    }
  } catch (err) {
    res.value = "Math Error";
  }
};

// clear all btn
clearAllBtn.addEventListener("click", clearAll);

// clear last
clearLastBtn.addEventListener("click", clearLast);

// display digits
digits.forEach((digit) => {
  digit.addEventListener("click", function () {
    display(this.textContent);
  });
});

// displays oprs
oprs.forEach((opr) => {
  opr.addEventListener("click", function () {
    display(this.textContent);
  });
});

// Calculate results
equalBtn.addEventListener("click", function () {
  calculate();
  // res.value = "";
});
