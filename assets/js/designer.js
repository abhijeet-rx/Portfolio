// Designer page — GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hide loader after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1800);
});


// Hero animations timeline
const tl = gsap.timeline({ delay: 0.3 });

tl.to('.hero-eyebrow', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
})
.to('.hero-title-line', {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15
}, '-=0.4')
.to('.hero-desc', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
}, '-=0.5')
.to('.hero-actions', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
}, '-=0.4')
.to('.hero-socials', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
}, '-=0.4');

// Project cards scroll reveal
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: 'power2.out'
    });
});

// Skills scroll reveal
gsap.utils.toArray('.skill-group').forEach((group, i) => {
    gsap.to(group, {
        scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power2.out'
    });
});

// Contact cards scroll reveal
gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Navbar scroll-shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.9)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.6)';
    }
});

// Video Player Interaction (Adonis Promotional Video)
const adonisVideo = document.getElementById('adonisVideo');
const videoPlayOverlay = document.getElementById('videoPlayOverlay');
const adonisPlayTrigger = document.getElementById('adonisPlayTrigger');

if (adonisVideo) {
    if (videoPlayOverlay) {
        videoPlayOverlay.addEventListener('click', () => {
            adonisVideo.play().catch(() => {});
        });
    }

    if (adonisPlayTrigger) {
        adonisPlayTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            adonisVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (adonisVideo.paused) {
                adonisVideo.play().catch(() => {});
            } else {
                adonisVideo.pause();
            }
        });
    }

    adonisVideo.addEventListener('play', () => {
        if (videoPlayOverlay) videoPlayOverlay.classList.add('is-playing');
        if (adonisPlayTrigger) {
            const span = adonisPlayTrigger.querySelector('span');
            if (span) span.textContent = 'Pause Promo';
        }
    });

    adonisVideo.addEventListener('pause', () => {
        if (videoPlayOverlay) videoPlayOverlay.classList.remove('is-playing');
        if (adonisPlayTrigger) {
            const span = adonisPlayTrigger.querySelector('span');
            if (span) span.textContent = 'Watch Promo';
        }
    });

    adonisVideo.addEventListener('ended', () => {
        if (videoPlayOverlay) videoPlayOverlay.classList.remove('is-playing');
        if (adonisPlayTrigger) {
            const span = adonisPlayTrigger.querySelector('span');
            if (span) span.textContent = 'Watch Again';
        }
    });
}

// Video Player Interaction (DOT Field Motion Loop)
const dotfieldVideo = document.getElementById('dotfieldVideo');
const dotfieldPlayOverlay = document.getElementById('dotfieldPlayOverlay');
const dotfieldPlayTrigger = document.getElementById('dotfieldPlayTrigger');

if (dotfieldVideo) {
    if (dotfieldPlayOverlay) {
        dotfieldPlayOverlay.addEventListener('click', () => {
            if (dotfieldVideo.paused) {
                dotfieldVideo.play().catch(() => {});
            } else {
                dotfieldVideo.pause();
            }
        });
    }

    if (dotfieldPlayTrigger) {
        dotfieldPlayTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            dotfieldVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (dotfieldVideo.paused) {
                dotfieldVideo.play().catch(() => {});
            } else {
                dotfieldVideo.pause();
            }
        });
    }

    dotfieldVideo.addEventListener('play', () => {
        if (dotfieldPlayOverlay) dotfieldPlayOverlay.classList.add('is-playing');
        if (dotfieldPlayTrigger) {
            dotfieldPlayTrigger.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
                <span>Pause Loop</span>
            `;
        }
    });

    dotfieldVideo.addEventListener('pause', () => {
        if (dotfieldPlayOverlay) dotfieldPlayOverlay.classList.remove('is-playing');
        if (dotfieldPlayTrigger) {
            dotfieldPlayTrigger.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Play Loop</span>
            `;
        }
    });
}

