// Define an array of writing prompts
const prompts = [
	"Write about a time when you overcame a difficult obstacle.",
	"Describe your dream vacation.",
	"Write about a person who has influenced your life in a positive way.",
	"Write about a challenge that you have faced and how you dealt with it.",
	"Describe a moment in your life that you will never forget."
];

// Set the minimum number of words required
const minWords = 100;

// Select a random prompt from the array and display it
const promptElement = document.getElementById("prompt");
promptElement.textContent = prompts[Math.floor(Math.random() * prompts.length)];

// Submit the response and check if it meets the minimum word requirement
function submitResponse() {
	const response = document.getElementById("response").value.trim();
	const words = response.split(" ");
	if (words.length >= minWords) {
		document.getElementById("status").textContent = "Congratulations! You have earned 1 point for your response.";
	} else {
		document.getElementById("status").textContent = "Please write at least " + minWords + " words.";
	}
}
