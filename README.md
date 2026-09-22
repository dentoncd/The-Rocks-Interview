# Rock Interview

Rock Interview is a browser-based form project built with HTML, CSS, and JavaScript. The application presents a playful interview centered around rocks while demonstrating form handling, dynamic UI behavior, event listeners, and client-side validation.

The project combines a humorous theme with practical front-end development concepts.

## Features

* Collects basic user information
* Includes a favorite rock selection
* Dynamically updates the form based on user choices
* Automatically copies the user's nickname into the pet rock name field
* Displays a special animated message when **Moissanite** is selected
* Shows or hides the rock ownership question depending on the selected rock
* Validates required fields before submission
* Highlights invalid inputs
* Displays clear validation error messages

## Form Sections

### Personal Information

The form collects:

* First name
* Last name
* Age
* Nickname
* Pet rock name

Users can also select **Same as your nickname?** to automatically copy their nickname into the pet rock name field.

## Favorite Rock Selection

Users can choose from:

* Granite
* Marble
* Moissanite
* Pumice
* Obsidian

The form reacts dynamically depending on the selected rock.

### Moissanite

Selecting **Moissanite** displays an animated message:

```text
YOU KNOW THIS ONE?? YOU'RE HIRED!!!
```

The message continuously changes color using CSS animations.

### Other Rocks

Selecting another rock displays an additional question asking how many rocks the user owns.

## Form Validation

JavaScript is used to verify that required fields contain valid information before the form is submitted.

The form checks for:

* Missing first name
* Missing last name
* Missing nickname
* Missing pet rock name
* Missing age
* Non-numeric age values

Invalid fields are highlighted and corresponding error messages are displayed below the form.

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM manipulation
* Event listeners
* Client-side form validation
* CSS animations

## Project Structure

```text
rocks-form/
│
├── form.html
├── images/
│   └── stone-favicon.webp
└── scripts/
    └── formRocks.js
```

### `form.html`

Contains:

* Page structure
* Form fields
* Styling
* CSS animation
* Rock selection options
* Error message container
* Script connection

### `formRocks.js`

Handles the interactive behavior of the page, including:

* Form initialization
* Event listeners
* Rock selection behavior
* Nickname duplication
* Form validation
* Error highlighting and cleanup

## How It Works

When the page loads, JavaScript registers event listeners for the form and interactive controls.

For example, selecting the nickname checkbox triggers a function that copies the nickname into the pet rock field.

```javascript
if (sameNameChk.checked) {
    petRockTxt.value = nickNameVal;
}
```

Changing the favorite rock selection also updates the interface.

```javascript
if (rockChoice === "Moissanite") {
    moissaniteMsg.style.display = "inline-block";
    rockCount.style.display = "none";
}
```

This allows the form to respond immediately to user input without reloading the page.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/dentoncd/The-Rocks-Interview
```

Navigate into the project:

```bash
cd rocks-form
```

Then open `form.html` in a browser.

If you are using a JetBrains IDE, you can right-click `form.html` and select **Open in Browser**.

Because the project uses absolute paths such as:

```html
<script src="/scripts/formRocks.js"></script>
```

running it through a local development server may work more reliably than opening the HTML file directly.

## Concepts Practiced

This project demonstrates:

* HTML forms
* Input validation
* JavaScript functions
* DOM element selection
* Event-driven programming
* Conditional logic
* Dynamic styling
* Form state changes
* CSS keyframe animation
* Basic user experience feedback

## Future Improvements

Possible improvements include:

* More detailed age validation
* Preventing negative rock counts
* Improved styling and responsive layout
* More rock choices
* Custom success message after submission
* Better accessibility labels and form feedback
* Real form submission handling
* Saving responses to a backend or database

## About

Rock Interview was created as a front-end development project to practice interactive forms, JavaScript validation, and dynamic page behavior while keeping the interface lighthearted and memorable.
