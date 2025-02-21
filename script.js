const redBox = document.getElementById("redBox");
const greenBox = document.getElementById("greenBox");
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const redHex = document.getElementById("redHex");
const greenHex = document.getElementById("greenHex");

function updateColors() {
    const redValue = parseInt(redRange.value);
    const greenValue = parseInt(greenRange.value);

    const redColor = `rgb(${redValue}, 0, 0)`;
    const greenColor = `rgb(0, ${greenValue}, 0)`;
    const redHexColor = `#${redValue.toString(16).padStart(2, '0')}0000`;
    const greenHexColor = `#00${greenValue.toString(16).padStart(2, '0')}00`;

    redBox.style.backgroundColor = redColor;
    greenBox.style.backgroundColor = greenColor;
    redHex.textContent = redHexColor;
    greenHex.textContent = greenHexColor;
}

redRange.addEventListener("input", updateColors);
greenRange.addEventListener("input", updateColors);

// Initialize the colors
updateColors();
