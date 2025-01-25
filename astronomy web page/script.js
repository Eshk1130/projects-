document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Change banner message on hover
    const banner = document.getElementById('banner');
    const originalMessage = banner.querySelector('p').textContent;
    banner.addEventListener('mouseover', () => {
      banner.querySelector('p').textContent = 'Explore the cosmos!';
    });
    banner.addEventListener('mouseout', () => {
      banner.querySelector('p').textContent = originalMessage;
    });
  
    // Highlight navigation link of the section currently in view
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  
    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const membership = document.getElementById('membership').value;
  
      const thankYouMessage = document.createElement('p');
      thankYouMessage.textContent = `Thank you for joining, ${name}! We will contact you at ${email} regarding your ${membership} membership.`;
      form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
      form.reset();
    });
  });
  