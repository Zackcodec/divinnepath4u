# Shilpi Shivhare — Premium Numerology & Tarot (Static UI Kit)

**One-line:** Premium dark glassmorphism UI kit for a numerology & tarot website — plain HTML, CSS, and vanilla JS.  
Design: heavy, premium, responsive, with interactive tarot card stack, modals, packages, newsletter and WhatsApp CTAs.

---

## File structure
/project-root
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ (optional) /assets/ ← for local images (not required because files use online images)

---

## How to use (quick)
1. Clone or copy files into a folder.  
2. Open `index.html` in any modern browser (Chrome/Firefox/Edge). No build tools required.  
3. Replace placeholder WhatsApp number `919999999999` in `index.html` and `script.js` with your real number.  
   - Example: `https://wa.me/918765432101`

---

## What’s included / Features
- Dark **glassmorphism** design with neon-blue & purple accents.  
- Responsive one-page layout: Hero, Services, Packages, Testimonials, FAQ, Newsletter, Contact.  
- **Interactive tarot card stack** with smooth tilt (mouse + touch) and accessible keyboard support.  
- **Card modals** for detailed service info + Book / WhatsApp CTAs.  
- Pricing cards with CTAs that scroll to contact.  
- Newsletter subscription UI (client-side only).  
- Contact form validation (client-side; no server).  
- Preloaded Unsplash images (visible immediately); optional local `/assets/` support.  
- Accessibility basics: semantic tags, aria attributes, focus states, aria-live for messages.

---

## Customize quickly
- **Change WhatsApp number**: search & replace `919999999999` in `index.html` and `script.js`.
- **Use local images**: create `/assets/` folder and replace image `src` URLs in `index.html` with `assets/your-image.jpg`.
- **Colors / theme**: edit `:root` variables in `styles.css` (e.g. `--neon-blue`, `--neon-purple`, `--bg-1`).
- **Fonts**: currently system fonts used. To use Google Fonts, add the `<link>` in `<head>` and update `body { font-family: ... }` in `styles.css`.
- **Text / Copy**: update headings, descriptions and pricing directly in `index.html`.

---

## Making it production-ready (recommended next steps)
- **Hosting**: push to Netlify / Vercel / GitHub Pages. (Static files only.)
- **Performance**:
  - Replace Unsplash remote images with optimized local images (webp/next-gen).
  - Add `loading="lazy"` to non-critical `<img>` tags.
  - Minify CSS and JS for production.
- **SEO**:
  - Add meta OG tags and proper page titles for each section.
  - Generate sitemap / robots.txt if deploying to a domain.
- **Analytics & Pixels**: add Google Analytics / Meta Pixel script in `index.html` head.
- **Contact form**: integrate with:
  - Email service (Formspree, Getform, or Netlify Forms) OR
  - Build a small server endpoint (Node/Express) to send emails.
- **Payments**: integrate Razorpay / UPI checkout for paid packages (requires server or client-side Razorpay checkout).
- **Security**: use HTTPS in production. If deploying, your host will handle SSL.

---

## Accessibility notes
- Forms include `aria-live` status updates and visible focus states.  
- Modal has `role="dialog"` and simple focus management (close button is focused when opened). Consider improving focus trap for complex flows.  
- Ensure color contrast for final brand colors — test with Lighthouse / axe.

---

## Known limitations (for now)
- Contact & newsletter are client-side only — no backend delivery.  
- Payment buttons are placeholders — payment flow must be implemented separately.  
- Images are loaded from Unsplash remotely (good for demo). For performance & branding, replace with local optimized assets.

---

## Suggested next improvements (I can implement)
- Razorpay integration (client checkout or server-side flow).  
- Server endpoint for form submissions (Node/Express + SendGrid).  
- Convert to multi-page site or to a static site generator (Next/Vite) if you want SEO pages.  
- Add CMS integration (Netlify CMS / Firebase) for admin updates.  
- Provide ZIP bundle or live CodePen preview.

---

## Credits & License
- Unsplash images used for demo (replace with your own licensed assets).  
- This project is provided as-is for use in client websites. Use commercially or modify freely. If you share, please credit the original author.

---

## Contact / Support
If you want, I can:
- integrate payments / form backend / Razorpay,
- produce a minified production build,
- convert copy to Hinglish or add Hindi translations,
- or prepare a deployment-ready ZIP.

Reply what you want next and I’ll implement it directly. 😊
