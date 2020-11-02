function toggleMenu() {
	let navigation = document.querySelector(".navigation");
	let toggle = document.querySelector(".toggle");
	navigation.classList.toggle("active");
	toggle.classList.toggle("active");
}

//expand
const questionRows = document.querySelectorAll(".questions-text");
console.log(questionRows);
questionRows.forEach((qRow) => {
	qRow.addEventListener("click", () => {
		let ansDiv = qRow.nextElementSibling;
		ansDiv.classList.toggle("show");
		qRow.classList.toggle("activated");
		let iconBtn = qRow.querySelector(".expand-faq-btn i");
		if (iconBtn.classList.contains("fa-chevron-right")) {
			iconBtn.classList.remove("fa-chevron-right");
			iconBtn.classList.add("fa-chevron-down");
		} else {
			iconBtn.classList.add("fa-chevron-right");
			iconBtn.classList.remove("fa-chevron-down");
		}
	});
});
