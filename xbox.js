// هامبرغر + overlay
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

// سلة المشتريات
const cartBtn = document.querySelector('.cart-btn');
const cartBadge = document.getElementById('cartBadge');
const cartPopup = document.getElementById('cartPopup');
const closeCart = document.getElementById('closeCartPopup');
const cartList = document.getElementById('cartList');
let cartCount = 0;

cartBtn.addEventListener('click', () => {
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});
closeCart.addEventListener('click', () => {
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

// جرب الآن
document.querySelectorAll('.trial-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const link = btn.getAttribute('href');
    if (!link) {
      e.preventDefault();
      alert('اضف رابط في href');
    }
  });
});

// مشاركة
document.querySelector('.user-share').addEventListener('click', () => {
  alert('📤 تم تفعيل ميزة المشاركة!');
});

// بحث مباشر
document.getElementById('searchInput').addEventListener('input', e => {
  const term = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const txt = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = txt.includes(term) ? 'block' : 'none';
  });
});

// إغلاق القائمة عند النقر خارج
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    overlay.classList.remove('active');
  }
});

// تهيئة بعد تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  cartBadge.style.display = 'none';
  cartPopup.style.display = 'none';
});














// 📢 إنشاء إشعار متوهج
function showNotification(message) {
  const container = document.querySelector('.notification-container') || createContainer();

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  container.appendChild(notification);

  // حذف بعد 4 ثواني
  setTimeout(() => {
    notification.remove();
  }, 4000);
}

// 🧱 إنشاء الحاوية إذا مش موجودة
function createContainer() {
  const container = document.createElement('div');
  container.className = 'notification-container';
  document.body.appendChild(container);
  return container;
}






















