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

    const congratsImage = {
        10: "/assets/img/congrats10.png",
        25:"/assets/img/congrats25.png",
        50: "/assets/img/congrats50.png",
        100:"/assets/img/congrats100.png"
    };


    if (congratsImage.hasOwnProperty(count)) {
        const congratulationsModal = document.getElementById("congratulationsModal");
        congratulationsModal.style.display = "block";

        const congratulationsImages = document.getElementById("congratulationsImages");
        congratulationsImages.src = congratsImage[count];

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