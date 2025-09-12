import { loginGoogle, getCurrentUser } from './auth.js';

import { saveProductLocally } from './orders.js';

let currentUser = null;

(async () => {
  const user = await loginGoogle();
  currentUser = await getCurrentUser(user.uid);

  if (!currentUser.isDeveloper) {
    if (!confirm('هل تريد تفعيل حساب مطور؟ (20 جنيه/شهر) *شهر مجاني أولاً*')) {
      alert('تم التخلي عن حساب المطور');
      return window.location.href = 'shop.html';
    }
    currentUser.isDeveloper = true;
    localStorage.setItem('products', JSON.stringify([])); // جهز المنتجات
  }
})();

document.getElementById('addProdBtn').onclick = () => {
  const name = document.getElementById('nameInput').value.trim();
  const price = document.getElementById('priceInput').value.trim();
  const img = document.getElementById('imagesInput').value.trim();
  if (!name || !price || !img) return alert('املأ كل البيانات!');
  saveProductLocally({ id: Date.now().toString(), name, price, images: [img] });
  alert('تمت إضافة المنتج وعرضه في المتجر.');
};