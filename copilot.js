// تفعيل قائمة الهامبرغر + Overlay
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open');
  overlay.classList.remove('active');
});

// تفعيل Swiper للسلايدر (لو موجود)
/* إذا عندك slider في copilot.html، فعل الكود ده */
if (typeof Swiper !== 'undefined') {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      500: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
    }
  });
}

// سلة المشتريات + عداد
const cartBtn = document.querySelector('.cart-btn');
const cartBadge = document.getElementById('cartBadge');
const cartPopup = document.getElementById('cartPopup');
const closeCartPopup = document.getElementById('closeCartPopup');
const cartList = document.getElementById('cartList');
let cartCount = 0;

cartBtn.addEventListener('click', () => {
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

closeCartPopup.addEventListener('click', () => {
  cartPopup.style.display = 'none';
});

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;
    cartBadge.style.display = 'inline-block';
    const title = btn.closest('.card').querySelector('h3').textContent;
    const li = document.createElement('li');
    li.textContent = title;
    cartList.appendChild(li);
  });
});

// زر "جرب الآن" رابط مباشر (يفتح صفحة copilot.html)
document.querySelectorAll('.trial-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    // الرابط اللي المستخدم ضيفه في href
    const link = btn.getAttribute('href');
    if (!link) {
      e.preventDefault();
      console.warn('اضف رابط للزر trial-btn!');
    }
  });
});







document.querySelector('.user-share').addEventListener('click', async () => {
  const shareData = {
    title: 'موقع Ziroxoft',
    text: 'جرب هذا الموقع الرائع!',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      console.log('تمت المشاركة بنجاح');
    } else {
      // fallback في حال المتصفح لا يدعم Web Share API
      await navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ الرابط ويمكنك مشاركته الآن!");
    }
  } catch (err) {
    console.error('فشل في المشاركة:', err);
  }
});









// بحث مباشر (بحث أولي من عناصر البطاقة دون backend)
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});

// إغلاق القوائم عند النقر خارجه
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    overlay.classList.remove('active');
  }
});

// تهيئة السلوك بعد تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  cartBadge.style.display = 'none';
  cartPopup.style.display = 'none';
});



















