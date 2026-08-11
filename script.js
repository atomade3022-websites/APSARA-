/* ==========================================================================
   APSARA BAKES - INTERACTIVE LOGIC & ANIMATIONS
   ========================================================================== */

// 1. OUTLETS DATA (18 Outlets across Iritty, Mattannur, Uliyil, etc., Kannur District)
const MAIN_OWNER_PHONE = "+91 98475 72417";

const OUTLETS = [
  { id: 1, name: "Old Bus Stand", town: "Iritty", district: "Kannur", phone: "+91 82815 98401", timing: "07:00 AM - 10:00 PM", region: "iritty" },
  { id: 2, name: "Mele Bus Stand", town: "Iritty", district: "Kannur", phone: "+91 82815 98402", timing: "07:00 AM - 10:00 PM", region: "iritty" },
  { id: 3, name: "New Bus Stand", town: "Iritty", district: "Kannur", phone: "+91 82815 98403", timing: "07:00 AM - 10:00 PM", region: "iritty" },
  { id: 4, name: "Ittans Coolbar", town: "Iritty", district: "Kannur", phone: "+91 82815 98406", timing: "07:00 AM - 10:00 PM", region: "iritty" },
  { id: 5, name: "Opp. Bus Stand", town: "Mattannur", district: "Kannur", phone: "+91 82815 98404", timing: "07:00 AM - 10:00 PM", region: "mattannur" },
  { id: 6, name: "Kannur Road", town: "Mattannur", district: "Kannur", phone: "+91 98472 44200", timing: "07:00 AM - 10:00 PM", region: "mattannur" },
  { id: 7, name: "Iritty Road", town: "Mattannur", district: "Kannur", phone: "+91 96455 02000", timing: "07:00 AM - 10:00 PM", region: "mattannur" },
  { id: 8, name: "Aleema Plaza", town: "Uliyil", district: "Kannur", phone: "+91 95266 61980", timing: "07:00 AM - 10:00 PM", region: "uliyil" },
  { id: 9, name: "Grand bei Market", town: "19th Mile", district: "Kannur", phone: "+91 95444 74250", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 10, name: "Kooranmukku Branch", town: "Kooranmukku", district: "Kannur", phone: "+91 82815 98405", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 11, name: "Uliyil Main Branch", town: "Uliyil", district: "Kannur", phone: "+91 75590 65874", timing: "07:00 AM - 10:00 PM", region: "uliyil" },
  { id: 12, name: "Express Cafe", town: "Uliyil", district: "Kannur", phone: "+91 92074 89789", timing: "07:00 AM - 10:00 PM", region: "uliyil" },
  { id: 13, name: "Punnad Branch", town: "Punnad", district: "Kannur", phone: "+91 82815 98407", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 14, name: "Keezhurkunnu Store", town: "Keezhurkunnu", district: "Kannur", phone: "+91 81389 91980", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 15, name: "Vallithode Branch", town: "Vallithode", district: "Kannur", phone: "+91 90727 01980", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 16, name: "Thillankery Branch", town: "Thillankery", district: "Kannur", phone: "+91 80865 84009", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 17, name: "Kakkayangad Branch", town: "Kakkayangad", district: "Kannur", phone: "+91 83040 89147", timing: "07:00 AM - 10:00 PM", region: "other" },
  { id: 18, name: "Vilakode Branch", town: "Vilakode", district: "Kannur", phone: "+91 86064 72000", timing: "07:00 AM - 10:00 PM", region: "other" }
];

// 2. PRODUCTS DATA (Featuring actual project assets)
const PRODUCTS = [
  {
    id: 101,
    name: "Authentic Kerala Banana Chips",
    category: "snacks",
    image: "banana chips.png",
    price: "₹180 / 500g",
    rawPrice: 180,
    badge: "Bestseller",
    description: "Crispy golden raw Nendran banana chips fried to perfection in 100% pure cold-pressed coconut oil with light sea salt.",
    ingredients: "Raw Nendran Banana, Pure Coconut Oil, Salt, Turmeric"
  },
  {
    id: 102,
    name: "Jackfruit Chips (Chakka Upperi)",
    category: "snacks",
    image: "jackfuit chips.png",
    price: "₹220 / 500g",
    rawPrice: 220,
    badge: "Seasonal Special",
    description: "Crispy sliced ripe-raw raw jackfruit chips fried in coconut oil. Naturally sweet, aromatic, and uniquely crunchy.",
    ingredients: "Selected Jackfruit, Pure Coconut Oil, Sea Salt"
  },
  {
    id: 103,
    name: "Spicy Kerala Hot Mixture",
    category: "snacks",
    image: "kerala hot mixture.png",
    price: "₹160 / 500g",
    rawPrice: 160,
    badge: "Spicy Favorite",
    description: "Rich traditional Kerala mixture blend with crispy sev, roasted peanuts, fried curry leaves, and aromatic Kerala spices.",
    ingredients: "Gram Flour, Peanuts, Curry Leaves, Chili Powder, Asafoetida, Coconut Oil"
  },
  {
    id: 104,
    name: "Crunchy Masala Chana",
    category: "snacks",
    image: "masala chana.png",
    price: "₹140 / 400g",
    rawPrice: 140,
    badge: "High Protein",
    description: "Roasted chickpeas coated in tangy South Indian chat masala and spices. The perfect guilt-free tea-time snack.",
    ingredients: "Black Chickpeas, Chili, Amchur, Black Salt, Spices"
  },
  {
    id: 105,
    name: "Yellow Special Tea Mixture",
    category: "snacks",
    image: "mixture 1 yellow.png",
    price: "₹150 / 500g",
    rawPrice: 150,
    badge: "Classic",
    description: "Golden mild crunchy mixture crafted with fine bhoondhi, roasted gram, and mild spices. Perfect with evening chai.",
    ingredients: "Gram Flour, Roasted Gram, Cashews, Mild Spices, Coconut Oil"
  },
  {
    id: 106,
    name: "Crispy Tapioca Chips (Kappa Upperi)",
    category: "snacks",
    image: "tapioca chips.png",
    price: "₹150 / 500g",
    rawPrice: 150,
    badge: "Traditional",
    description: "Thinly sliced, ultra-crispy cassava tapioca chips salted and tossed in fresh curry leaves.",
    ingredients: "Fresh Tapioca Roots, Pure Coconut Oil, Salt, Red Chili Flakes"
  },
  {
    id: 107,
    name: "Royal Dark Velvet Truffle Cake",
    category: "cakes",
    image: "hero_cake.png",
    price: "₹850 / 1 Kg",
    rawPrice: 850,
    badge: "Chef Signature",
    description: "Decadent Dutch chocolate sponge layered with rich Belgian chocolate ganache and finished with edible gold leaf.",
    ingredients: "Belgian Chocolate, Cocoa Butter, Fresh Cream, Vanilla Extract"
  },
  {
    id: 108,
    name: "Artisan Bakery Pastries Basket",
    category: "pastries",
    image: "artisan_pastries.png",
    price: "₹380 / Box of 6",
    rawPrice: 380,
    badge: "Fresh Daily",
    description: "Assortment of fresh butter croissants, fruit tarts, almond pastries, and chocolate eclairs.",
    ingredients: "French Butter, Wheat Flour, Fresh Fruits, Pastry Cream"
  }
];

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initAmbientCanvas();
  renderOutletsGrid(OUTLETS);
  initCinematicSlider();
  initCakeCalculator();
  initToastNotifications();
  initScrollAnimations();
  setupEventListeners();
});

/* --------------------------------------------------------------------------
   HERO BACKGROUND SLIDER
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const bgSlider = document.getElementById("hero-bg-slider");
  if (!bgSlider) return;

  const bgImages = [
    "banana chips.png",
    "kerala hot mixture.png",
    "hero_cake.png",
    "masala chana.png",
    "tapioca chips.png"
  ];

  bgSlider.innerHTML = bgImages.map((src, index) => `
    <img src="${src}" class="hero-bg-slide ${index === 0 ? 'active' : ''}" alt="Bakery Texture ${index}" />
  `).join('');

  const slides = document.querySelectorAll(".hero-bg-slide");
  if(slides.length === 0) return;
  
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 6000);
}

/* --------------------------------------------------------------------------
   3. AMBIENT PARTICLES CANVAS
   -------------------------------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    speedY: -Math.random() * 0.4 - 0.1,
    speedX: Math.sin(Math.random() * Math.PI) * 0.2,
    opacity: Math.random() * 0.5 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   4. OUTLETS RENDER & FILTERING
   -------------------------------------------------------------------------- */
function renderOutletsGrid(outletsList) {
  const grid = document.getElementById("outlets-grid");
  const countEl = document.getElementById("outlets-count");
  if (!grid) return;

  if (countEl) countEl.innerText = `${outletsList.length} Outlets Available`;

  if (outletsList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="ri-search-line" style="font-size: 3rem; color: var(--accent-gold);"></i>
        <p style="margin-top: 10px;">No outlet found matching your search. Try searching "Keezhoorkunnu" or "Kottayam".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = outletsList.map(item => `
    <div class="outlet-card ${item.isMain ? 'main-branch-card' : ''}" data-district="${item.district.toLowerCase()}">
      <div>
        <div class="outlet-header">
          <div>
            <span class="outlet-district">${item.district} District</span>
            <h3 class="outlet-name">${item.name}</h3>
          </div>
          ${item.isMain ? `<span class="badge badge-main-outlet">★ MAIN BRANCH</span>` : `<span class="badge badge-green">Open Now</span>`}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 12px; line-height: 1.5;">
          <i class="ri-map-pin-2-fill" style="color: var(--accent-gold);"></i> ${item.address}
        </p>
        <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-muted);">
          <i class="ri-time-line"></i> ${item.timing} &bull; <i class="ri-phone-line"></i> ${item.phone}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px;">
          ${item.features.map(f => `<span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px; color: var(--accent-gold-light);">${f}</span>`).join('')}
        </div>
      </div>
      <div class="outlet-actions">
        <a href="https://maps.google.com/?q=${encodeURIComponent(item.mapsQuery)}" target="_blank" class="btn btn-secondary">
          <i class="ri-direction-line"></i> Directions
        </a>
        <a href="https://wa.me/919447123456?text=${encodeURIComponent(`Hello Apsara Bakes! I want to inquire about orders at ${item.name}`)}" target="_blank" class="btn btn-primary">
          <i class="ri-whatsapp-line"></i> Order
        </a>
      </div>
    </div>
  `).join('');
}

function filterOutlets() {
  const searchVal = document.getElementById("outlet-search")?.value.toLowerCase().trim() || "";
  const activeTab = document.querySelector(".filter-chip.active")?.getAttribute("data-district") || "all";

  const filtered = OUTLETS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchVal) ||
                          item.address.toLowerCase().includes(searchVal) ||
                          item.district.toLowerCase().includes(searchVal);
    const matchesDistrict = activeTab === "all" || item.district.toLowerCase() === activeTab;
    return matchesSearch && matchesDistrict;
  });

  renderOutletsGrid(filtered);
}

/* --------------------------------------------------------------------------
   5. CINEMATIC SLIDER (PRODUCTS)
   -------------------------------------------------------------------------- */
function initCinematicSlider() {
  const sliderContainer = document.getElementById("cinematic-slider");
  const indicatorsContainer = document.getElementById("slider-indicators");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  
  if (!sliderContainer) return;

  let currentSlide = 0;
  
  // Render Slides
  sliderContainer.innerHTML = PRODUCTS.map((item, index) => `
    <div class="cinematic-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
      <div class="slide-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="slide-img" />
      </div>
      <div class="slide-content">
        <span class="slide-badge">${item.badge}</span>
        <h3 class="slide-title">${item.name}</h3>
        <p class="slide-desc">${item.description}</p>
        <div class="slide-price">${item.price}</div>
        <button class="btn btn-primary" onclick="openProductModal(${item.id})">
          <i class="ri-eye-line"></i> View Details
        </button>
      </div>
    </div>
  `).join('');

  // Render Indicators
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = PRODUCTS.map((_, index) => `
      <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
  }

  const slides = document.querySelectorAll(".cinematic-slide");
  const indicators = document.querySelectorAll(".indicator");

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    indicators.forEach(i => i.classList.remove("active"));
    
    currentSlide = (index + PRODUCTS.length) % PRODUCTS.length;
    
    slides[currentSlide].classList.add("active");
    if (indicators[currentSlide]) {
      indicators[currentSlide].classList.add("active");
    }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
  
  indicators.forEach(ind => {
    ind.addEventListener("click", (e) => {
      goToSlide(parseInt(e.target.dataset.index));
    });
  });

  // Auto Play
  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 6000);
}

/* Product Modal Detail */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const body = document.getElementById("modal-body-content");

  const whatsappMsg = `Hello Apsara Bakes! I would like to order: ${product.name} (${product.price}). Please share delivery/pickup options at Keezhoorkunnu Main Branch.`;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center;">
      <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--accent-gold); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover;" />
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <span class="badge badge-gold" style="align-self: flex-start;">${product.badge}</span>
        <h2 style="font-size: 1.8rem; color: #FFF;">${product.name}</h2>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${product.price}</div>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">${product.description}</p>
        <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; font-size: 0.85rem; color: var(--text-muted);">
          <strong style="color: var(--accent-gold);">Key Ingredients:</strong> ${product.ingredients}
        </div>
        <div style="margin-top: 10px; display: flex; gap: 12px;">
          <a href="https://wa.me/919447123456?text=${encodeURIComponent(whatsappMsg)}" target="_blank" class="btn btn-whatsapp" style="flex: 1;">
            <i class="ri-whatsapp-line"></i> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("product-modal")?.classList.remove("active");
}

/* --------------------------------------------------------------------------
   6. CUSTOM CAKE CALCULATOR
   -------------------------------------------------------------------------- */
function initCakeCalculator() {
  const flavorSelect = document.getElementById("cake-flavor");
  const weightSelect = document.getElementById("cake-weight");
  const outletSelect = document.getElementById("cake-outlet");
  const msgInput = document.getElementById("cake-message");

  if (!flavorSelect || !weightSelect) return;

  // Populate Outlet Select in calculator
  if (outletSelect) {
    outletSelect.innerHTML = OUTLETS.map(o => `
      <option value="${o.name}" ${o.isMain ? 'selected' : ''}>${o.name} (${o.district})</option>
    `).join('');
  }

  function calculate() {
    const basePrice = parseInt(flavorSelect.value || 800);
    const weightMultiplier = parseFloat(weightSelect.value || 1);
    const totalPrice = Math.round(basePrice * weightMultiplier);

    const priceEl = document.getElementById("calc-total-price");
    const summaryFlav = document.getElementById("summary-flavor");
    const summaryWeight = document.getElementById("summary-weight");
    const summaryOutlet = document.getElementById("summary-outlet");

    if (priceEl) priceEl.innerText = `₹${totalPrice}`;
    if (summaryFlav) summaryFlav.innerText = flavorSelect.options[flavorSelect.selectedIndex].text;
    if (summaryWeight) summaryWeight.innerText = `${weightSelect.value} Kg`;
    if (summaryOutlet) summaryOutlet.innerText = outletSelect ? outletSelect.options[outletSelect.selectedIndex].text : "Keezhoorkunnu Main Branch";

    // Set WhatsApp link
    const waBtn = document.getElementById("cake-wa-btn");
    if (waBtn) {
      const text = `Hello Apsara Bakes! I would like to order a Custom Celebration Cake:
- Flavour: ${flavorSelect.options[flavorSelect.selectedIndex].text}
- Weight: ${weightSelect.value} Kg
- Message on Cake: "${msgInput?.value || 'Happy Birthday!'}"
- Preferred Pickup Outlet: ${outletSelect ? outletSelect.value : 'Keezhoorkunnu Main Outlet'}
- Estimated Price: ₹${totalPrice}`;
      waBtn.href = `https://wa.me/919447123456?text=${encodeURIComponent(text)}`;
    }
  }

  flavorSelect.addEventListener("change", calculate);
  weightSelect.addEventListener("change", calculate);
  if (outletSelect) outletSelect.addEventListener("change", calculate);
  if (msgInput) msgInput.addEventListener("input", calculate);

  calculate();
}

/* --------------------------------------------------------------------------
   7. TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function initToastNotifications() {
  const messages = [
    "🔥 Fresh batch of crisp Banana Chips hot off frying at Keezhoorkunnu Branch!",
    "📍 17 Outlets across Kerala ready to serve you fresh delicacies daily!",
    "🎂 Order custom wedding & birthday cakes 24 hours in advance via WhatsApp!",
    "🌿 100% Pure Coconut Oil used for all traditional Kerala snack bakes!"
  ];

  let index = 0;
  setInterval(() => {
    showToast(messages[index]);
    index = (index + 1) % messages.length;
  }, 12000);
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="ri-sparkles-line" style="color: var(--accent-gold);"></i> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-100%)";
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/* --------------------------------------------------------------------------
   8. SCROLL ANIMATIONS & LISTENERS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}

function setupEventListeners() {
  // Mobile Nav Drawer Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.className = navLinks.classList.contains("active") ? "ri-close-line" : "ri-menu-3-line";
      }
    });
  }

  // Sticky Navbar Class on Scroll
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // District Filter Chip Clicks
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      filterOutlets();
    });
  });

  // Search input for outlets
  document.getElementById("outlet-search")?.addEventListener("input", filterOutlets);

  // Manual Flip Adjustment Control for ElSombrero2 Card
  const flipCard = document.getElementById("brand-profile-flip-card");
  if (flipCard) {
    document.querySelectorAll(".manual-flip-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        flipCard.classList.toggle("is-flipped");
      });
    });

    document.querySelectorAll(".manual-flip-back-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        flipCard.classList.remove("is-flipped");
      });
    });

    flipCard.addEventListener("click", (e) => {
      if (e.target.closest(".manual-flip-back-btn")) {
        flipCard.classList.remove("is-flipped");
      } else if (!e.target.closest(".detail-pillar-card")) {
        flipCard.classList.toggle("is-flipped");
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. LEADERSHIP PROFILE LIGHTBOX MODAL
   -------------------------------------------------------------------------- */
function openProfileModal(imgSrc, name, title, headline, quote, description) {
  const modal = document.getElementById("leadershipModal");
  if (!modal) return;

  const imgEl = document.getElementById("modalProfileImg");
  const nameEl = document.getElementById("modalProfileName");
  const titleEl = document.getElementById("modalProfileTitle");
  const headlineEl = document.getElementById("modalHeadline");
  const quoteEl = document.getElementById("modalQuote");
  const descEl = document.getElementById("modalDescription");
  const downloadBtn = document.getElementById("modalDownloadBtn");
  const tagEl = document.getElementById("modalRoleTag");

  if (imgEl) imgEl.src = imgSrc;
  if (nameEl) nameEl.innerText = name;
  if (titleEl) titleEl.innerText = title;
  if (headlineEl) headlineEl.innerText = `“${headline}”`;
  if (quoteEl) quoteEl.innerText = `“${quote}”`;
  if (descEl) descEl.innerText = description;
  if (downloadBtn) downloadBtn.href = imgSrc;
  if (tagEl) tagEl.innerText = title.toUpperCase().includes('FOUNDER') ? 'FOUNDER & MD' : 'DIRECTOR';

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProfileModal() {
  const modal = document.getElementById("leadershipModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProfileModal();
});
