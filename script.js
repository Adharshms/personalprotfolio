// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

 
// Check if the user has a stored theme preference
const currentTheme = localStorage.getItem('theme');

// If there is a stored theme, apply it to the body
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  // Default to light mode if no preference is found
  document.body.classList.add('day-mode');
}

// Function to toggle between light and dark mode
function toggleTheme() {
  // If the body currently has 'night-mode', change it to 'day-mode'
  if (document.body.classList.contains('night-mode')) {
    document.body.classList.replace('night-mode', 'day-mode');
    localStorage.setItem('theme', 'day-mode');
  } else {
    // Otherwise, switch to night-mode
    document.body.classList.replace('day-mode', 'night-mode');
    localStorage.setItem('theme', 'night-mode');
  }
}

// Add event listener to the theme toggle button
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

