// FILE NÀY CHỈ CHẠY KHI NHẬP ĐÚNG MẬT KHẨU "Daicalop12A"

console.log("Mật khẩu chính xác! Đang mở Dashboard...");

// 1. Lấy các phần tử giao diện
const loginSection = document.getElementById('login-section');
const mainSection = document.getElementById('main-section');

// 2. Thực hiện chuyển đổi ngay lập tức
if (loginSection && mainSection) {
    // Ẩn phần đăng nhập
    loginSection.classList.remove('d-flex');
    loginSection.style.display = 'none';

    // Hiện phần dashboard
    mainSection.classList.remove('d-none');
    mainSection.style.display = 'block';
}