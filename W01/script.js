function login(event) {
  // Ripple effect
  const btn = event.currentTarget;
  btn.classList.remove("ripple");
  void btn.offsetWidth;
  btn.classList.add("ripple");

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const correctUsername = "admin";
  const correctPassword = "123456";

  if (!username || !password) {
    errorMessage.textContent = "⚠️ กรุณากรอกข้อมูลให้ครบถ้วน";
    errorMessage.className = "text-red-500 text-center mt-4";
  } else if (username === correctUsername && password === correctPassword) {
    errorMessage.textContent = "✅ เข้าสู่ระบบสำเร็จ!";
    errorMessage.className = "text-green-600 text-center mt-4";
    // window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    errorMessage.className = "text-red-500 text-center mt-4";
  }
}

// 🔒 ป้องกันคลิกขวา
document.addEventListener("contextmenu", e => e.preventDefault());

// 🔒 ป้องกันลาก input / ข้อความ
document.addEventListener("dragstart", e => e.preventDefault());

// 🔒 ป้องกันปุ่ม DevTools
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && e.key === "U") ||
    (e.metaKey && e.altKey && e.key.toLowerCase() === "i")
  ) {
    e.preventDefault();
    alert("ไม่อนุญาตให้ดูโค้ดนะครับ 😎");
  }
});



let rightClickCount = 0;
let blockTriggerCount = 0;
const blocker = document.getElementById("blocker");

// ป้องกันคลิกขวา พร้อมนับจำนวน
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  rightClickCount++;

  if (rightClickCount >= 5) {
    blockScreen();
  }
});

function blockScreen() {
  blocker.classList.remove("hidden");
  document.body.style.pointerEvents = "none";
  blockTriggerCount++;

  // ถ้าเจอการพยายาม 3 ครั้ง ให้เด้งออกจากเว็บ
  if (blockTriggerCount >= 3) {
    window.location.href = "https://www.google.com"; // <== เปลี่ยน URL ได้ตามต้องการ
    return;
  }

  // ปลดล็อกหลัง 10 วิ
  setTimeout(() => {
    blocker.classList.add("hidden");
    document.body.style.pointerEvents = "auto";
    rightClickCount = 0;
  }, 10000); // 10 วินาที
}
