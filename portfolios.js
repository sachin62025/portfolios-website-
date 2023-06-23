

// js of landing page 
 // DOM elements
  const signupButton = document.querySelector('.btn');
  const contactForm = document.querySelector('.contact form');

  // Event listeners
  signupButton.addEventListener('click', () => {
    // Perform signup functionality
    console.log('Signup button clicked!');
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    // Perform form submission functionality
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    contactForm.reset();
  });
