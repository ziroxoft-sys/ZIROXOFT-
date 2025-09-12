// هامبرغر + ناف + overlay
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
hamburger.addEventListener('click', ()=>{nav.classList.toggle('open');overlay.classList.toggle('active');});
overlay.addEventListener('click', ()=>{nav.classList.remove('open');overlay.classList.remove('active');});

// Swiper (لو حابب تضيف later)
// const swiper = new Swiper(...);

// سلة مشتريات
const cartBtn = document.querySelector('.cart-btn');
const cartBadge = document.getElementById('cartBadge');
const cartPopup = document.getElementById('cartPopup');
const closeCartPopup = document.getElementById('closeCartPopup');
const cartList = document.getElementById('cartList');
let cartCount = 0;
cartBtn.addEventListener('click', ()=>{cartPopup.style.display = cartPopup.style.display==='block'?'none':'block';});
closeCartPopup.addEventListener('click', ()=>{cartPopup.style.display='none';});
document.querySelectorAll('.add-to-cart').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    cartCount++;
    cartBadge.textContent = cartCount; cartBadge.style.display='inline-block';
    const title = btn.closest('.card').querySelector('h3').textContent;
    const li = document.createElement('li'); li.textContent = title;
    cartList.appendChild(li);
  });
});

// "جرب الآن" تأكد منه فقط لا يلغي الرابط
document.querySelectorAll('.trial-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const link = btn.getAttribute('href');
    if(!link){ e.preventDefault(); alert('اضف رابط في href'); }
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











// بحث مباشر
document.getElementById('searchInput').addEventListener('input', e=>{
  const term = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const txt = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = txt.includes(term)?'block':'none';
  });
});




// إغلاق الناف عند النقر خارج
document.addEventListener('click', e=>{
  if(!nav.contains(e.target)&&!hamburger.contains(e.target)){
    nav.classList.remove('open');
    overlay.classList.remove('active');
  }
});

// تهيئة بعد DOM
window.addEventListener('DOMContentLoaded', ()=>{
  cartBadge.style.display='none';
  cartPopup.style.display='none';
});



























