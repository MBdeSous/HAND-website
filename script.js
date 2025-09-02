// script.js
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

// script.js
//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//  anchor.addEventListener('click', function (e) {
//    e.preventDefault();
//    document.querySelector(this.getAttribute('href')).scrollIntoView({
//      behavior: 'smooth'
//    });
//  });
//});

/*
Form Validation:

If you add a contact form, validate inputs using JavaScript
// script.js
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  // Add logic to send form data (e.g., to a server)
  alert('Form submitted successfully!');
});
*/ 