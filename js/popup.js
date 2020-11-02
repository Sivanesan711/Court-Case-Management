//close popup
const crossBtn = document.querySelector(".calculate-amount-popup-crossBtn");
crossBtn.addEventListener("click", () => {
	const parentDiv = crossBtn.parentElement.parentElement;
	parentDiv.style.display = "none";
});
