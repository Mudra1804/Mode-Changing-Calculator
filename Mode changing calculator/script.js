const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.id === "clear") {
            display.innerText = "";
        } else if (button.id === "backspace") {
            display.innerText = display.innerText.slice(0, -1);
        } else if (button.id === "equal") {
            try {
                display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch {
                display.innerText = "Error!";
                setTimeout(() => (display.innerText = ""), 2000);
            }
        } else {
            display.innerText += button.innerText;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
};
