document.addEventListener('DOMContentLoaded', () => {
  // 🌀 تفعيل سلايدر Swiper
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay:3000, disableOnInteraction:false },
    pagination: { el:'.swiper-pagination', clickable:true },
    navigation: { nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' }
  });

  const burger = document.getElementById('hamburger'),
        nav = document.getElementById('nav'),
        overlay = document.getElementById('overlay');

  if (!burger || !nav || !overlay) {
    console.error('Missing nav elements');
    return;
  }

  // 🔁 فتح وإغلاق القائمة
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('active');
  });

  // 🧭 عند الضغط على رابط، التنقل يتم فعلًا دون رجوع أو توقف
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      nav.classList.remove('open');
      overlay.classList.remove('active');
      window.location.href = link.href;
    });
  });







const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});







  
















  

  // 🛒 نظام السلة + احتساب العناصر
  const cartBtn = document.querySelector('.cart-btn'),
        cartBadge = document.getElementById('cartBadge'),
        cartPopup = document.getElementById('cartPopup'),
        cartList = document.getElementById('cartList'),
        closeCartBtn = document.getElementById('closeCartPopup'),
        cartItems = [];

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const id = card.dataset.id;
      const title = card.dataset.title;
      if (!cartItems.find(i => i.id === id)) {
        cartItems.push({ id, title });
        cartBadge.textContent = cartItems.length;
        cartBadge.style.display = 'inline-block';
      }
    });
  });

  cartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'block';
    cartList.innerHTML = '';
    cartItems.forEach(it => {
      const li = document.createElement('li');
      li.textContent = it.title;
      cartList.appendChild(li);
    });
  });
  closeCartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
  });
});


// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
if (darkToggle) {
  const userPref = localStorage.getItem('darkMode');
  if (userPref === 'on') document.body.classList.add('dark-mode');

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'on' : 'off';
    localStorage.setItem('darkMode', mode);
  });
}








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