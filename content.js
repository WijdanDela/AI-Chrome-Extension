console.log("AI Autocomplete Extension loaded");

let suggestionElement = null;
let currentSuggestion = "";

const suggestions = [
  { trigger: "I am", completion: " excited to continue working on this project." },
  { trigger: "Thank you", completion: " for your time and support." },
  { trigger: "Hello", completion: ", I hope you are doing well." },
  { trigger: "This project", completion: " is an AI autocomplete Chrome extension." }
];

function isTextField(element) {
  return (
    element instanceof HTMLTextAreaElement ||
    element instanceof HTMLInputElement
  );
}

function createSuggestionElement() {
  suggestionElement = document.createElement("div");
  suggestionElement.id = "ai-autocomplete-box";
  document.body.appendChild(suggestionElement);
}

function showSuggestion(element, text) {
  if (!suggestionElement) createSuggestionElement();

  const rect = element.getBoundingClientRect();

  suggestionElement.textContent = text;
  suggestionElement.style.left = `${rect.left + window.scrollX}px`;
  suggestionElement.style.top = `${rect.bottom + window.scrollY + 6}px`;
  suggestionElement.style.display = "block";
}

function hideSuggestion() {
  if (suggestionElement) {
    suggestionElement.style.display = "none";
  }
  currentSuggestion = "";
}

document.addEventListener("input", (event) => {
  const element = event.target;

  if (!isTextField(element)) return;

  const text = element.value;
  const match = suggestions.find((item) => text.endsWith(item.trigger));

  if (match) {
    currentSuggestion = match.completion;
    showSuggestion(element, currentSuggestion);
  } else {
    hideSuggestion();
  }
});

document.addEventListener("keydown", (event) => {
  const element = event.target;

  if (!isTextField(element)) return;

  if (event.key === "Tab" && currentSuggestion) {
    event.preventDefault();

    element.value += currentSuggestion;

    element.selectionStart = element.value.length;
    element.selectionEnd = element.value.length;

    hideSuggestion();

    element.dispatchEvent(new Event("input", { bubbles: true }));

    console.log("Suggestion accepted");
  }
});

document.addEventListener("click", (event) => {
  if (!isTextField(event.target)) {
    hideSuggestion();
  }
});