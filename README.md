# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

This challenge is to build out a Cofferoaster subscription site.

Users should be able to:

- [x] View the optimal layout for each page depending on their device's screen size
- [x] See hover states for all interactive elements throughout the site
- [x] Make selections to create a coffee subscription and see an order summary modal of their choices

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [https://github.com/MarcoFranca/Coffeeroasters-subscription-site](https://github.com/MarcoFranca/Coffeeroasters-subscription-site)
- Live Site URL: [https://marcofranca.github.io/Coffeeroasters-subscription-site/](https://marcofranca.github.io/Coffeeroasters-subscription-site/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- BEM Methodology
- Mobile-first workflow
- JavaScript vanilla

### What I learned


_**in addition to reinforcing my knowledge in HTML, CSS and JavaScript**_

- I learned to use the `defer` property in the `html` `script` `tag` so that I can put
    the script in the header and the `html` load before the `JavaScript`.

```html
<script src="assets/js/functions.js" defer></script>
<script src="assets/js/plan.js" defer></script>
<script src="assets/js/script.js" defer></script>
```

- I learned the basic knowledge of the BEM methodology (methodology for naming classes in CSS) and put them into practice.

```html
<section class="how-it-works">
  <h2 class="how-it-works__title title_s">How it works</h2>
  <div class="how-it-works__container">
    <div class="how-it-works__card">
```

- I learned to use the `details` and `summary` tags to have the accordion effect without using `javaScript`. 

```html
<details class="accordion">
  <summary id="accordion2" class="accordion__title">
    <h2 class="title_s">What type of coffee?</h2>
    <img src="./assets/images/plan/desktop/icon-arrow.svg" alt="arrow icon">
  </summary><div class="accordion__content">
  <button id="single" class="accordion__button">
```

- I learned to use `root:` in `CSS` to create variables and reuse the same value with a single variable,
  thus facilitating maintenance.

```css
:root {
  /****colors****/

  --color--dark-cyan: rgb(14, 135, 132);
  --color--dark-grey-blue: rgb(51, 61, 75);
  --color--dark-blue: rgb(37, 45, 55);
  --color--pale-orange: rgb(253, 214, 186);
  --color--light-cream: rgb(254, 252, 247);
  --color--grey: rgba(153, 153, 154, 0.63);

  /*****font-family****/

  --font--fraunces--serif: 'Fraunces', serif;
  --font--barlow--sans-serif: 'Barlow', sans-serif;
}

body{
  font-family: var(--font--barlow--sans-serif);
  background-color: var(--color--light-cream);
}
```

- I learned to use the `[open]` class to style the accordion content when it is open
- I learned to use the `transform` property to change the position of the content
- I learned to use the `transiction` property to animate the event
- 
```css
.accordion[open] img{
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  transition: transform 500ms;
}
```

- I learned to use the `before`, `after` and `last-child` subclasses.

```css
.steps__card__content:last-child:before{
  border: none;
}

.steps__card__content:after {
  content: "";
  border: solid var(--color--dark-cyan) 2px;
  border-radius: 50%;
}
```

- I learned to indicate the use of style in an `id` only when it has a specific `class`.
- learned how to remove click events with `pointer-events: none`.
- 
````css
#modal.hide,
#fade.hide{
  opacity: 0;
  pointer-events: none;
}
````

- I learned to use `scroll()` to position the screen where you want.

````javascript
createPlan.addEventListener('click', ()=>{
  if (document.querySelector('#open-modal').classList.value !== "button_gray") {
    scroll(0, 0)
    toggleModal()
  }
})
````
- I learned to use an `array` with a `forEach` to save a line of code.

````javascript
function toggleModal() {
[modal, fade].forEach((e)=>{e.classList.toggle('hide')})
}
````
- I learned to use `window.screen` to capture the size of the screen being used.
- 
````javascript
 if (window.screen.width < 768){
  span.id = 'modalVal';
  span.classList.add('title_m');
  button.id = "close-modal"
  button.classList.add('modal__card__button')
  button.classList.add('button_green')
  button.innerHTML = 'Checkout - <span id="value">_____</span>'
  div.append(span)
  div.append(button)
}
````

- I learned to use `toggle` to change a class.

````javascript
else {
document.querySelector('#open-modal').classList.toggle("button_green")
document.querySelector('#open-modal').classList.toggle("button_gray")
return true
}
````
---

## Author
- Linkdin - [Marco Tullio Franca](https://www.linkedin.com/in/marco-franca/)
- Frontend Mentor - [@MarcoFranca](https://www.frontendmentor.io/profile/MarcoFranca)

## Acknowledgments
- [Pedro Marins](https://www.linkedin.com/in/pedromarins/)
- [Henrique de Andrade](https://www.linkedin.com/in/henrique-de-andrade/)
- [Thiago kpelo](https://www.linkedin.com/in/thiago-kpelo-0156446a/)

