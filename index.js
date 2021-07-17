const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (result.textContent.length <= 16 && result.textContent !== "Error") {
      result.textContent += e.target.id;
      result.style.fontSize = "2rem";
    } else if (
      result.textContent.length <= 65 &&
      result.textContent !== "Error"
    ) {
      result.textContent += e.target.id;
      result.style.fontSize = "1rem";
      result.style.paddingLeft = "10px";
    } else {
      result.style.fontSize = "2rem";
      result.textContent = "Error";
    }
  });
});

qual.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
