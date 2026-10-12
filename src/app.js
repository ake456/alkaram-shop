import './styles.css';

const API_ROOT = 'https://dummyjson.com/products';

const fallbackProducts = [
  { id: 1, title: 'Essence Mascara Lash Princess', category: 'beauty', price: 9.99, rating: 4.7, stock: 22, thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', description: 'Mascara designed for dramatic volume and a precise finish.' },
  { id: 2, title: 'Eyeshadow Palette with Mirror', category: 'beauty', price: 19.99, rating: 4.2, stock: 38, thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg', description: 'A rich collection of blendable shades with an integrated mirror.' },
  { id: 6, title: 'Calvin Klein CK One', category: 'beauty', price: 49.99, rating: 4.4, stock: 17, thumbnail: 'https://cdn.dummyjson.com/product-images/6/thumbnail.jpg', description: 'A clean, classic fragrance for everyday confidence.' },
  { id: 7, title: 'Beef Steak', category: 'groceries', price: 12.99, rating: 4.6, stock: 41, thumbnail: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg', description: 'Premium quality cut, selected for a memorable meal.' },
  { id: 8, title: 'Cat Food', category: 'groceries', price: 8.99, rating: 4.5, stock: 29, thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg', description: 'Nourishing daily food made for happy cats.' },
  { id: 9, title: 'Cooking Oil', category: 'groceries', price: 4.99, rating: 4.1, stock: 54, thumbnail: 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg', description: 'Light, versatile cooking oil for your kitchen.' },
  { id: 78, title: 'Apple MacBook Pro 14 Inch Space Grey', category: 'laptops', price: 1699.99, rating: 4.8, stock: 18, thumbnail: 'https://cdn.dummyjson.com/product-images/78/thumbnail.jpg', description: 'Professional performance in a refined portable design.' },
  { id: 79, title: 'Asus Zenbook Pro Dual Screen Laptop', category: 'laptops', price: 1799.99, rating: 4.6, stock: 12, thumbnail: 'https://cdn.dummyjson.com/product-images/79/thumbnail.jpg', description: 'Dual-screen productivity with powerful creative tools.' },
  { id: 80, title: 'Huawei Matebook X Pro', category: 'laptops', price: 1399.99, rating: 4.5, stock: 16, thumbnail: 'https://cdn.dummyjson.com/product-images/80/thumbnail.jpg', description: 'Elegant lightweight laptop for work and study.' },
  { id: 95, title: 'Mobile Phone Case', category: 'mobile-accessories', price: 8.99, rating: 4.4, stock: 64, thumbnail: 'https://cdn.dummyjson.com/product-images/95/thumbnail.jpg', description: 'Protective case with a slim, comfortable grip.' },
  { id: 96, title: 'Apple AirPods', category: 'mobile-accessories', price: 129.99, rating: 4.6, stock: 31, thumbnail: 'https://cdn.dummyjson.com/product-images/96/thumbnail.jpg', description: 'Wireless sound with a compact charging case.' },
  { id: 100, title: 'Selfie Stick Monopod', category: 'mobile-accessories', price: 19.99, rating: 4.0, stock: 47, thumbnail: 'https://cdn.dummyjson.com/product-images/100/thumbnail.jpg', description: 'Capture your best moments from the perfect angle.' },
  { id: 35, title: 'Classic T-Shirt', category: 'mens-shirts', price: 24.99, rating: 4.3, stock: 35, thumbnail: 'https://cdn.dummyjson.com/product-images/35/thumbnail.jpg', description: 'Everyday comfort cut from soft, durable fabric.' },
  { id: 37, title: 'Slim Fit Shirt', category: 'mens-shirts', price: 34.99, rating: 4.5, stock: 24, thumbnail: 'https://cdn.dummyjson.com/product-images/37/thumbnail.jpg', description: 'Sharp lines and an easy fit for every occasion.' },
  { id: 155, title: 'Knitted Rug', category: 'furniture', price: 159.99, rating: 4.4, stock: 12, thumbnail: 'https://cdn.dummyjson.com/product-images/155/thumbnail.jpg', description: 'Soft texture and calm character for your space.' },
  { id: 161, title: 'Wooden Bathroom', category: 'furniture', price: 799.99, rating: 4.7, stock: 7, thumbnail: 'https://cdn.dummyjson.com/product-images/161/thumbnail.jpg', description: 'Warm wooden detailing with practical storage.' }
];

const featuredSlugs = ['beauty', 'laptops', 'groceries', 'mobile-accessories', 'mens-shirts', 'furniture'];
const fallbackCategories = featuredSlugs.map((slug) => ({ slug, name: slug }));

const categoryArabic = {
  beauty: 'الجمال والعناية',
  laptops: 'لابتوبات',
  groceries: 'بقالة',
  'mobile-accessories': 'إكسسوارات الموبايل',
  'mens-shirts': 'قمصان رجالية',
  furniture: 'أثاث',
  smartphones: 'هواتف ذكية',
  'mens-watches': 'ساعات رجالية',
  'womens-watches': 'ساعات نسائية',
  'home-decoration': 'ديكور المنزل',
  fragrances: 'عطور'
};

const translations = {
  ar: {
    home: 'الرئيسية', categories: 'الأقسام', products: 'المنتجات', about: 'عن الكرم', contact: 'تواصل معنا',
    searchPlaceholder: 'ابحث عن منتج أو فئة...', shopNow: 'تسوّق الآن', browseAll: 'استكشف المنتجات',
    heroEyebrow: 'اختيارات اليوم — وصلت للتو', heroTitle: 'كل ما تحبه، <em>بلمسة كرم.</em>',
    heroText: 'تسوّق منتجات موثوقة، أسعار واضحة، وتجربة أسرع من أول بحث حتى باب المنزل.',
    delivery: 'شحن سريع وآمن', deliveryText: 'توصيل إلى بابك', trusted: 'منتجات مختارة', trustedText: 'من مصادر موثوقة', support: 'دعم حقيقي', supportText: 'متاح 7 أيام بالأسبوع',
    browseTitle: 'تسوّق حسب القسم', browseText: 'اختيارات مرتبة لتصل لما تحتاجه في ثوانٍ.',
    featuredTitle: 'الأكثر طلبًا', featuredText: 'منتجات مختارة بعناية من فئات الكرم المميزة.',
    viewAll: 'عرض الكل', add: 'أضف للسلة', added: 'تمت الإضافة إلى السلة', details: 'تفاصيل المنتج',
    inStock: 'متوفر', item: 'منتج', items: 'منتجات', all: 'الكل', cart: 'سلة المشتريات',
    cartEmpty: 'سلتك ما زالت فارغة', cartEmptyText: 'أضف ما يعجبك وارجع هنا لمراجعة طلبك.', continueShopping: 'مواصلة التسوق',
    subtotal: 'الإجمالي الفرعي', shipping: 'الشحن', free: 'مجاني', total: 'الإجمالي', checkout: 'إتمام الطلب',
    checkoutReady: 'راجع بيانات التوصيل لتأكيد طلبك.', checkoutKicker: 'دفع عند الاستلام', checkoutTitle: 'إتمام طلب المراجعة', checkoutText: 'أدخل بياناتك لإرسال الطلب. لا يوجد دفع إلكتروني في هذه النسخة.', deliveryName: 'اسم المستلم', deliveryAddress: 'عنوان التسليم', orderSummary: 'ملخص الطلب', placeOrder: 'تأكيد الطلب', orderConfirmed: 'تم تسجيل طلب المراجعة رقم {id}. سنتواصل معك لتأكيد التوصيل.',
    aboutTitle: 'تسوّق أذكى، ببساطة.', aboutText: 'الكرم متجر حديث يجمع لك اختيارات يومك في مكان واحد — من التقنيات والعناية الشخصية إلى البيت والمطبخ.',
    aboutBullet1: 'بيانات منتجات مباشرة ومحدّثة', aboutBullet2: 'سلة واضحة ومرنة', aboutBullet3: 'واجهة تناسب العربية والإنجليزية',
    contactKicker: 'نحن قريبون منك', contactTitle: 'كيف يمكننا مساعدتك؟', contactText: 'أرسل لنا رسالتك، وسيرد فريق الكرم خلال يوم عمل واحد.',
    phone: 'الهاتف', email: 'البريد الإلكتروني', address: 'العنوان', hours: 'ساعات العمل',
    addressValue: 'القاهرة، مصر — خدمة عملاء أونلاين', hoursValue: 'يوميًا، 10 ص — 10 م',
    nameLabel: 'الاسم الكامل', emailLabel: 'البريد الإلكتروني', messageLabel: 'رسالتك', send: 'إرسال الرسالة',
    formSuccess: 'وصلتنا رسالتك بنجاح. شكرًا لتواصلك مع الكرم!', formError: 'من فضلك املأ البيانات المطلوبة بشكل صحيح.',
    footerText: 'تجربة تسوق يومية، مرتبة على ذوقك.', footerLinks: 'روابط سريعة', customerCare: 'خدمة العملاء',
    returns: 'الاستبدال والاسترجاع', shippingInfo: 'معلومات الشحن', privacy: 'الخصوصية', rights: '© 2026 الكرم. جميع الحقوق محفوظة.',
    language: 'English', themeLight: 'الوضع النهاري', themeDark: 'الوضع الليلي', noResults: 'لم نجد منتجات تطابق بحثك.',
    loading: 'نجهّز اختيارات الكرم...', productCount: 'منتج مختار', categoriesCount: 'أقسام متنوعة',
    offer: 'عرض الكرم', discount: 'خصم حتى 20%', featured: 'مختار لك', quantity: 'الكمية', close: 'إغلاق',
    menu: 'القائمة', addMore: 'أضف منتجات للمتابعة', madeForYou: 'مصمم لوقتك'
  },
  en: {
    home: 'Home', categories: 'Categories', products: 'Products', about: 'About', contact: 'Contact',
    searchPlaceholder: 'Search products or categories...', shopNow: 'Shop now', browseAll: 'Browse products',
    heroEyebrow: 'Today’s edit — just arrived', heroTitle: 'Everything you love, <em>with Karam.</em>',
    heroText: 'Trusted products, transparent prices, and a journey that feels effortless from search to doorstep.',
    delivery: 'Quick & secure', deliveryText: 'Delivered to your door', trusted: 'Curated products', trustedText: 'From trusted sources', support: 'Real support', supportText: 'Here 7 days a week',
    browseTitle: 'Shop by category', browseText: 'Thoughtful shortcuts to what you need in seconds.',
    featuredTitle: 'Most wanted', featuredText: 'A considered edit from Al Karam’s most-loved categories.',
    viewAll: 'View all', add: 'Add to cart', added: 'Added to your cart', details: 'Product details',
    inStock: 'In stock', item: 'item', items: 'items', all: 'All', cart: 'Your cart',
    cartEmpty: 'Your cart is still empty', cartEmptyText: 'Add something you love, then return here to review your order.', continueShopping: 'Keep shopping',
    subtotal: 'Subtotal', shipping: 'Shipping', free: 'Free', total: 'Total', checkout: 'Checkout',
    checkoutReady: 'Review your delivery details to confirm the order.', checkoutKicker: 'Cash on delivery', checkoutTitle: 'Confirm your review order', checkoutText: 'Add your delivery details to send the order. This version does not take online payments.', deliveryName: 'Recipient name', deliveryAddress: 'Delivery address', orderSummary: 'Order summary', placeOrder: 'Confirm order', orderConfirmed: 'Review order {id} has been recorded. We will contact you to confirm delivery.',
    aboutTitle: 'Smarter shopping, simply.', aboutText: 'Al Karam is a modern store that brings your day-to-day favourites together — from tech and personal care to home essentials.',
    aboutBullet1: 'Live, up-to-date product data', aboutBullet2: 'A clear, flexible cart', aboutBullet3: 'A bilingual Arabic / English interface',
    contactKicker: 'We are close by', contactTitle: 'How can we help?', contactText: 'Send us a message and the Al Karam team will reply within one business day.',
    phone: 'Phone', email: 'Email', address: 'Address', hours: 'Hours',
    addressValue: 'Cairo, Egypt — Online customer care', hoursValue: 'Daily, 10 AM — 10 PM',
    nameLabel: 'Full name', emailLabel: 'Email address', messageLabel: 'Your message', send: 'Send message',
    formSuccess: 'Your message has arrived. Thank you for contacting Al Karam!', formError: 'Please complete the required fields correctly.',
    footerText: 'Your everyday shopping, edited for you.', footerLinks: 'Quick links', customerCare: 'Customer care',
    returns: 'Returns & exchanges', shippingInfo: 'Shipping information', privacy: 'Privacy', rights: '© 2026 Al Karam. All rights reserved.',
    language: 'العربية', themeLight: 'Light mode', themeDark: 'Dark mode', noResults: 'No products match your search.',
    loading: 'Curating Al Karam picks...', productCount: 'handpicked products', categoriesCount: 'distinct departments',
    offer: 'Karam offer', discount: 'Up to 20% off', featured: 'Picked for you', quantity: 'Quantity', close: 'Close',
    menu: 'Menu', addMore: 'Add items to continue', madeForYou: 'Made for your day'
  }
};

const icons = {
  bag: '<path d="M6.5 8.5h11l1 11h-13l1-11Z"/><path d="M9 9V6.8a3 3 0 0 1 6 0V9"/>',
  search: '<circle cx="10.8" cy="10.8" r="5.3"/><path d="m15 15 4.2 4.2"/>',
  heart: '<path d="M20.8 8.5c0 5.7-8.8 10.1-8.8 10.1S3.2 14.2 3.2 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.8 1.5Z"/>',
  moon: '<path d="M20 15.3A8.2 8.2 0 0 1 8.7 4 8.2 8.2 0 1 0 20 15.3Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.3 3.1 5.3 3.1 8.5s-.8 6.2-3.1 8.5c-2.3-2.3-3.1-5.3-3.1-8.5s.8-6.2 3.1-8.5Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  truck: '<path d="M3 6h11v10H3zM14 9h3.4l2.6 3v4H14z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/>',
  shield: '<path d="M12 3 19 6v5c0 4.6-3 7.8-7 10-4-2.2-7-5.4-7-10V6l7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.7-.9L4 19.5l1.3-3.6A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  trash: '<path d="M5 7h14M9 7V5h6v2M7.5 7l.8 13h7.4l.8-13M10 10.5v6M14 10.5v6"/>',
  phone: '<path d="M7 3h3l1.5 4-2 1.6a15 15 0 0 0 5.9 5.9l1.6-2 4 1.5v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 5c0-1.1.9-2 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
  spark: '<path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/>'
};

function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ''}</svg>`;
}

function safeLocal(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

const state = {
  lang: localStorage.getItem('alkaram-lang') || 'ar',
  theme: localStorage.getItem('alkaram-theme') || 'light',
  categories: [],
  products: [],
  cart: safeLocal('alkaram-cart', []),
  activeCategory: 'all',
  search: '',
  loading: true,
  usingFallback: false,
  cartOpen: false,
  menuOpen: false,
  detailId: null,
  checkoutOpen: false
};

const app = document.querySelector('#app');
let heroTimer;

function t(key) {
  return translations[state.lang][key] ?? key;
}

function categoryName(slug) {
  if (state.lang === 'ar') return categoryArabic[slug] || slug.replaceAll('-', ' ');
  return slug.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categoryIcon(slug) {
  const map = { beauty: '✦', laptops: '⌘', groceries: '◒', 'mobile-accessories': '◈', 'mens-shirts': '◫', furniture: '⌂' };
  return map[slug] || '✦';
}

function formatPrice(value) {
  return new Intl.NumberFormat(state.lang === 'ar' ? 'ar-EG' : 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(Number(value || 0));
}

function persist() {
  localStorage.setItem('alkaram-cart', JSON.stringify(state.cart));
  localStorage.setItem('alkaram-lang', state.lang);
  localStorage.setItem('alkaram-theme', state.theme);
}

function applyDocumentSettings() {
  const root = document.documentElement;
  root.lang = state.lang;
  root.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  root.dataset.theme = state.theme;
  document.title = state.lang === 'ar' ? 'الكرم | Al Karam' : 'Al Karam | الكرم';
}

function getCartCount() {
  return state.cart.reduce((sum, entry) => sum + entry.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce((sum, entry) => sum + entry.quantity * Number(entry.price), 0);
}

function getProduct(id) {
  return state.products.find((product) => String(product.id) === String(id)) || fallbackProducts.find((product) => String(product.id) === String(id));
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function safeImageURL(value) {
  const fallback = 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg';
  try {
    const url = new URL(value || fallback);
    return url.protocol === 'https:' ? url.href : fallback;
  } catch {
    return fallback;
  }
}

function productImage(product) {
  return safeImageURL(product?.thumbnail || product?.images?.[0]);
}

function navLink(label, hash) {
  return `<a href="${hash}" class="nav-link">${label}</a>`;
}

function headerMarkup() {
  const cartCount = getCartCount();
  return `
    <header class="site-header">
      <div class="announcement"><span>${icon('spark')}</span><strong>${state.lang === 'ar' ? 'توصيل مجاني للطلبات فوق 50 دولار' : 'Free delivery on orders above $50'}</strong><span class="announcement-sep">•</span><span>${state.lang === 'ar' ? 'أكثر من 5,000 منتج بين يديك' : '5,000+ products at your fingertips'}</span></div>
      <div class="topbar shell">
        <a class="brand" href="#home" aria-label="Al Karam home">
          <span class="brand-mark">ك</span>
          <span class="brand-copy"><b>الكرم</b><small>AL KARAM SHOP</small></span>
        </a>
        <div class="header-search">
          ${icon('search')}
          <input id="searchInput" type="search" placeholder="${t('searchPlaceholder')}" value="${escapeHTML(state.search)}" autocomplete="off" />
          <kbd>⌘ K</kbd>
        </div>
        <div class="header-actions">
          <button class="icon-button desktop-only" data-action="toggle-theme" aria-label="${state.theme === 'dark' ? t('themeLight') : t('themeDark')}">${icon(state.theme === 'dark' ? 'sun' : 'moon')}</button>
          <button class="language-button desktop-only" data-action="toggle-lang">${icon('globe')}<span>${t('language')}</span></button>
          <button class="icon-button cart-trigger" data-action="toggle-cart" aria-label="${t('cart')}">${icon('bag')}<span class="cart-count">${cartCount}</span></button>
          <button class="icon-button mobile-only" data-action="toggle-menu" aria-label="${t('menu')}">${icon(state.menuOpen ? 'x' : 'menu')}</button>
        </div>
      </div>
      <nav class="primary-nav ${state.menuOpen ? 'open' : ''}">
        <div class="shell nav-inner">
          <a class="category-pill" href="#categories"><span class="category-dot"></span>${t('categories')}</a>
          <div class="nav-links">
            ${navLink(t('home'), '#home')}
            ${navLink(t('products'), '#products')}
            ${navLink(t('about'), '#about')}
            ${navLink(t('contact'), '#contact')}
          </div>
          <div class="nav-tools mobile-menu-tools">
            <button class="nav-utility" data-action="toggle-theme">${icon(state.theme === 'dark' ? 'sun' : 'moon')}${state.theme === 'dark' ? t('themeLight') : t('themeDark')}</button>
            <button class="nav-utility" data-action="toggle-lang">${icon('globe')}${t('language')}</button>
          </div>
        </div>
      </nav>
    </header>`;
}

function heroMarkup() {
  const slides = [
    { image: 'banner_Hero1.jpg', label: state.lang === 'ar' ? 'تقنيات وترفيه' : 'Tech & play' },
    { image: 'banner_Hero2.jpg', label: state.lang === 'ar' ? 'بيت أهدأ' : 'A calmer home' },
    { image: 'banner_Hero3.jpg', label: state.lang === 'ar' ? 'صوتك المفضل' : 'Your favourite sound' }
  ];
  return `
    <section id="home" class="hero-section">
      <div class="hero-slides">
        ${slides.map((slide, index) => `<div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image:linear-gradient(90deg, var(--hero-fade) 0%, var(--hero-fade) 40%, transparent 78%), url('/assets/${slide.image}')" data-label="${slide.label}"></div>`).join('')}
      </div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow"><i></i>${t('heroEyebrow')}</span>
          <h1>${t('heroTitle')}</h1>
          <p>${t('heroText')}</p>
          <div class="hero-actions">
            <a href="#products" class="button button-primary">${t('shopNow')} ${icon('arrow')}</a>
            <a href="#categories" class="button button-secondary">${t('browseAll')}</a>
          </div>
          <div class="hero-note"><span class="note-avatar">AK</span><span>${t('madeForYou')}</span><span class="note-line"></span><b>${t('discount')}</b></div>
        </div>
        <div class="hero-corner-card">
          <span>${t('offer')}</span>
          <strong>${t('discount')}</strong>
          <small>${state.lang === 'ar' ? 'على منتجات مختارة اليوم' : 'On selected items today'}</small>
        </div>
      </div>
      <div class="hero-controls shell">
        <div class="slide-dots"><button class="hero-dot active" aria-label="slide 1"></button><button class="hero-dot" aria-label="slide 2"></button><button class="hero-dot" aria-label="slide 3"></button></div>
        <span>${state.lang === 'ar' ? 'اكتشف أكثر' : 'Discover more'} <span class="scroll-arrow">↓</span></span>
      </div>
    </section>`;
}

function benefitsMarkup() {
  const benefits = [
    ['truck', t('delivery'), t('deliveryText')],
    ['shield', t('trusted'), t('trustedText')],
    ['chat', t('support'), t('supportText')]
  ];
  return `<section class="benefits shell">${benefits.map(([name, title, text]) => `<div class="benefit"><span class="benefit-icon">${icon(name)}</span><span><b>${title}</b><small>${text}</small></span></div>`).join('')}</section>`;
}

function resolvedCategories() {
  const catalogue = state.categories.length ? state.categories : fallbackCategories;
  const wanted = featuredSlugs.map((slug) => catalogue.find((entry) => entry.slug === slug)).filter(Boolean);
  return wanted.length ? wanted : fallbackCategories;
}

function categoryMarkup() {
  const categories = resolvedCategories();
  return `
    <section id="categories" class="section shell categories-section">
      <div class="section-heading section-heading-inline">
        <div><span class="section-kicker">${state.lang === 'ar' ? 'اختيارات مرتبة' : 'Thoughtful shortcuts'}</span><h2>${t('browseTitle')}</h2><p>${t('browseText')}</p></div>
        <button class="text-link" data-action="show-all">${t('viewAll')} ${icon('arrow')}</button>
      </div>
      <div class="category-rail">
        ${categories.map((category, index) => {
          const count = state.products.filter((product) => product.category === category.slug).length || Math.max(6, 18 - index * 2);
          return `<button class="category-card ${state.activeCategory === category.slug ? 'selected' : ''}" data-category="${category.slug}">
            <span class="category-number">0${index + 1}</span><span class="category-glyph">${categoryIcon(category.slug)}</span>
            <b>${categoryName(category.slug)}</b><small>${count} ${t('items')}</small><span class="category-go">${icon('arrow')}</span>
          </button>`;
        }).join('')}
      </div>
    </section>`;
}

function stars(rating) {
  const filled = Math.round(Number(rating || 0));
  return `<span class="stars" aria-label="${rating} out of 5">${Array.from({ length: 5 }, (_, index) => `<span class="${index < filled ? 'filled' : ''}">★</span>`).join('')}</span>`;
}

function productCard(product) {
  const inCart = state.cart.some((entry) => entry.id === product.id);
  const id = escapeHTML(product.id);
  const title = escapeHTML(product.title);
  const category = escapeHTML(categoryName(product.category));
  return `<article class="product-card" data-product="${id}" tabindex="0">
    <div class="product-media"><span class="product-tag">${t('featured')}</span><button class="wish-button" aria-label="Add to wishlist">${icon('heart')}</button><img src="${productImage(product)}" alt="${title}" loading="lazy" /></div>
    <div class="product-info"><span class="product-category">${category}</span><h3>${title}</h3><div class="product-meta">${stars(product.rating)}<span>${Number(product.rating || 0).toFixed(1)}</span><i></i><span>${t('inStock')}</span></div>
    <div class="product-bottom"><strong>${formatPrice(product.price)}</strong><button class="add-button ${inCart ? 'in-cart' : ''}" data-add="${id}">${inCart ? icon('bag') : icon('plus')}<span>${inCart ? t('added') : t('add')}</span></button></div></div>
  </article>`;
}

function loadingCards() {
  return Array.from({ length: 8 }, () => '<div class="skeleton-card"><div></div><span></span><i></i><b></b></div>').join('');
}

function filteredProducts() {
  const needle = state.search.trim().toLowerCase();
  return state.products.filter((product) => {
    const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
    const searchable = `${product.title} ${product.category} ${categoryName(product.category)}`.toLowerCase();
    return matchesCategory && (!needle || searchable.includes(needle));
  });
}

function productSectionMarkup() {
  const products = filteredProducts();
  const tabs = [{ slug: 'all', name: t('all') }, ...resolvedCategories().map((category) => ({ slug: category.slug, name: categoryName(category.slug) }))];
  return `
    <section id="products" class="section shell products-section">
      <div class="section-heading products-heading"><div><span class="section-kicker">${state.lang === 'ar' ? 'بيانات مباشرة من الكتالوج' : 'Live catalogue data'}</span><h2>${t('featuredTitle')}</h2><p>${t('featuredText')}</p></div><div class="data-status"><span></span>${state.usingFallback ? (state.lang === 'ar' ? 'بيانات جاهزة للعرض' : 'Ready to browse') : (state.lang === 'ar' ? 'الكتالوج متصل' : 'Catalogue connected')}</div></div>
      <div class="filter-row" role="tablist">${tabs.map((tab) => `<button class="filter-pill ${state.activeCategory === tab.slug ? 'active' : ''}" data-category="${tab.slug}">${tab.name}</button>`).join('')}</div>
      <div id="productsGrid" class="products-grid">${state.loading ? loadingCards() : products.length ? products.map(productCard).join('') : `<div class="empty-products"><span>${icon('search')}</span><h3>${t('noResults')}</h3><button class="button button-secondary" data-action="clear-search">${t('viewAll')}</button></div>`}</div>
    </section>`;
}

function aboutMarkup() {
  return `<section id="about" class="about-section"><div class="shell about-layout"><div class="about-visual"><div class="about-rings"></div><div class="about-panel"><span class="panel-icon">${icon('bag')}</span><b>AL KARAM</b><strong>01 / 01</strong></div><span class="about-sticker">${state.lang === 'ar' ? 'اختيار واضح' : 'A clear choice'}</span></div><div class="about-copy"><span class="section-kicker">AL KARAM — EST. 2026</span><h2>${t('aboutTitle')}</h2><p>${t('aboutText')}</p><ul><li>${icon('shield')}<span>${t('aboutBullet1')}</span></li><li>${icon('bag')}<span>${t('aboutBullet2')}</span></li><li>${icon('globe')}<span>${t('aboutBullet3')}</span></li></ul><a href="#contact" class="button button-dark">${t('contact')} ${icon('arrow')}</a></div></div></section>`;
}

function contactInfo(iconName, label, value, href = '') {
  const content = href ? `<a href="${href}">${value}</a>` : `<span>${value}</span>`;
  return `<div class="contact-info"><span class="contact-icon">${icon(iconName)}</span><div><small>${label}</small>${content}</div></div>`;
}

function contactMarkup() {
  return `<section id="contact" class="contact-section shell"><div class="contact-intro"><span class="section-kicker">${t('contactKicker')}</span><h2>${t('contactTitle')}</h2><p>${t('contactText')}</p><div class="contact-list">${contactInfo('phone', t('phone'), '+20 100 000 0000', 'tel:+201000000000')}${contactInfo('mail', t('email'), 'hello@alkaram.shop', 'mailto:hello@alkaram.shop')}${contactInfo('pin', t('address'), t('addressValue'))}${contactInfo('clock', t('hours'), t('hoursValue'))}</div></div><form id="contactForm" class="contact-form" novalidate><div class="form-title"><span>${icon('spark')}</span><div><b>${state.lang === 'ar' ? 'اترك رسالة' : 'Leave a note'}</b><small>${state.lang === 'ar' ? 'سنتواصل معك سريعًا' : 'We will be in touch shortly'}</small></div></div><label>${t('nameLabel')}<input name="name" required minlength="2" /></label><label>${t('emailLabel')}<input type="email" name="email" required /></label><label>${t('messageLabel')}<textarea name="message" rows="4" required minlength="10"></textarea></label><button class="button button-primary form-submit" type="submit">${t('send')} ${icon('arrow')}</button><p id="formMessage" class="form-message" aria-live="polite"></p></form></section>`;
}

function footerMarkup() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><a class="brand" href="#home"><span class="brand-mark">ك</span><span class="brand-copy"><b>الكرم</b><small>AL KARAM SHOP</small></span></a><p>${t('footerText')}</p><div class="socials"><a href="#home" aria-label="Instagram">ig</a><a href="#home" aria-label="Facebook">f</a><a href="#home" aria-label="X">x</a></div></div><div><h3>${t('footerLinks')}</h3><a href="#home">${t('home')}</a><a href="#categories">${t('categories')}</a><a href="#products">${t('products')}</a><a href="#about">${t('about')}</a></div><div><h3>${t('customerCare')}</h3><a href="#contact">${t('contact')}</a><a href="#contact">${t('returns')}</a><a href="#contact">${t('shippingInfo')}</a><a href="#contact">${t('privacy')}</a></div><div class="footer-newsletter"><h3>${state.lang === 'ar' ? 'رسائل الكرم' : 'Karam notes'}</h3><p>${state.lang === 'ar' ? 'عروض هادئة، اختيارات أذكى.' : 'Quiet offers, smarter picks.'}</p><div><input placeholder="Email" type="email" aria-label="Email"/><button aria-label="Subscribe">${icon('arrow')}</button></div></div></div><div class="shell footer-bottom"><span>${t('rights')}</span><span>DummyJSON powered catalogue</span></div></footer>`;
}

function cartMarkup() {
  const hasItems = state.cart.length > 0;
  return `<div class="cart-overlay ${state.cartOpen ? 'visible' : ''}" data-action="close-cart"></div><aside class="cart-drawer ${state.cartOpen ? 'open' : ''}" aria-label="${t('cart')}"><div class="drawer-header"><div><span class="section-kicker">${getCartCount()} ${getCartCount() === 1 ? t('item') : t('items')}</span><h2>${t('cart')}</h2></div><button class="icon-button" data-action="close-cart">${icon('x')}</button></div>${hasItems ? `<div class="cart-items">${state.cart.map((entry) => `<div class="cart-item"><img src="${productImage(entry)}" alt="${escapeHTML(entry.title)}"/><div><b>${escapeHTML(entry.title)}</b><small>${formatPrice(entry.price)}</small><div class="quantity-control"><button data-quantity="${entry.id}" data-delta="-1" aria-label="decrease">${icon('minus')}</button><span>${entry.quantity}</span><button data-quantity="${entry.id}" data-delta="1" aria-label="increase">${icon('plus')}</button></div></div><button class="remove-button" data-remove="${entry.id}" aria-label="remove">${icon('trash')}</button></div>`).join('')}</div><div class="cart-summary"><div><span>${t('subtotal')}</span><b>${formatPrice(getCartTotal())}</b></div><div><span>${t('shipping')}</span><b class="free">${t('free')}</b></div><div class="cart-total"><span>${t('total')}</span><strong>${formatPrice(getCartTotal())}</strong></div><button class="button button-primary checkout-button" data-action="checkout">${t('checkout')} ${icon('arrow')}</button></div>` : `<div class="cart-empty"><span>${icon('bag')}</span><h3>${t('cartEmpty')}</h3><p>${t('cartEmptyText')}</p><button class="button button-primary" data-action="close-cart">${t('continueShopping')}</button></div>`}</aside>`;
}

function checkoutMarkup() {
  if (!state.checkoutOpen || !state.cart.length) return '';
  const orderLines = state.cart.map((entry) => `<div><span>${escapeHTML(entry.title)} <small>× ${entry.quantity}</small></span><b>${formatPrice(entry.price * entry.quantity)}</b></div>`).join('');
  return `<div class="modal-backdrop" data-action="close-checkout"></div><section class="checkout-modal" aria-modal="true" role="dialog"><button class="modal-close icon-button" data-action="close-checkout">${icon('x')}</button><div class="checkout-copy"><span class="section-kicker">${t('checkoutKicker')}</span><h2>${t('checkoutTitle')}</h2><p>${t('checkoutText')}</p><form id="checkoutForm" novalidate><label>${t('deliveryName')}<input name="customerName" required minlength="2" autocomplete="name" /></label><label>${t('phone')}<input name="phone" type="tel" required minlength="7" autocomplete="tel" /></label><label>${t('deliveryAddress')}<textarea name="address" rows="3" required minlength="8" autocomplete="street-address"></textarea></label><button type="submit" class="button button-primary checkout-confirm">${t('placeOrder')} ${icon('arrow')}</button><p id="checkoutMessage" class="form-message" aria-live="polite"></p></form></div><aside class="checkout-summary"><span class="section-kicker">${t('orderSummary')}</span><div class="checkout-lines">${orderLines}</div><div class="checkout-total"><span>${t('total')}</span><strong>${formatPrice(getCartTotal())}</strong></div><small>${t('checkoutKicker')} · ${t('free')} ${t('shipping')}</small></aside></section>`;
}

function detailMarkup() {
  const product = state.detailId ? getProduct(state.detailId) : null;
  if (!product) return '';
  const title = escapeHTML(product.title);
  const description = escapeHTML(product.description || (state.lang === 'ar' ? 'منتج مختار بعناية ليضيف قيمة حقيقية ليومك.' : 'A considered product chosen to add real value to your day.'));
  return `<div class="modal-backdrop" data-action="close-detail"></div><section class="product-modal" aria-modal="true" role="dialog"><button class="modal-close icon-button" data-action="close-detail">${icon('x')}</button><div class="modal-image"><img src="${productImage(product)}" alt="${title}"/><span>${t('featured')}</span></div><div class="modal-copy"><span class="product-category">${escapeHTML(categoryName(product.category))}</span><h2>${title}</h2><div class="modal-rating">${stars(product.rating)} <b>${Number(product.rating || 0).toFixed(1)}</b></div><strong class="modal-price">${formatPrice(product.price)}</strong><p>${description}</p><div class="stock-line"><span></span>${t('inStock')} · ${product.stock || 20} ${t('items')}</div><button class="button button-primary modal-add" data-add="${escapeHTML(product.id)}">${icon('bag')}${t('add')}</button></div></section>`;
}

function appMarkup() {
  return `${headerMarkup()}<main>${heroMarkup()}${benefitsMarkup()}${categoryMarkup()}${productSectionMarkup()}${aboutMarkup()}${contactMarkup()}</main>${footerMarkup()}${cartMarkup()}${checkoutMarkup()}${detailMarkup()}<div id="toast" class="toast" role="status" aria-live="polite"></div>`;
}

function render() {
  applyDocumentSettings();
  app.innerHTML = appMarkup();
  bindEvents();
  startHero();
}

function bindEvents() {
  document.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', () => handleAction(element.dataset.action)));
  document.querySelectorAll('[data-category]').forEach((element) => element.addEventListener('click', () => selectCategory(element.dataset.category)));
  document.querySelectorAll('[data-add]').forEach((element) => element.addEventListener('click', (event) => { event.stopPropagation(); addToCart(element.dataset.add); }));
  document.querySelectorAll('[data-product]').forEach((element) => {
    element.addEventListener('click', (event) => { if (!event.target.closest('button')) openDetails(element.dataset.product); });
    element.addEventListener('keydown', (event) => { if (event.key === 'Enter') openDetails(element.dataset.product); });
  });
  document.querySelectorAll('[data-quantity]').forEach((element) => element.addEventListener('click', () => updateQuantity(element.dataset.quantity, Number(element.dataset.delta))));
  document.querySelectorAll('[data-remove]').forEach((element) => element.addEventListener('click', () => removeFromCart(element.dataset.remove)));
  const searchInput = document.querySelector('#searchInput');
  if (searchInput) searchInput.addEventListener('input', (event) => { state.search = event.target.value; updateProductGrid(); });
  const form = document.querySelector('#contactForm');
  if (form) form.addEventListener('submit', submitContact);
  const checkoutForm = document.querySelector('#checkoutForm');
  if (checkoutForm) checkoutForm.addEventListener('submit', submitCheckout);
  document.querySelectorAll('.hero-dot').forEach((dot, index) => dot.addEventListener('click', () => showHeroSlide(index)));
}

function handleAction(action) {
  if (action === 'toggle-theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; persist(); render(); }
  if (action === 'toggle-lang') { state.lang = state.lang === 'ar' ? 'en' : 'ar'; persist(); render(); }
  if (action === 'toggle-cart') { state.cartOpen = !state.cartOpen; render(); }
  if (action === 'close-cart') { state.cartOpen = false; render(); }
  if (action === 'toggle-menu') { state.menuOpen = !state.menuOpen; render(); }
  if (action === 'show-all' || action === 'clear-search') { state.activeCategory = 'all'; state.search = ''; render(); requestAnimationFrame(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })); }
  if (action === 'checkout') { if (!state.cart.length) showToast(t('addMore')); else { state.cartOpen = false; state.checkoutOpen = true; render(); } }
  if (action === 'close-checkout') { state.checkoutOpen = false; render(); }
  if (action === 'close-detail') { state.detailId = null; render(); }
}

function selectCategory(slug) {
  state.activeCategory = slug;
  state.menuOpen = false;
  render();
  requestAnimationFrame(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

function updateProductGrid() {
  const grid = document.querySelector('#productsGrid');
  if (!grid) return;
  const products = filteredProducts();
  grid.innerHTML = products.length ? products.map(productCard).join('') : `<div class="empty-products"><span>${icon('search')}</span><h3>${t('noResults')}</h3><button class="button button-secondary" data-action="clear-search">${t('viewAll')}</button></div>`;
  document.querySelectorAll('[data-add]').forEach((element) => element.addEventListener('click', (event) => { event.stopPropagation(); addToCart(element.dataset.add); }));
  document.querySelectorAll('[data-product]').forEach((element) => {
    element.addEventListener('click', (event) => { if (!event.target.closest('button')) openDetails(element.dataset.product); });
    element.addEventListener('keydown', (event) => { if (event.key === 'Enter') openDetails(element.dataset.product); });
  });
  document.querySelectorAll('#productsGrid [data-action]').forEach((element) => element.addEventListener('click', () => handleAction(element.dataset.action)));
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const existing = state.cart.find((entry) => String(entry.id) === String(product.id));
  if (existing) existing.quantity += 1;
  else state.cart.push({ ...product, quantity: 1 });
  persist();
  render();
  showToast(t('added'));
}

function updateQuantity(id, delta) {
  const entry = state.cart.find((item) => String(item.id) === String(id));
  if (!entry) return;
  entry.quantity += delta;
  if (entry.quantity <= 0) state.cart = state.cart.filter((item) => String(item.id) !== String(id));
  persist();
  render();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => String(item.id) !== String(id));
  persist();
  render();
}

function openDetails(id) {
  state.detailId = id;
  render();
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3200);
}

function submitContact(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.querySelector('#formMessage');
  if (!form.checkValidity()) {
    message.textContent = t('formError');
    message.className = 'form-message error';
    form.reportValidity();
    return;
  }
  form.reset();
  message.textContent = t('formSuccess');
  message.className = 'form-message success';
}

function submitCheckout(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.querySelector('#checkoutMessage');
  if (!form.checkValidity()) {
    message.textContent = t('formError');
    message.className = 'form-message error';
    form.reportValidity();
    return;
  }
  const orderId = `AK-${Date.now().toString().slice(-6)}`;
  state.cart = [];
  state.cartOpen = false;
  state.checkoutOpen = false;
  persist();
  render();
  showToast(t('orderConfirmed').replace('{id}', orderId));
}

function startHero() {
  window.clearInterval(heroTimer);
  let activeIndex = 0;
  heroTimer = window.setInterval(() => {
    activeIndex = (activeIndex + 1) % 3;
    showHeroSlide(activeIndex);
  }, 5400);
}

function showHeroSlide(index) {
  document.querySelectorAll('.hero-slide').forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === index));
  document.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

async function fetchJson(url, timeout = 9000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
  } finally {
    window.clearTimeout(timer);
  }
}

function normaliseCategories(payload) {
  if (!Array.isArray(payload)) return [];
  return payload.map((entry) => typeof entry === 'string' ? { slug: entry, name: entry } : { slug: entry.slug || entry.name, name: entry.name || entry.slug }).filter((entry) => entry.slug);
}

async function loadCatalogue() {
  try {
    const categoriesPayload = await fetchJson(`${API_ROOT}/categories`);
    const remoteCategories = normaliseCategories(categoriesPayload);
    const availableSlugs = new Set(remoteCategories.map((entry) => entry.slug));
    const targetSlugs = featuredSlugs.filter((slug) => availableSlugs.has(slug));
    const productGroups = await Promise.all(targetSlugs.map(async (slug) => {
      const payload = await fetchJson(`${API_ROOT}/category/${slug}?limit=8&select=id,title,description,category,price,rating,stock,thumbnail,images`);
      return payload.products || [];
    }));
    const products = productGroups.flat();
    if (products.length < 8) throw new Error('Insufficient remote products');
    state.categories = remoteCategories;
    state.products = products;
    state.usingFallback = false;
  } catch (error) {
    state.categories = fallbackCategories;
    state.products = fallbackProducts;
    state.usingFallback = true;
  } finally {
    state.loading = false;
    render();
  }
}

applyDocumentSettings();
render();
loadCatalogue();
