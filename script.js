// 1. Membuka amplop
function openEnvelope() {
  document.getElementById('envelope-container').classList.add('hidden');
  document.getElementById('letter-container').classList.remove('hidden');
}

// 2. Memindahkan tombol No ke posisi acak saat disentuh/diklik
function moveNoButton() {
  const noBtn = document.getElementById('no-btn');
  const x = Math.random() * (window.innerWidth - 120) - (window.innerWidth / 2 - 60);
  const y = Math.random() * (window.innerHeight - 120) - (window.innerHeight / 2 - 60);
  
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// 3. Aksi saat tombol Yes diklik
function sayYes() {
  document.getElementById('question').innerText = "Yippee!";
  document.getElementById('cat-img').src = "cat_dance.gif";
  document.getElementById('buttons-wrapper').classList.add('hidden');
  document.getElementById('final-message').classList.remove('hidden');
}
