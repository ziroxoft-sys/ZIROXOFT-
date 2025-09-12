let qr;

function generateQR() {
  const url = document.getElementById("url-input").value.trim();
  if (!url) {
    alert("من فضلك أدخل رابطًا صالحًا.");
    return;
  }

  if (!qr) {
    qr = new QRious({
      element: document.getElementById("qr-code"),
      size: 250,
      value: url
    });
  } else {
    qr.value = url;
  }
}

function downloadPDF() {
  const canvas = document.getElementById("qr-code");
  if (!canvas.toDataURL) {
    alert("لم يتم توليد QR بعد.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("رمز QR للرابط:", 10, 10);
  doc.addImage(canvas.toDataURL("image/png"), "PNG", 10, 20, 100, 100);
  doc.save("qr-code.pdf");
}

function copyQR() {
  const canvas = document.getElementById("qr-code");
  if (!canvas.toDataURL) {
    alert("لم يتم توليد QR بعد.");
    return;
  }

  canvas.toBlob((blob) => {
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]).then(() => {
      alert("تم نسخ رمز QR بنجاح!");
    }).catch(err => {
      alert("حدث خطأ أثناء النسخ: " + err);
    });
  });
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