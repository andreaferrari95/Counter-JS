let count = 0;

const decrement = () => {
        count--;
        updateCount();
}

const increment = () => {
    count++;
    updateCount();
}

const reset = () => {
    count = 0;
    updateCount();
}

const updateCount = () => {
    const countElement = document.querySelector(".count span");
    countElement.textContent = count;
}

const decrementButton = document.querySelector(".decrement");
decrementButton.textContent = "-";
decrementButton.addEventListener("click", decrement);

const incrementButton = document.querySelector(".increment");
incrementButton.addEventListener("click", increment);
incrementButton.textContent = "+";

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);
resetButton.textContent = "Reset";


document.addEventListener("DOMContentLoaded", updateCount);

document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        increment();
    };

    if (event.key === "-") {
        decrement();
    };

    if (event.key === "r") {
        reset();
    };
});