
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
let counterValue = 0;
incrementButton.addEventListener('click', () => {
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
});
