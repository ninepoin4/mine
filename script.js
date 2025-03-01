// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhanced Glitch effect animation
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        // Initial animation is handled by CSS
        
        // Add random glitch effects periodically
        setInterval(() => {
            // Add extra glitch class for more intense effect
            glitchElement.classList.add('glitching');
            
            // Randomly adjust the text shadow for a brief moment
            const randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 255, 0.8)`;
            const originalTextShadow = glitchElement.style.textShadow;
            
            glitchElement.style.textShadow = `0 0 5px ${randomColor}, 0 0 10px ${randomColor}, 0 0 15px ${randomColor}`;
            
            // Reset after a short time
            setTimeout(() => {
                glitchElement.classList.remove('glitching');
                glitchElement.style.textShadow = originalTextShadow;
            }, 150);
        }, 3000);
        
        // Add interactive effect on mouseover
        glitchElement.addEventListener('mouseover', function() {
            this.style.animation = 'none'; // Temporarily disable the animation
            
            // Add a quick pulse effect
            this.style.transform = 'scale(1.05)';
            this.style.textShadow = '0 0 15px rgba(0, 240, 255, 0.9), 0 0 30px rgba(0, 240, 255, 0.7), 0 0 40px rgba(0, 240, 255, 0.5)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.textShadow = '';
                this.style.animation = ''; // Re-enable the animation
            }, 300);
        });
    }
    
    // Parallax effect for stars background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const stars = document.querySelector('.stars');
        
        if (stars) {
            stars.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check for elements in view on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effect for interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 240, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add typing effect to hero subtitle with support for Chinese characters
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80); // Slightly faster for Chinese text
            }
        };
        
        // Start typing after the main title animation completes
        setTimeout(typeWriter, 2500);
    }
}); 
