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

    const congratsImage = [
        "/assets/img/congrats10.png",
        "/assets/img/congrats25.png",
        "/assets/img/congrats50.png",
        "/assets/img/congrats100.png"
    ];

    if (count === 10 || count === 25 || count === 50 || count === 100) {

        const congratulationsModal = document.getElementById("congratulationsModal");
        congratulationsModal.style.display = "block";

        const congratulationsImages = document.getElementById("congratulationsImages");
        congratulationsImages.src = congratsImage[Math.log2(count) -1];

        document.getElementById("continue").addEventListener("click", () => {
            congratulationsModal.style.display = "none";
        });

        document.getElementById("resetAfterCongrats").addEventListener("click", () => {
            reset();
            congratulationsModal.style.display = "none";
        })
    }
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