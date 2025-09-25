// Basic JavaScript functionality for Club de Lucha Massanassa website

// Enhanced function to handle mobile menu after full page load
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        // Remove any existing listeners to prevent duplicates
        mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
        const newMobileMenuButton = document.querySelector('.mobile-menu-toggle');
        
        newMobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = !mobileMenu.classList.contains('hidden');
            newMobileMenuButton.setAttribute('aria-expanded', isExpanded.toString());
        });
    }
}

// Enhanced function to handle navigation links
function initializeNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Enhanced form submission handler
async function initializeForm() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre')?.value;
            const email = document.getElementById('email')?.value;
            const mensaje = document.getElementById('mensaje')?.value;
            
            // Basic validation
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, introduce un email válido.');
                return;
            }
            
            try {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]') || 
                                    contactForm.querySelector('input[type="submit"]');
                if (submitButton) {
                    const originalText = submitButton.textContent || submitButton.value;
                    submitButton.textContent = 'Enviando...';
                    submitButton.disabled = true;
                }
                
                // Send form data to API
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nombre, email, mensaje })
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert(result.message || '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                } else {
                    alert(result.error || 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
            } finally {
                // Reset button state
                const submitButton = contactForm.querySelector('button[type="submit"]') || 
                                    contactForm.querySelector('input[type="submit"]');
                if (submitButton) {
                    submitButton.textContent = 'Enviar Mensaje';
                    submitButton.disabled = false;
                }
            }
        });
    }
}

// Enhanced scroll effect for header
function initializeScrollEffects() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
}

// Enhanced active navigation links based on scroll
function initializeActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    if (!sections.length || !navLinks.length) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 150) { // Increased offset for better detection
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-red-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-red-600');
            }
        });
    });
}

// Initialize all functionality when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeMobileMenu();
        initializeNavigation();
        initializeForm();
        initializeScrollEffects();
        initializeActiveNav();
    });
} else {
    // If already loaded, run immediately
    initializeMobileMenu();
    initializeNavigation();
    initializeForm();
    initializeScrollEffects();
    initializeActiveNav();
}

// Additional check to ensure initialization runs after all content is loaded
window.addEventListener('load', function() {
    initializeMobileMenu();
    initializeNavigation();
    initializeForm();
    initializeScrollEffects();
    initializeActiveNav();
});