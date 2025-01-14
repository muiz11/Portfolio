let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};




"use strict";

// Select all elements with the class 'word'
let words = document.querySelectorAll(".word");

words.forEach((word) => {
    // Split each word into individual letters
    let letters = word.textContent.split("");
    word.textContent = ""; // Clear the original word text

    letters.forEach((letter) => {
        // Create a span element for each letter
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

// Variables to manage the current and maximum word index
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

// Function to change the displayed text
const changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate the current word's letters out
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
            letter.classList.remove("in");
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    // Animate the next word's letters in
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.classList.add("behind");
        letter.classList.remove("out", "in");

        setTimeout(() => {
            letter.classList.add("in");
            letter.classList.remove("behind");
        }, 340 + i * 80);
    });

    // Update the current word index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Initial text change
changeText();

// Set interval to change text every 4 seconds
setInterval(changeText, 3000);

