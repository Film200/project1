const form = document.getElementById('registerForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // แสดงข้อความเตือนและหยุดการทำงานต่อ
  showMessage('ระบบยังไม่เปิดให้บริการ เพราะไม่มีฐานข้อมูล', 'text-yellow-400 font-bold');
  
  // ถ้าอยากให้ข้อความหายไปเองหลัง 5 วิ (ไม่จำเป็น)
  setTimeout(() => {
    msg.textContent = '';
  }, 5000);
});

function showMessage(text, className) {
  msg.textContent = text;
  msg.className = `text-center mt-4 font-semibold ${className}`;
}
