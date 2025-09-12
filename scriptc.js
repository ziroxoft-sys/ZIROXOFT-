const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const resultBox = document.getElementById('resultBox');
const imageURL = document.getElementById('imageURL');
const copyBtn = document.getElementById('copyBtn');
const preview = document.getElementById('preview');

// عاوزك تحط مفتاحك هنا تمام
const API_KEY = 'abd59d860dba6c8631a0cf9b0378571a';

uploadBtn.addEventListener('click', () => {
  const file = imageInput.files[0];
  if (!file) {
    alert('❗ برجاء اختيار صورة أولاً');
    return;
  }

  // نهيئ البيانات اللي هنرسلها
  const formData = new FormData();
  formData.append('image', file);

  uploadBtn.textContent = 'جاري رفع ...';
  uploadBtn.disabled = true;

  fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      const url = data.data.url;
      imageURL.value = url;
      preview.innerHTML = `<img src="${url}" alt="تجربة">`;
      resultBox.classList.remove('hidden');
      uploadBtn.textContent = '📤 أبعت الصورة';
      uploadBtn.disabled = false;
    } else {
      throw new Error('فشل في رفع الصورة.');
    }
  })
  .catch(err => {
    alert('حدث خطأ في الرفع، حاول مرة ثانية.');
    console.error(err);
    uploadBtn.textContent = '📤 أبعت الصورة';
    uploadBtn.disabled = false;
  });
});

copyBtn.addEventListener('click', () => {
  imageURL.select();
  document.execCommand('copy');
  copyBtn.textContent = '✅ تم النسخ';
  setTimeout(() => copyBtn.textContent = '📋 نسخ الرابط', 1500);
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