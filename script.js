function changeButtonColor(button) {
    button.style.backgroundColor = "#5c1717";
}

function resetButtonColor(button) {
    button.style.backgroundColor = "#7b1a1a"; 
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Buttons with Hover Effects
const buttons = document.querySelectorAll('.main-button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.innerText = "See the Best Deals!";
    });
    button.addEventListener('mouseout', () => {
        button.innerText = button.getAttribute('data-original-text');
    });
});

// Validate the form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value; // Get the email input
    const message = document.getElementById('subscription-message'); // Get the message element

    // Validate email using regex
    if (validateEmail(email)) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green"; // Success message
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red"; // Error message
    }

    message.style.visibility = "visible"; // Show the message
});

// Email validation function using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    return re.test(email); // Return true if valid, false otherwise
}




