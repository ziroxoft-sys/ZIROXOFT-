// script8.js

const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');
const previewSection = document.getElementById('previewSection');
const buttons = document.getElementById('buttons');
const convertBtn = document.getElementById('convertBtn');
const downloadLink = document.getElementById('downloadLink');

let pdfBlobUrl = null;

function loadJsPDF(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function enableConvert() {
    convertBtn.disabled = false;
    convertBtn.textContent = 'تحويل إلى PDF';
}

function disableConvert() {
    convertBtn.disabled = true;
    convertBtn.textContent = '... جاري التحويل';
}

// عند اختيار الصور
imageInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    previewSection.style.display = 'block';
    buttons.style.display = 'flex';
    previewImage.style.display = 'none';
    downloadLink.style.display = 'none';
    pdfBlobUrl = null;

    enableConvert();
});

// عند الضغط على زر التحويل
convertBtn.addEventListener('click', () => {
    const files = Array.from(imageInput.files);
    if (!files.length) return;

    disableConvert();

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
    });

    let index = 0;

    function processNext() {
        if (index >= files.length) {
            const pdfBlob = pdf.output('blob');
            if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
            pdfBlobUrl = URL.createObjectURL(pdfBlob);

            downloadLink.href = pdfBlobUrl;
            downloadLink.style.display = 'inline-block';

            enableConvert();
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const imgData = event.target.result;
            const img = new Image();
            img.src = imgData;
            img.onload = () => {
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();

                const ratio = Math.min(pdfWidth / img.width, pdfHeight / img.height);
                const imgW = img.width * ratio;
                const imgH = img.height * ratio;
                const x = (pdfWidth - imgW) / 2;
                const y = (pdfHeight - imgH) / 2;

                if (index > 0) pdf.addPage();
                pdf.addImage(imgData, 'JPEG', x, y, imgW, imgH);

                index++;
                processNext();
            };
        };
        reader.readAsDataURL(files[index]);
    }

    processNext();
});

// تحميل jsPDF
loadJsPDF(() => {
    if (imageInput.files.length > 0) {
        enableConvert();
    }
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