
//declaring the date in the footer
const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

//declaring the current year in the footer
const domCurrentYear = document.querySelector('#current-year');
domCurrentYear.innerText = currentYear;

//declaring last modified date on footer
const lastModified = document.querySelector('#current-date');
lastModified.innerText = dateTime

//declaring navigation variables
const hamburgerElement = document.querySelector("#menu");
const navElements = document.querySelector(".navigation");


//adding class for open and close hamburguer menu
hamburgerElement.addEventListener('click', () => {
    navElements.classList.toggle('open');
    hamburgerElement.classList.toggle('open');  
})


// get .visits and initialize element
const visitsElement = document.querySelector(".visits");

//mode button
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

