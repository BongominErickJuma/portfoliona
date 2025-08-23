// DOM Elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll("#nav-links a");
const navbar = document.querySelector(".navbar");
const textElement = document.querySelector(".typewriter-text");
const cursor = document.querySelector(".cursor");

// Mobile Menu Toggle with smooth animation
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("show") ? "hidden" : "";
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// Enhanced Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  
  navbar.classList.toggle("scrolled", currentScroll > 50);
  
  // Hide/show navbar on scroll
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
});

// Enhanced Typewriter Effect
function initTypewriter() {
  const texts = [
    "I craft modern, responsive web apps.",
    "Full-stack developer & designer.",
    "Building digital experiences.",
    "React, Node.js, and beyond."
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = isDeleting ? 50 : 100;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
      return;
    }
    
    setTimeout(type, isDeleting ? 50 : 100);
  }
  
  // Start typing after a short delay
  setTimeout(() => {
    cursor.style.display = "inline-block";
    type();
  }, 500);
}

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('.section-heading, .about-content, .project, .contact-content, .alt-contact');
  
  const revealElement = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(revealElement, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}

// Add revealed class styles
const style = document.createElement('style');
style.textContent = `
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  /* Smooth page transitions */
  * {
    scroll-behavior: smooth;
  }
  
  /* Loading animation */
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f0f23;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s, visibility 0.5s;
  }
  
  .loading.hidden {
    opacity: 0;
    visibility: hidden;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(59, 130, 246, 0.3);
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Parallax effect for hero image */
  .hero-image {
    will-change: transform;
  }
  
  /* Smooth anchor scrolling offset */
  html {
    scroll-padding-top: 80px;
  }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage && scrolled < 600) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0002})`;
  }
});

// Add magnetic effect to buttons
document.querySelectorAll('.btn, .alt-contact a').forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});

// Loading animation
function initLoader() {
  const loader = document.createElement('div');
  loader.className = 'loading';
  loader.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loader);
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 500);
  });
}

// Initialize all effects
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTypewriter();
  initScrollReveal();
  
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation to tech list items
  const techItems = document.querySelectorAll('.tech-list li');
  techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.animation = 'fadeInUp 0.5s ease forwards';
  });
});

// Add fadeInUp animation
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(fadeInUpStyle);