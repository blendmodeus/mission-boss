// =============================================
// MISSION BOSS — Shared JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initRevealAnimations();
  initFAQ();
  setActiveNavLink();
  initCarousel();
});

// --- Navigation ---
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');

  // Scroll effect
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// --- Scroll Reveal ---
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

// --- FAQ Accordion ---
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all other items
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      // Toggle current
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// --- Active Nav Link ---
function setActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    } else if (href === '/' && (path === '/' || path === '/index.html')) {
      link.classList.add('active');
    }
  });
}

// --- Stacked Card Carousel ---
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const cards = carousel.querySelectorAll('.carousel__card');
  const dots = carousel.querySelectorAll('.carousel__dot');
  const prevBtn = carousel.querySelector('.carousel__nav--prev');
  const nextBtn = carousel.querySelector('.carousel__nav--next');
  const total = cards.length;
  let active = 0;

  function update(index) {
    active = ((index % total) + total) % total;
    const prevIndex = ((active - 1) + total) % total;
    const nextIndex = (active + 1) % total;

    cards.forEach((card, i) => {
      card.classList.remove('carousel__card--active', 'carousel__card--prev', 'carousel__card--next');
      if (i === active) {
        card.classList.add('carousel__card--active');
      } else if (i === prevIndex) {
        card.classList.add('carousel__card--prev');
      } else if (i === nextIndex) {
        card.classList.add('carousel__card--next');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('carousel__dot--active', i === active);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => update(active - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => update(active + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      update(parseInt(dot.dataset.slide, 10));
    });
  });

  // Initialize
  update(0);
}
