(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const u of l.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && s(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = r(i);
    fetch(i.href, l);
  }
})();
const A = "https://dummyjson.com/products",
  L = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      rating: 4.7,
      stock: 22,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      description: "Mascara designed for dramatic volume and a precise finish.",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      category: "beauty",
      price: 19.99,
      rating: 4.2,
      stock: 38,
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      description:
        "A rich collection of blendable shades with an integrated mirror.",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      category: "beauty",
      price: 49.99,
      rating: 4.4,
      stock: 17,
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.jpg",
      description: "A clean, classic fragrance for everyday confidence.",
    },
    {
      id: 7,
      title: "Beef Steak",
      category: "groceries",
      price: 12.99,
      rating: 4.6,
      stock: 41,
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      description: "Premium quality cut, selected for a memorable meal.",
    },
    {
      id: 8,
      title: "Cat Food",
      category: "groceries",
      price: 8.99,
      rating: 4.5,
      stock: 29,
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      description: "Nourishing daily food made for happy cats.",
    },
    {
      id: 9,
      title: "Cooking Oil",
      category: "groceries",
      price: 4.99,
      rating: 4.1,
      stock: 54,
      thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      description: "Light, versatile cooking oil for your kitchen.",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      category: "laptops",
      price: 1699.99,
      rating: 4.8,
      stock: 18,
      thumbnail: "https://cdn.dummyjson.com/product-images/78/thumbnail.jpg",
      description: "Professional performance in a refined portable design.",
    },
    {
      id: 79,
      title: "Asus Zenbook Pro Dual Screen Laptop",
      category: "laptops",
      price: 1799.99,
      rating: 4.6,
      stock: 12,
      thumbnail: "https://cdn.dummyjson.com/product-images/79/thumbnail.jpg",
      description: "Dual-screen productivity with powerful creative tools.",
    },
    {
      id: 80,
      title: "Huawei Matebook X Pro",
      category: "laptops",
      price: 1399.99,
      rating: 4.5,
      stock: 16,
      thumbnail: "https://cdn.dummyjson.com/product-images/80/thumbnail.jpg",
      description: "Elegant lightweight laptop for work and study.",
    },
    {
      id: 95,
      title: "Mobile Phone Case",
      category: "mobile-accessories",
      price: 8.99,
      rating: 4.4,
      stock: 64,
      thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
      description: "Protective case with a slim, comfortable grip.",
    },
    {
      id: 96,
      title: "Apple AirPods",
      category: "mobile-accessories",
      price: 129.99,
      rating: 4.6,
      stock: 31,
      thumbnail: "https://cdn.dummyjson.com/product-images/96/thumbnail.jpg",
      description: "Wireless sound with a compact charging case.",
    },
    {
      id: 100,
      title: "Selfie Stick Monopod",
      category: "mobile-accessories",
      price: 19.99,
      rating: 4,
      stock: 47,
      thumbnail: "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
      description: "Capture your best moments from the perfect angle.",
    },
    {
      id: 35,
      title: "Classic T-Shirt",
      category: "mens-shirts",
      price: 24.99,
      rating: 4.3,
      stock: 35,
      thumbnail: "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
      description: "Everyday comfort cut from soft, durable fabric.",
    },
    {
      id: 37,
      title: "Slim Fit Shirt",
      category: "mens-shirts",
      price: 34.99,
      rating: 4.5,
      stock: 24,
      thumbnail: "https://cdn.dummyjson.com/product-images/37/thumbnail.jpg",
      description: "Sharp lines and an easy fit for every occasion.",
    },
    {
      id: 155,
      title: "Knitted Rug",
      category: "furniture",
      price: 159.99,
      rating: 4.4,
      stock: 12,
      thumbnail: "https://cdn.dummyjson.com/product-images/155/thumbnail.jpg",
      description: "Soft texture and calm character for your space.",
    },
    {
      id: 161,
      title: "Wooden Bathroom",
      category: "furniture",
      price: 799.99,
      rating: 4.7,
      stock: 7,
      thumbnail: "https://cdn.dummyjson.com/product-images/161/thumbnail.jpg",
      description: "Warm wooden detailing with practical storage.",
    },
  ],
  k = [
    "beauty",
    "laptops",
    "groceries",
    "mobile-accessories",
    "mens-shirts",
    "furniture",
  ],
  v = k.map((t) => ({ slug: t, name: t })),
  F = {
    beauty: "الجمال والعناية",
    laptops: "لابتوبات",
    groceries: "بقالة",
    "mobile-accessories": "إكسسوارات الموبايل",
    "mens-shirts": "قمصان رجالية",
    furniture: "أثاث",
    smartphones: "هواتف ذكية",
    "mens-watches": "ساعات رجالية",
    "womens-watches": "ساعات نسائية",
    "home-decoration": "ديكور المنزل",
    fragrances: "عطور",
  },
  N = {
    ar: {
      home: "الرئيسية",
      categories: "الأقسام",
      products: "المنتجات",
      about: "عن الكرم",
      contact: "تواصل معنا",
      searchPlaceholder: "ابحث عن منتج أو فئة...",
      shopNow: "تسوّق الآن",
      browseAll: "استكشف المنتجات",
      heroEyebrow: "اختيارات اليوم — وصلت للتو",
      heroTitle: "كل ما تحبه، <em>بلمسة كرم.</em>",
      heroText:
        "تسوّق منتجات موثوقة، أسعار واضحة، وتجربة أسرع من أول بحث حتى باب المنزل.",
      delivery: "شحن سريع وآمن",
      deliveryText: "توصيل إلى بابك",
      trusted: "منتجات مختارة",
      trustedText: "من مصادر موثوقة",
      support: "دعم حقيقي",
      supportText: "متاح 7 أيام بالأسبوع",
      browseTitle: "تسوّق حسب القسم",
      browseText: "اختيارات مرتبة لتصل لما تحتاجه في ثوانٍ.",
      featuredTitle: "الأكثر طلبًا",
      featuredText: "منتجات مختارة بعناية من فئات الكرم المميزة.",
      viewAll: "عرض الكل",
      add: "أضف للسلة",
      added: "تمت الإضافة إلى السلة",
      details: "تفاصيل المنتج",
      inStock: "متوفر",
      item: "منتج",
      items: "منتجات",
      all: "الكل",
      cart: "سلة المشتريات",
      cartEmpty: "سلتك ما زالت فارغة",
      cartEmptyText: "أضف ما يعجبك وارجع هنا لمراجعة طلبك.",
      continueShopping: "مواصلة التسوق",
      subtotal: "الإجمالي الفرعي",
      shipping: "الشحن",
      free: "مجاني",
      total: "الإجمالي",
      checkout: "إتمام الطلب",
      checkoutReady: "راجع بيانات التوصيل لتأكيد طلبك.",
      checkoutKicker: "دفع عند الاستلام",
      checkoutTitle: "إتمام طلب المراجعة",
      checkoutText:
        "أدخل بياناتك لإرسال الطلب. لا يوجد دفع إلكتروني في هذه النسخة.",
      deliveryName: "اسم المستلم",
      deliveryAddress: "عنوان التسليم",
      orderSummary: "ملخص الطلب",
      placeOrder: "تأكيد الطلب",
      orderConfirmed:
        "تم تسجيل طلب المراجعة رقم {id}. سنتواصل معك لتأكيد التوصيل.",
      aboutTitle: "تسوّق أذكى، ببساطة.",
      aboutText:
        "الكرم متجر حديث يجمع لك اختيارات يومك في مكان واحد — من التقنيات والعناية الشخصية إلى البيت والمطبخ.",
      aboutBullet1: "بيانات منتجات مباشرة ومحدّثة",
      aboutBullet2: "سلة واضحة ومرنة",
      aboutBullet3: "واجهة تناسب العربية والإنجليزية",
      contactKicker: "نحن قريبون منك",
      contactTitle: "كيف يمكننا مساعدتك؟",
      contactText: "أرسل لنا رسالتك، وسيرد فريق الكرم خلال يوم عمل واحد.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      hours: "ساعات العمل",
      addressValue: "القاهرة، مصر — خدمة عملاء أونلاين",
      hoursValue: "يوميًا، 10 ص — 10 م",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "رسالتك",
      send: "إرسال الرسالة",
      formSuccess: "وصلتنا رسالتك بنجاح. شكرًا لتواصلك مع الكرم!",
      formError: "من فضلك املأ البيانات المطلوبة بشكل صحيح.",
      footerText: "تجربة تسوق يومية، مرتبة على ذوقك.",
      footerLinks: "روابط سريعة",
      customerCare: "خدمة العملاء",
      returns: "الاستبدال والاسترجاع",
      shippingInfo: "معلومات الشحن",
      privacy: "الخصوصية",
      rights: "© 2026 الكرم. جميع الحقوق محفوظة.",
      language: "English",
      themeLight: "الوضع النهاري",
      themeDark: "الوضع الليلي",
      noResults: "لم نجد منتجات تطابق بحثك.",
      loading: "نجهّز اختيارات الكرم...",
      productCount: "منتج مختار",
      categoriesCount: "أقسام متنوعة",
      offer: "عرض الكرم",
      discount: "خصم حتى 20%",
      featured: "مختار لك",
      quantity: "الكمية",
      close: "إغلاق",
      menu: "القائمة",
      addMore: "أضف منتجات للمتابعة",
      madeForYou: "مصمم لوقتك",
    },
    en: {
      home: "Home",
      categories: "Categories",
      products: "Products",
      about: "About",
      contact: "Contact",
      searchPlaceholder: "Search products or categories...",
      shopNow: "Shop now",
      browseAll: "Browse products",
      heroEyebrow: "Today’s edit — just arrived",
      heroTitle: "Everything you love, <em>with Karam.</em>",
      heroText:
        "Trusted products, transparent prices, and a journey that feels effortless from search to doorstep.",
      delivery: "Quick & secure",
      deliveryText: "Delivered to your door",
      trusted: "Curated products",
      trustedText: "From trusted sources",
      support: "Real support",
      supportText: "Here 7 days a week",
      browseTitle: "Shop by category",
      browseText: "Thoughtful shortcuts to what you need in seconds.",
      featuredTitle: "Most wanted",
      featuredText: "A considered edit from Al Karam’s most-loved categories.",
      viewAll: "View all",
      add: "Add to cart",
      added: "Added to your cart",
      details: "Product details",
      inStock: "In stock",
      item: "item",
      items: "items",
      all: "All",
      cart: "Your cart",
      cartEmpty: "Your cart is still empty",
      cartEmptyText:
        "Add something you love, then return here to review your order.",
      continueShopping: "Keep shopping",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "Free",
      total: "Total",
      checkout: "Checkout",
      checkoutReady: "Review your delivery details to confirm the order.",
      checkoutKicker: "Cash on delivery",
      checkoutTitle: "Confirm your review order",
      checkoutText:
        "Add your delivery details to send the order. This version does not take online payments.",
      deliveryName: "Recipient name",
      deliveryAddress: "Delivery address",
      orderSummary: "Order summary",
      placeOrder: "Confirm order",
      orderConfirmed:
        "Review order {id} has been recorded. We will contact you to confirm delivery.",
      aboutTitle: "Smarter shopping, simply.",
      aboutText:
        "Al Karam is a modern store that brings your day-to-day favourites together — from tech and personal care to home essentials.",
      aboutBullet1: "Live, up-to-date product data",
      aboutBullet2: "A clear, flexible cart",
      aboutBullet3: "A bilingual Arabic / English interface",
      contactKicker: "We are close by",
      contactTitle: "How can we help?",
      contactText:
        "Send us a message and the Al Karam team will reply within one business day.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Hours",
      addressValue: "Cairo, Egypt — Online customer care",
      hoursValue: "Daily, 10 AM — 10 PM",
      nameLabel: "Full name",
      emailLabel: "Email address",
      messageLabel: "Your message",
      send: "Send message",
      formSuccess:
        "Your message has arrived. Thank you for contacting Al Karam!",
      formError: "Please complete the required fields correctly.",
      footerText: "Your everyday shopping, edited for you.",
      footerLinks: "Quick links",
      customerCare: "Customer care",
      returns: "Returns & exchanges",
      shippingInfo: "Shipping information",
      privacy: "Privacy",
      rights: "© 2026 Al Karam. All rights reserved.",
      language: "العربية",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      noResults: "No products match your search.",
      loading: "Curating Al Karam picks...",
      productCount: "handpicked products",
      categoriesCount: "distinct departments",
      offer: "Karam offer",
      discount: "Up to 20% off",
      featured: "Picked for you",
      quantity: "Quantity",
      close: "Close",
      menu: "Menu",
      addMore: "Add items to continue",
      madeForYou: "Made for your day",
    },
  },
  R = {
    bag: '<path d="M6.5 8.5h11l1 11h-13l1-11Z"/><path d="M9 9V6.8a3 3 0 0 1 6 0V9"/>',
    search: '<circle cx="10.8" cy="10.8" r="5.3"/><path d="m15 15 4.2 4.2"/>',
    heart:
      '<path d="M20.8 8.5c0 5.7-8.8 10.1-8.8 10.1S3.2 14.2 3.2 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.8 1.5Z"/>',
    moon: '<path d="M20 15.3A8.2 8.2 0 0 1 8.7 4 8.2 8.2 0 1 0 20 15.3Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    globe:
      '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.3 3.1 5.3 3.1 8.5s-.8 6.2-3.1 8.5c-2.3-2.3-3.1-5.3-3.1-8.5s.8-6.2 3.1-8.5Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
    truck:
      '<path d="M3 6h11v10H3zM14 9h3.4l2.6 3v4H14z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/>',
    shield:
      '<path d="M12 3 19 6v5c0 4.6-3 7.8-7 10-4-2.2-7-5.4-7-10V6l7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.7-.9L4 19.5l1.3-3.6A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash:
      '<path d="M5 7h14M9 7V5h6v2M7.5 7l.8 13h7.4l.8-13M10 10.5v6M14 10.5v6"/>',
    phone:
      '<path d="M7 3h3l1.5 4-2 1.6a15 15 0 0 0 5.9 5.9l1.6-2 4 1.5v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 5c0-1.1.9-2 2-2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
    spark:
      '<path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/>',
  };
function n(t, e = "") {
  return `<svg class="icon ${e}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${R[t] || ""}</svg>`;
}
function D(t, e) {
  try {
    const r = localStorage.getItem(t);
    return r ? JSON.parse(r) : e;
  } catch {
    return e;
  }
}
const o = {
    lang: localStorage.getItem("alkaram-lang") || "ar",
    theme: localStorage.getItem("alkaram-theme") || "light",
    categories: [],
    products: [],
    cart: D("alkaram-cart", []),
    activeCategory: "all",
    search: "",
    loading: !0,
    usingFallback: !1,
    cartOpen: !1,
    menuOpen: !1,
    detailId: null,
    checkoutOpen: !1,
  },
  H = document.querySelector("#app");
let M;
function a(t) {
  return N[o.lang][t] ?? t;
}
function h(t) {
  return o.lang === "ar"
    ? F[t] || t.replaceAll("-", " ")
    : t.replaceAll("-", " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function V(t) {
  return (
    {
      beauty: "✦",
      laptops: "⌘",
      groceries: "◒",
      "mobile-accessories": "◈",
      "mens-shirts": "◫",
      furniture: "⌂",
    }[t] || "✦"
  );
}
function p(t) {
  return new Intl.NumberFormat(o.lang === "ar" ? "ar-EG" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(t || 0));
}
function m() {
  (localStorage.setItem("alkaram-cart", JSON.stringify(o.cart)),
    localStorage.setItem("alkaram-lang", o.lang),
    localStorage.setItem("alkaram-theme", o.theme));
}
function x() {
  const t = document.documentElement;
  ((t.lang = o.lang),
    (t.dir = o.lang === "ar" ? "rtl" : "ltr"),
    (t.dataset.theme = o.theme),
    (document.title =
      o.lang === "ar" ? "الكرم | Al Karam" : "Al Karam | الكرم"));
}
function y() {
  return o.cart.reduce((t, e) => t + e.quantity, 0);
}
function $() {
  return o.cart.reduce((t, e) => t + e.quantity * Number(e.price), 0);
}
function C(t) {
  return (
    o.products.find((e) => String(e.id) === String(t)) ||
    L.find((e) => String(e.id) === String(t))
  );
}
function d(t) {
  return String(t ?? "").replace(
    /[&<>'"]/g,
    (e) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        e
      ],
  );
}
function B(t) {
  const e = "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg";
  try {
    const r = new URL(t || e);
    return r.protocol === "https:" ? r.href : e;
  } catch {
    return e;
  }
}
function w(t) {
  return B(t?.thumbnail || t?.images?.[0]);
}
function g(t, e) {
  return `<a href="${e}" class="nav-link">${t}</a>`;
}
function Z() {
  const t = y();
  return `
    <header class="site-header">
      <div class="announcement"><span>${n("spark")}</span><strong>${o.lang === "ar" ? "توصيل مجاني للطلبات فوق 50 دولار" : "Free delivery on orders above $50"}</strong><span class="announcement-sep">•</span><span>${o.lang === "ar" ? "أكثر من 5,000 منتج بين يديك" : "5,000+ products at your fingertips"}</span></div>
      <div class="topbar shell">
        <a class="brand" href="#home" aria-label="Al Karam home">
          <span class="brand-mark">ك</span>
          <span class="brand-copy"><b>الكرم</b><small>AL KARAM SHOP</small></span>
        </a>
        <div class="header-search">
          ${n("search")}
          <input id="searchInput" type="search" placeholder="${a("searchPlaceholder")}" value="${d(o.search)}" autocomplete="off" />
          <kbd>⌘ K</kbd>
        </div>
        <div class="header-actions">
          <button class="icon-button desktop-only" data-action="toggle-theme" aria-label="${o.theme === "dark" ? a("themeLight") : a("themeDark")}">${n(o.theme === "dark" ? "sun" : "moon")}</button>
          <button class="language-button desktop-only" data-action="toggle-lang">${n("globe")}<span>${a("language")}</span></button>
          <button class="icon-button cart-trigger" data-action="toggle-cart" aria-label="${a("cart")}">${n("bag")}<span class="cart-count">${t}</span></button>
          <button class="icon-button mobile-only" data-action="toggle-menu" aria-label="${a("menu")}">${n(o.menuOpen ? "x" : "menu")}</button>
        </div>
      </div>
      <nav class="primary-nav ${o.menuOpen ? "open" : ""}">
        <div class="shell nav-inner">
          <a class="category-pill" href="#categories"><span class="category-dot"></span>${a("categories")}</a>
          <div class="nav-links">
            ${g(a("home"), "#home")}
            ${g(a("products"), "#products")}
            ${g(a("about"), "#about")}
            ${g(a("contact"), "#contact")}
          </div>
          <div class="nav-tools mobile-menu-tools">
            <button class="nav-utility" data-action="toggle-theme">${n(o.theme === "dark" ? "sun" : "moon")}${o.theme === "dark" ? a("themeLight") : a("themeDark")}</button>
            <button class="nav-utility" data-action="toggle-lang">${n("globe")}${a("language")}</button>
          </div>
        </div>
      </nav>
    </header>`;
}
function Y() {
  return `
    <section id="home" class="hero-section">
      <div class="hero-slides">
        ${[
          {
            image: "banner_Hero1.jpg",
            label: o.lang === "ar" ? "تقنيات وترفيه" : "Tech & play",
          },
          {
            image: "banner_Hero2.jpg",
            label: o.lang === "ar" ? "بيت أهدأ" : "A calmer home",
          },
          {
            image: "banner_Hero3.jpg",
            label: o.lang === "ar" ? "صوتك المفضل" : "Your favourite sound",
          },
        ]
          .map(
            (e, r) =>
              `<div class="hero-slide ${r === 0 ? "active" : ""}" style="background-image:linear-gradient(90deg, var(--hero-fade) 0%, var(--hero-fade) 40%, transparent 78%), url('/assets/${e.image}')" data-label="${e.label}"></div>`,
          )
          .join("")}
      </div>
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow"><i></i>${a("heroEyebrow")}</span>
          <h1>${a("heroTitle")}</h1>
          <p>${a("heroText")}</p>
          <div class="hero-actions">
            <a href="#products" class="button button-primary">${a("shopNow")} ${n("arrow")}</a>
            <a href="#categories" class="button button-secondary">${a("browseAll")}</a>
          </div>
          <div class="hero-note"><span class="note-avatar">AK</span><span>${a("madeForYou")}</span><span class="note-line"></span><b>${a("discount")}</b></div>
        </div>
        <div class="hero-corner-card">
          <span>${a("offer")}</span>
          <strong>${a("discount")}</strong>
          <small>${o.lang === "ar" ? "على منتجات مختارة اليوم" : "On selected items today"}</small>
        </div>
      </div>
      <div class="hero-controls shell">
        <div class="slide-dots"><button class="hero-dot active" aria-label="slide 1"></button><button class="hero-dot" aria-label="slide 2"></button><button class="hero-dot" aria-label="slide 3"></button></div>
        <span>${o.lang === "ar" ? "اكتشف أكثر" : "Discover more"} <span class="scroll-arrow">↓</span></span>
      </div>
    </section>`;
}
function G() {
  return `<section class="benefits shell">${[
    ["truck", a("delivery"), a("deliveryText")],
    ["shield", a("trusted"), a("trustedText")],
    ["chat", a("support"), a("supportText")],
  ]
    .map(
      ([e, r, s]) =>
        `<div class="benefit"><span class="benefit-icon">${n(e)}</span><span><b>${r}</b><small>${s}</small></span></div>`,
    )
    .join("")}</section>`;
}
function E() {
  const t = o.categories.length ? o.categories : v,
    e = k.map((r) => t.find((s) => s.slug === r)).filter(Boolean);
  return e.length ? e : v;
}
function U() {
  const t = E();
  return `
    <section id="categories" class="section shell categories-section">
      <div class="section-heading section-heading-inline">
        <div><span class="section-kicker">${o.lang === "ar" ? "اختيارات مرتبة" : "Thoughtful shortcuts"}</span><h2>${a("browseTitle")}</h2><p>${a("browseText")}</p></div>
        <button class="text-link" data-action="show-all">${a("viewAll")} ${n("arrow")}</button>
      </div>
      <div class="category-rail">
        ${t
          .map((e, r) => {
            const s =
              o.products.filter((i) => i.category === e.slug).length ||
              Math.max(6, 18 - r * 2);
            return `<button class="category-card ${o.activeCategory === e.slug ? "selected" : ""}" data-category="${e.slug}">
            <span class="category-number">0${r + 1}</span><span class="category-glyph">${V(e.slug)}</span>
            <b>${h(e.slug)}</b><small>${s} ${a("items")}</small><span class="category-go">${n("arrow")}</span>
          </button>`;
          })
          .join("")}
      </div>
    </section>`;
}
function j(t) {
  const e = Math.round(Number(t || 0));
  return `<span class="stars" aria-label="${t} out of 5">${Array.from({ length: 5 }, (r, s) => `<span class="${s < e ? "filled" : ""}">★</span>`).join("")}</span>`;
}
function q(t) {
  const e = o.cart.some((l) => l.id === t.id),
    r = d(t.id),
    s = d(t.title),
    i = d(h(t.category));
  return `<article class="product-card" data-product="${r}" tabindex="0">
    <div class="product-media"><span class="product-tag">${a("featured")}</span><button class="wish-button" aria-label="Add to wishlist">${n("heart")}</button><img src="${w(t)}" alt="${s}" loading="lazy" /></div>
    <div class="product-info"><span class="product-category">${i}</span><h3>${s}</h3><div class="product-meta">${j(t.rating)}<span>${Number(t.rating || 0).toFixed(1)}</span><i></i><span>${a("inStock")}</span></div>
    <div class="product-bottom"><strong>${p(t.price)}</strong><button class="add-button ${e ? "in-cart" : ""}" data-add="${r}">${n(e ? "bag" : "plus")}<span>${a(e ? "added" : "add")}</span></button></div></div>
  </article>`;
}
function W() {
  return Array.from(
    { length: 8 },
    () =>
      '<div class="skeleton-card"><div></div><span></span><i></i><b></b></div>',
  ).join("");
}
function O() {
  const t = o.search.trim().toLowerCase();
  return o.products.filter((e) => {
    const r = o.activeCategory === "all" || e.category === o.activeCategory,
      s = `${e.title} ${e.category} ${h(e.category)}`.toLowerCase();
    return r && (!t || s.includes(t));
  });
}
function Q() {
  const t = O(),
    e = [
      { slug: "all", name: a("all") },
      ...E().map((r) => ({ slug: r.slug, name: h(r.slug) })),
    ];
  return `
    <section id="products" class="section shell products-section">
      <div class="section-heading products-heading"><div><span class="section-kicker">${o.lang === "ar" ? "بيانات مباشرة من الكتالوج" : "Live catalogue data"}</span><h2>${a("featuredTitle")}</h2><p>${a("featuredText")}</p></div><div class="data-status"><span></span>${o.usingFallback ? (o.lang === "ar" ? "بيانات جاهزة للعرض" : "Ready to browse") : o.lang === "ar" ? "الكتالوج متصل" : "Catalogue connected"}</div></div>
      <div class="filter-row" role="tablist">${e.map((r) => `<button class="filter-pill ${o.activeCategory === r.slug ? "active" : ""}" data-category="${r.slug}">${r.name}</button>`).join("")}</div>
      <div id="productsGrid" class="products-grid">${o.loading ? W() : t.length ? t.map(q).join("") : `<div class="empty-products"><span>${n("search")}</span><h3>${a("noResults")}</h3><button class="button button-secondary" data-action="clear-search">${a("viewAll")}</button></div>`}</div>
    </section>`;
}
function _() {
  return `<section id="about" class="about-section"><div class="shell about-layout"><div class="about-visual"><div class="about-rings"></div><div class="about-panel"><span class="panel-icon">${n("bag")}</span><b>AL KARAM</b><strong>01 / 01</strong></div><span class="about-sticker">${o.lang === "ar" ? "اختيار واضح" : "A clear choice"}</span></div><div class="about-copy"><span class="section-kicker">AL KARAM — EST. 2026</span><h2>${a("aboutTitle")}</h2><p>${a("aboutText")}</p><ul><li>${n("shield")}<span>${a("aboutBullet1")}</span></li><li>${n("bag")}<span>${a("aboutBullet2")}</span></li><li>${n("globe")}<span>${a("aboutBullet3")}</span></li></ul><a href="#contact" class="button button-dark">${a("contact")} ${n("arrow")}</a></div></div></section>`;
}
function b(t, e, r, s = "") {
  const i = s ? `<a href="${s}">${r}</a>` : `<span>${r}</span>`;
  return `<div class="contact-info"><span class="contact-icon">${n(t)}</span><div><small>${e}</small>${i}</div></div>`;
}
function J() {
  return `<section id="contact" class="contact-section shell"><div class="contact-intro"><span class="section-kicker">${a("contactKicker")}</span><h2>${a("contactTitle")}</h2><p>${a("contactText")}</p><div class="contact-list">${b("phone", a("phone"), "+20 100 000 0000", "tel:+201000000000")}${b("mail", a("email"), "hello@alkaram.shop", "mailto:hello@alkaram.shop")}${b("pin", a("address"), a("addressValue"))}${b("clock", a("hours"), a("hoursValue"))}</div></div><form id="contactForm" class="contact-form" novalidate><div class="form-title"><span>${n("spark")}</span><div><b>${o.lang === "ar" ? "اترك رسالة" : "Leave a note"}</b><small>${o.lang === "ar" ? "سنتواصل معك سريعًا" : "We will be in touch shortly"}</small></div></div><label>${a("nameLabel")}<input name="name" required minlength="2" /></label><label>${a("emailLabel")}<input type="email" name="email" required /></label><label>${a("messageLabel")}<textarea name="message" rows="4" required minlength="10"></textarea></label><button class="button button-primary form-submit" type="submit">${a("send")} ${n("arrow")}</button><p id="formMessage" class="form-message" aria-live="polite"></p></form></section>`;
}
function z() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><a class="brand" href="#home"><span class="brand-mark">ك</span><span class="brand-copy"><b>الكرم</b><small>AL KARAM SHOP</small></span></a><p>${a("footerText")}</p><div class="socials"><a href="#home" aria-label="Instagram">ig</a><a href="#home" aria-label="Facebook">f</a><a href="#home" aria-label="X">x</a></div></div><div><h3>${a("footerLinks")}</h3><a href="#home">${a("home")}</a><a href="#categories">${a("categories")}</a><a href="#products">${a("products")}</a><a href="#about">${a("about")}</a></div><div><h3>${a("customerCare")}</h3><a href="#contact">${a("contact")}</a><a href="#contact">${a("returns")}</a><a href="#contact">${a("shippingInfo")}</a><a href="#contact">${a("privacy")}</a></div><div class="footer-newsletter"><h3>${o.lang === "ar" ? "رسائل الكرم" : "Karam notes"}</h3><p>${o.lang === "ar" ? "عروض هادئة، اختيارات أذكى." : "Quiet offers, smarter picks."}</p><div><input placeholder="Email" type="email" aria-label="Email"/><button aria-label="Subscribe">${n("arrow")}</button></div></div></div><div class="shell footer-bottom"><span>${a("rights")}</span><span>DummyJSON powered catalogue</span></div></footer>`;
}
function X() {
  const t = o.cart.length > 0;
  return `<div class="cart-overlay ${o.cartOpen ? "visible" : ""}" data-action="close-cart"></div><aside class="cart-drawer ${o.cartOpen ? "open" : ""}" aria-label="${a("cart")}"><div class="drawer-header"><div><span class="section-kicker">${y()} ${y() === 1 ? a("item") : a("items")}</span><h2>${a("cart")}</h2></div><button class="icon-button" data-action="close-cart">${n("x")}</button></div>${t ? `<div class="cart-items">${o.cart.map((e) => `<div class="cart-item"><img src="${w(e)}" alt="${d(e.title)}"/><div><b>${d(e.title)}</b><small>${p(e.price)}</small><div class="quantity-control"><button data-quantity="${e.id}" data-delta="-1" aria-label="decrease">${n("minus")}</button><span>${e.quantity}</span><button data-quantity="${e.id}" data-delta="1" aria-label="increase">${n("plus")}</button></div></div><button class="remove-button" data-remove="${e.id}" aria-label="remove">${n("trash")}</button></div>`).join("")}</div><div class="cart-summary"><div><span>${a("subtotal")}</span><b>${p($())}</b></div><div><span>${a("shipping")}</span><b class="free">${a("free")}</b></div><div class="cart-total"><span>${a("total")}</span><strong>${p($())}</strong></div><button class="button button-primary checkout-button" data-action="checkout">${a("checkout")} ${n("arrow")}</button></div>` : `<div class="cart-empty"><span>${n("bag")}</span><h3>${a("cartEmpty")}</h3><p>${a("cartEmptyText")}</p><button class="button button-primary" data-action="close-cart">${a("continueShopping")}</button></div>`}</aside>`;
}
function tt() {
  if (!o.checkoutOpen || !o.cart.length) return "";
  const t = o.cart
    .map(
      (e) =>
        `<div><span>${d(e.title)} <small>× ${e.quantity}</small></span><b>${p(e.price * e.quantity)}</b></div>`,
    )
    .join("");
  return `<div class="modal-backdrop" data-action="close-checkout"></div><section class="checkout-modal" aria-modal="true" role="dialog"><button class="modal-close icon-button" data-action="close-checkout">${n("x")}</button><div class="checkout-copy"><span class="section-kicker">${a("checkoutKicker")}</span><h2>${a("checkoutTitle")}</h2><p>${a("checkoutText")}</p><form id="checkoutForm" novalidate><label>${a("deliveryName")}<input name="customerName" required minlength="2" autocomplete="name" /></label><label>${a("phone")}<input name="phone" type="tel" required minlength="7" autocomplete="tel" /></label><label>${a("deliveryAddress")}<textarea name="address" rows="3" required minlength="8" autocomplete="street-address"></textarea></label><button type="submit" class="button button-primary checkout-confirm">${a("placeOrder")} ${n("arrow")}</button><p id="checkoutMessage" class="form-message" aria-live="polite"></p></form></div><aside class="checkout-summary"><span class="section-kicker">${a("orderSummary")}</span><div class="checkout-lines">${t}</div><div class="checkout-total"><span>${a("total")}</span><strong>${p($())}</strong></div><small>${a("checkoutKicker")} · ${a("free")} ${a("shipping")}</small></aside></section>`;
}
function et() {
  const t = o.detailId ? C(o.detailId) : null;
  if (!t) return "";
  const e = d(t.title),
    r = d(
      t.description ||
        (o.lang === "ar"
          ? "منتج مختار بعناية ليضيف قيمة حقيقية ليومك."
          : "A considered product chosen to add real value to your day."),
    );
  return `<div class="modal-backdrop" data-action="close-detail"></div><section class="product-modal" aria-modal="true" role="dialog"><button class="modal-close icon-button" data-action="close-detail">${n("x")}</button><div class="modal-image"><img src="${w(t)}" alt="${e}"/><span>${a("featured")}</span></div><div class="modal-copy"><span class="product-category">${d(h(t.category))}</span><h2>${e}</h2><div class="modal-rating">${j(t.rating)} <b>${Number(t.rating || 0).toFixed(1)}</b></div><strong class="modal-price">${p(t.price)}</strong><p>${r}</p><div class="stock-line"><span></span>${a("inStock")} · ${t.stock || 20} ${a("items")}</div><button class="button button-primary modal-add" data-add="${d(t.id)}">${n("bag")}${a("add")}</button></div></section>`;
}
function at() {
  return `${Z()}<main>${Y()}${G()}${U()}${Q()}${_()}${J()}</main>${z()}${X()}${tt()}${et()}<div id="toast" class="toast" role="status" aria-live="polite"></div>`;
}
function c() {
  (x(), (H.innerHTML = at()), ot(), dt());
}
function ot() {
  (document
    .querySelectorAll("[data-action]")
    .forEach((s) => s.addEventListener("click", () => P(s.dataset.action))),
    document
      .querySelectorAll("[data-category]")
      .forEach((s) =>
        s.addEventListener("click", () => rt(s.dataset.category)),
      ),
    document.querySelectorAll("[data-add]").forEach((s) =>
      s.addEventListener("click", (i) => {
        (i.stopPropagation(), I(s.dataset.add));
      }),
    ),
    document.querySelectorAll("[data-product]").forEach((s) => {
      (s.addEventListener("click", (i) => {
        i.target.closest("button") || f(s.dataset.product);
      }),
        s.addEventListener("keydown", (i) => {
          i.key === "Enter" && f(s.dataset.product);
        }));
    }),
    document
      .querySelectorAll("[data-quantity]")
      .forEach((s) =>
        s.addEventListener("click", () =>
          nt(s.dataset.quantity, Number(s.dataset.delta)),
        ),
      ),
    document
      .querySelectorAll("[data-remove]")
      .forEach((s) => s.addEventListener("click", () => it(s.dataset.remove))));
  const t = document.querySelector("#searchInput");
  t &&
    t.addEventListener("input", (s) => {
      ((o.search = s.target.value), st());
    });
  const e = document.querySelector("#contactForm");
  e && e.addEventListener("submit", ct);
  const r = document.querySelector("#checkoutForm");
  (r && r.addEventListener("submit", lt),
    document
      .querySelectorAll(".hero-dot")
      .forEach((s, i) => s.addEventListener("click", () => K(i))));
}
function P(t) {
  (t === "toggle-theme" &&
    ((o.theme = o.theme === "dark" ? "light" : "dark"), m(), c()),
    t === "toggle-lang" && ((o.lang = o.lang === "ar" ? "en" : "ar"), m(), c()),
    t === "toggle-cart" && ((o.cartOpen = !o.cartOpen), c()),
    t === "close-cart" && ((o.cartOpen = !1), c()),
    t === "toggle-menu" && ((o.menuOpen = !o.menuOpen), c()),
    (t === "show-all" || t === "clear-search") &&
      ((o.activeCategory = "all"),
      (o.search = ""),
      c(),
      requestAnimationFrame(() =>
        document
          .querySelector("#products")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      )),
    t === "checkout" &&
      (o.cart.length
        ? ((o.cartOpen = !1), (o.checkoutOpen = !0), c())
        : S(a("addMore"))),
    t === "close-checkout" && ((o.checkoutOpen = !1), c()),
    t === "close-detail" && ((o.detailId = null), c()));
}
function rt(t) {
  ((o.activeCategory = t),
    (o.menuOpen = !1),
    c(),
    requestAnimationFrame(() =>
      document
        .querySelector("#products")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    ));
}
function st() {
  const t = document.querySelector("#productsGrid");
  if (!t) return;
  const e = O();
  ((t.innerHTML = e.length
    ? e.map(q).join("")
    : `<div class="empty-products"><span>${n("search")}</span><h3>${a("noResults")}</h3><button class="button button-secondary" data-action="clear-search">${a("viewAll")}</button></div>`),
    document.querySelectorAll("[data-add]").forEach((r) =>
      r.addEventListener("click", (s) => {
        (s.stopPropagation(), I(r.dataset.add));
      }),
    ),
    document.querySelectorAll("[data-product]").forEach((r) => {
      (r.addEventListener("click", (s) => {
        s.target.closest("button") || f(r.dataset.product);
      }),
        r.addEventListener("keydown", (s) => {
          s.key === "Enter" && f(r.dataset.product);
        }));
    }),
    document
      .querySelectorAll("#productsGrid [data-action]")
      .forEach((r) => r.addEventListener("click", () => P(r.dataset.action))));
}
function I(t) {
  const e = C(t);
  if (!e) return;
  const r = o.cart.find((s) => String(s.id) === String(e.id));
  (r ? (r.quantity += 1) : o.cart.push({ ...e, quantity: 1 }),
    m(),
    c(),
    S(a("added")));
}
function nt(t, e) {
  const r = o.cart.find((s) => String(s.id) === String(t));
  r &&
    ((r.quantity += e),
    r.quantity <= 0 &&
      (o.cart = o.cart.filter((s) => String(s.id) !== String(t))),
    m(),
    c());
}
function it(t) {
  ((o.cart = o.cart.filter((e) => String(e.id) !== String(t))), m(), c());
}
function f(t) {
  ((o.detailId = t), c());
}
function S(t) {
  const e = document.querySelector("#toast");
  e &&
    ((e.textContent = t),
    e.classList.add("show"),
    window.setTimeout(() => e.classList.remove("show"), 3200));
}
function ct(t) {
  t.preventDefault();
  const e = t.currentTarget,
    r = document.querySelector("#formMessage");
  if (!e.checkValidity()) {
    ((r.textContent = a("formError")),
      (r.className = "form-message error"),
      e.reportValidity());
    return;
  }
  (e.reset(),
    (r.textContent = a("formSuccess")),
    (r.className = "form-message success"));
}
function lt(t) {
  t.preventDefault();
  const e = t.currentTarget,
    r = document.querySelector("#checkoutMessage");
  if (!e.checkValidity()) {
    ((r.textContent = a("formError")),
      (r.className = "form-message error"),
      e.reportValidity());
    return;
  }
  const s = `AK-${Date.now().toString().slice(-6)}`;
  ((o.cart = []),
    (o.cartOpen = !1),
    (o.checkoutOpen = !1),
    m(),
    c(),
    S(a("orderConfirmed").replace("{id}", s)));
}
function dt() {
  window.clearInterval(M);
  let t = 0;
  M = window.setInterval(() => {
    ((t = (t + 1) % 3), K(t));
  }, 5400);
}
function K(t) {
  (document
    .querySelectorAll(".hero-slide")
    .forEach((e, r) => e.classList.toggle("active", r === t)),
    document
      .querySelectorAll(".hero-dot")
      .forEach((e, r) => e.classList.toggle("active", r === t)));
}
async function T(t, e = 9e3) {
  const r = new AbortController(),
    s = window.setTimeout(() => r.abort(), e);
  try {
    const i = await fetch(t, { signal: r.signal });
    if (!i.ok) throw new Error(`Request failed: ${i.status}`);
    return i.json();
  } finally {
    window.clearTimeout(s);
  }
}
function ut(t) {
  return Array.isArray(t)
    ? t
        .map((e) =>
          typeof e == "string"
            ? { slug: e, name: e }
            : { slug: e.slug || e.name, name: e.name || e.slug },
        )
        .filter((e) => e.slug)
    : [];
}
async function pt() {
  try {
    const t = await T(`${A}/categories`),
      e = ut(t),
      r = new Set(e.map((u) => u.slug)),
      s = k.filter((u) => r.has(u)),
      l = (
        await Promise.all(
          s.map(
            async (u) =>
              (
                await T(
                  `${A}/category/${u}?limit=8&select=id,title,description,category,price,rating,stock,thumbnail,images`,
                )
              ).products || [],
          ),
        )
      ).flat();
    if (l.length < 8) throw new Error("Insufficient remote products");
    ((o.categories = e), (o.products = l), (o.usingFallback = !1));
  } catch {
    ((o.categories = v), (o.products = L), (o.usingFallback = !0));
  } finally {
    ((o.loading = !1), c());
  }
}
x();
c();
pt();
