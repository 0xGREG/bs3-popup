# Popups v1.1 for Boostrap 3

## About

An overly simple javascript file that wraps around Bootstrap 3's modals to be opened from JavaScript.

## Requirements

- Bootstrap 3
- jQuery

## Usage

```html
<!-- Include our popup js file -->
<script src="/popup.js?v=1.1"></script>

<!-- Use the popup system -->
<script>
    // Sample prompt

    popup({
        type: "prompt",
        title: "Example question",
        body: "Choose an option please.",
        okLabel: "Yes",
        cancelLabel: "No",
        ok: function() {
            console.log("you pressed yes")
        },
        cancel: function() {
            console.log("you pressed no")
        }
    })

    // Sample popup

    popup({
        type: "alert",
        title: "Example alert",
        body: "You can only press 'Understood' here.",
        okLabel: "Understood",
        ok: function() {
            console.log("you pressed the 'Understood' button")
        },
    })
</script>
```