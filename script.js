let words = document.querySelectorAll(".word");
words.forEach((word)=>{
     let letters = word.textContent.split("");
     word.textContent="";
     letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
     });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);

        });
        nextWord.style.opacity="1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

    };

    changeText();
    setInterval(changeText,3000)

   //mix it up portfolio------------------------------->

   var mixer = mixitup('.portfolio-gallery');





   //active menu------------------------------------------------>

   // Select all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");

// Function to update the active menu item
const updateActiveMenu = () => {
    let currentSection = "";

    // Loop through sections to find the one currently in the viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Remove 'active' class from all links and add it to the current section's link
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
};

// Add scroll event listener to update the active menu
window.addEventListener("scroll", updateActiveMenu);


//sticky navbar --------------------------------->

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

//toggle navbar---------------------------------->

// Select the menu icon and navigation list
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

// Toggle menu on click
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x"); // Toggles rotation class
    navList.classList.toggle("active"); // Toggles visibility of the menu
});

// Close menu on scroll
window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x"); // Remove rotation class
    navList.classList.remove("active"); // Remove active class from the menu
});

//toggle icon navbar ------------------------------------>

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));// Observe each item

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar .bar span");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the active class to trigger the animation
                    entry.target.classList.add("active");
                } else {
                    // Remove the active class when out of view
                    entry.target.classList.remove("active");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    skillBars.forEach((bar) => observer.observe(bar));
});