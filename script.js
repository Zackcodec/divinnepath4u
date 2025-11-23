// script.js - UX: mobile nav toggle, modal package flow, contact form validation, simple accessibility helpers

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const visible = mobileNav.classList.toggle('mobile-show');
    mobileNav.setAttribute('aria-hidden', !visible);
  });

  // Overlay chat (whatsapp) quick buttons
  document.getElementById('overlayChat')?.addEventListener('click', () => openWA());
  document.getElementById('overlayTry')?.addEventListener('click', () => openWA());
  document.getElementById('whatsFast')?.addEventListener('click', () => openWA());
  document.getElementById('waLink')?.addEventListener('click', (e) => { /* default link works */ });

  // Package modal open
  document.querySelectorAll('.price-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pack = btn.dataset.package || 'Package';
      const price = btn.dataset.price || '';
      openPkgModal(pack, price);
    });
  });

  // Modal handlers
  const pkgModal = document.getElementById('pkgModal');
  const modalClose = document.getElementById('modalClose');
  modalClose?.addEventListener('click', closePkgModal);
  pkgModal?.addEventListener('click', (e) => { if (e.target === pkgModal) closePkgModal(); });

  function openPkgModal(title, price){
    pkgModal.querySelector('#pkgTitle').textContent = `${title} — ₹${price}`;
    pkgModal.querySelector('#pkgDesc').textContent = `You chose ${title}. Send request or chat to confirm booking.`;
    pkgModal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
    document.body.style.overflow = 'hidden';
  }
  function closePkgModal(){
    pkgModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.getElementById('modalBookNow')?.addEventListener('click', () => {
    closePkgModal();
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth', block:'center'});
    document.getElementById('name')?.focus();
  });
  document.getElementById('modalWhats')?.addEventListener('click', () => openWA());

  // Contact form validation (client-side only)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    if (!name) return showMsg('Please enter your name', true);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMsg('Please enter a valid email', true);
    // simulate success (replace with real submit integration)
    showMsg('Request sent — Shilpi will contact you soon!', false);
    form.reset();
  });

  function showMsg(text, isError){
    if (!formMsg) return;
    formMsg.hidden = false;
    formMsg.textContent = text;
    formMsg.style.color = isError ? '#ff9aa2' : 'var(--accent)';
    setTimeout(()=> { formMsg.hidden = true; }, 4500);
  }

  // Price CTA: smooth scroll to contact if user clicks buy
  document.querySelectorAll('.price-cta').forEach(b => {
    b.addEventListener('click', () => {
      document.getElementById('contact')?.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });

  // Small helper for WA
  function openWA(){
    // replace with real number before go-live
    window.open('https://wa.me/919999999999', '_blank');
  }

  // Accessibility: close mobile nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      mobileNav.classList.remove('mobile-show');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });

  // Keyboard: ESC closes modal / mobile nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePkgModal();
      mobileNav.classList.remove('mobile-show');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });
});
