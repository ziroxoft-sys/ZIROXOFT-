function openWhatsApp() {
  window.open("https://whatsapp.com/channel/0029VbB1PE92975J6eXOit1R", "_blank");
}

function openTelegram() {
  window.open("https://t.me/ALrayan1V2", "_blank");
}

function openFacebook() {
  window.open("https://www.facebook.com/share/g/1CDtyHj11V/", "_blank");
}













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