/**
 * GENERALIST PROGRAMMER - MAIN JAVASCRIPT
 * Handles mobile navigation, smooth scrolling, and interactive elements
 */

(function() {
    'use strict';

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle mobile menu
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle menu
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);

            // Prevent body scroll when menu is open
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';

            // Animate hamburger
            const hamburgers = this.querySelectorAll('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburgers[0].style.transform = 'rotate(45deg) translateY(10px)';
                hamburgers[1].style.opacity = '0';
                hamburgers[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                hamburgers[0].style.transform = '';
                hamburgers[1].style.opacity = '';
                hamburgers[2].style.transform = '';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    body.style.overflow = '';

                    // Reset hamburger
                    const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
                    hamburgers[0].style.transform = '';
                    hamburgers[1].style.opacity = '';
                    hamburgers[2].style.transform = '';
                }
            });
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';

                // Reset hamburger
                const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
                hamburgers[0].style.transform = '';
                hamburgers[1].style.opacity = '';
                hamburgers[2].style.transform = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(event.target) &&
                !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';

                // Reset hamburger
                const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
                hamburgers[0].style.transform = '';
                hamburgers[1].style.opacity = '';
                hamburgers[2].style.transform = '';
            }
        });
    }

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for hash-only links
            if (href === '#') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.boxShadow = 'var(--shadow-md)';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // ARTICLE CARD ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe article cards
    document.querySelectorAll('.article-card, .topic-card, .related-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ============================================
    // COPY TO CLIPBOARD (for share functionality)
    // ============================================
    window.copyToClipboard = function() {
        const url = window.location.href;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function() {
                showCopyFeedback('Copied!');
            }).catch(function(err) {
                console.error('Failed to copy:', err);
                fallbackCopyToClipboard(url);
            });
        } else {
            fallbackCopyToClipboard(url);
        }
    };

    function fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCopyFeedback('Copied!');
            } else {
                showCopyFeedback('Failed to copy');
            }
        } catch (err) {
            console.error('Fallback copy failed:', err);
            showCopyFeedback('Failed to copy');
        }

        document.body.removeChild(textArea);
    }

    function showCopyFeedback(message) {
        const btn = document.querySelector('.share-copy span');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = message;
            setTimeout(function() {
                btn.textContent = originalText;
            }, 2000);
        }
    }

    // ============================================
    // EXTERNAL LINKS
    // ============================================
    // Add target="_blank" and rel="noopener noreferrer" to external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ============================================
    // READING PROGRESS BAR (for post pages)
    // ============================================
    if (document.querySelector('.post-content')) {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // PERFORMANCE: Reduce motion for users who prefer it
    // ============================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(element => {
            element.style.animation = 'none';
            element.style.transition = 'none';
        });
    }

    // ============================================
    // TABLE RESPONSIVENESS
    // ============================================
    // Wrap tables in a scrollable container
    document.querySelectorAll('.post-content table').forEach(table => {
        if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            wrapper.style.cssText = 'overflow-x: auto; margin: 1.5rem 0;';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: white;
        border: none;
        box-shadow: var(--shadow-lg);
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.backgroundColor = 'var(--color-primary-dark)';
    });

    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.backgroundColor = 'var(--color-primary)';
    });

    // ============================================
    // ANALYTICS EVENT TRACKING (if Google Analytics is present)
    // ============================================
    if (typeof gtag !== 'undefined') {
        // Track outbound links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            link.addEventListener('click', function() {
                const url = new URL(this.href);
                if (url.hostname !== window.location.hostname) {
                    gtag('event', 'click', {
                        'event_category': 'outbound',
                        'event_label': this.href
                    });
                }
            });
        });

        // Track social shares
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const platform = this.className.split(' ').find(c => c.startsWith('share-'));
                gtag('event', 'share', {
                    'event_category': 'social',
                    'event_label': platform
                });
            });
        });
    }

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c👋 Welcome to Generalist Programmer!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
    console.log('%cInterested in the code? Check out our GitHub!', 'font-size: 12px; color: #64748b;');

})();
