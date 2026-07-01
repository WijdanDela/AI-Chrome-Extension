# AI Chrome Extension

An AI-powered Chrome/Opera extension that provides text autocomplete suggestions while users type inside text fields and textareas on websites.

The extension detects predefined trigger phrases, displays an autocomplete suggestion, and inserts the suggestion when the user presses the **Tab** key.

---

# Features

- Detects typing inside input fields and textareas.
- Displays autocomplete suggestions while typing.
- Accepts suggestions using the **Tab** key.
- Works across supported websites.
- Lightweight implementation using Manifest V3.
- Easy to customize with additional suggestions.

---

# Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3
- Chrome Extensions API
- Manifest V3
- DOM Manipulation
- Event Handling

---

# Project Structure

```
AI-Chrome-Extension/
│
├── manifest.json
├── content.js
├── style.css
├── README.md
└── icons/ (optional)
```

---

# Installation

## 1. Clone or Download

Download the repository or clone it.

```
git clone https://github.com/your-username/AI-Chrome-Extension.git
```

or download the ZIP file.

---

## 2. Open Chrome or Opera

Navigate to

```
chrome://extensions
```

or

```
opera://extensions
```

---

## 3. Enable Developer Mode

Turn on **Developer Mode**.

---

## 4. Load the Extension

Click

```
Load unpacked
```

Select the project folder.

The extension is now installed.

---

# Usage

Open any supported website containing an input field or textarea.

Examples:

- Editpad
- Google Search
- Forms
- Text Editors

Type one of the supported trigger phrases:

```
I am
```

```
Hello
```

```
Thank you
```

```
This project
```

The extension displays a suggestion.

Press

```
Tab
```

to insert the suggested completion.

---

# Example

### User types

```
I am
```

### Suggestion

```
excited to continue working on this project.
```

### Final result

```
I am excited to continue working on this project.
```

---

# Current Suggestions

| Trigger | Suggestion |
|----------|------------|
| I am | excited to continue working on this project. |
| Hello | , I hope you are doing well. |
| Thank you | for your time and support. |
| This project | is an AI autocomplete Chrome extension. |

---

# Skills Learned

- JavaScript
- Chrome Extensions
- Manifest V3
- Content Scripts
- DOM Manipulation
- Browser Events
- Keyboard Events
- CSS Styling
- Debugging
- Browser Developer Tools

---

# Challenges

During development several challenges were encountered:

- Detecting editable text fields on different websites.
- Handling keyboard events correctly.
- Preventing the browser from moving focus when Tab is pressed.
- Positioning the suggestion box near the text field.
- Debugging content scripts inside browser extensions.
- Understanding Manifest V3 permissions.
- Testing the extension on different websites.

---

# Future Improvements

Future versions could include:

- Integration with OpenAI API.
- Integration with Google Gemini.
- Integration with Claude AI.
- AI-generated autocomplete instead of predefined text.
- Inline ghost text similar to GitHub Copilot.
- Better positioning of suggestions.
- Multi-language support.
- User settings page.
- Custom suggestion database.
- Learning from user writing patterns.

---

# Testing

The extension was successfully tested on:

- Google Search
- Editpad
- W3Schools Textarea
- HTML Input Fields
- HTML Textareas

---

# How It Works

1. The content script is injected into supported webpages.
2. The extension listens for user input.
3. When a predefined trigger is detected, a suggestion appears.
4. Pressing **Tab** accepts the suggestion.
5. The suggestion is inserted into the current text field.

---

# Requirements

- Chrome 110+
- Opera (latest version)
- Manifest Version 3 support

---

# Author

Developed as part of an AI Chrome Extension hands-on project.

---

# License

This project is provided for educational purposes.
Link video"https://drive.google.com/file/d/1EdLLQ0QAm90tXe3Bpp4XzbrJLVI7B1fp/view?usp=sharing"
