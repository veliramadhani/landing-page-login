// ================= JAVASCRIPT LOGIC =================
const authModal = document.getElementById('authModal');
const tabMasukBtn = document.getElementById('tabMasukBtn');
const tabDaftarBtn = document.getElementById('tabDaftarBtn');
const paneLogin = document.getElementById('paneLogin');
const paneRegister = document.getElementById('paneRegister');
const formMainTitle = document.getElementById('formMainTitle');
const formSubTitle = document.getElementById('formSubTitle');

// Buka Modal
function openModal(mode = 'login') {
  authModal.classList.add('active');
  switchModalTab(mode);
}

// Tutup Modal
function closeModal() {
  authModal.classList.remove('active');
}

// Tutup jika klik area latar luar modal
function handleBackdropClick(event) {
  if (event.target === authModal) {
    closeModal();
  }
}

// Tutup dengan keyboard ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && authModal.classList.contains('active')) {
    closeModal();
  }
});

// Pindah Tab Masuk / Daftar
function switchModalTab(mode) {
  if (mode === 'login') {
    tabMasukBtn.classList.add('active');
    tabDaftarBtn.classList.remove('active');
    paneLogin.classList.add('active');
    paneRegister.classList.remove('active');
    formMainTitle.textContent = 'Halo Sahabat Manis! 👋';
    formSubTitle.textContent = 'Silakan masuk ke akun praktikum kamu yaa';
  } else {
    tabDaftarBtn.classList.add('active');
    tabMasukBtn.classList.remove('active');
    paneRegister.classList.add('active');
    paneLogin.classList.remove('active');
    formMainTitle.textContent = 'Yuk Gabung Belajar! 🌸';
    formSubTitle.textContent = 'Lengkapi data untuk memulai praktikum ceriamu';
  }
}

// Fitur Toggle Lihat / Sembunyikan Password (Icon Mata 👁)
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
    btn.title = 'Sembunyikan kata sandi';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
    btn.title = 'Lihat kata sandi';
  }
}

// Handle Submit
function handleAuthSubmit(event, action) {
  event.preventDefault();
  alert(`Berhasil ${action}! Selamat belajar di Velisa MicroLearn Lab 💕`);
  closeModal();
  event.target.reset();
}
