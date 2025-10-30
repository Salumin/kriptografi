// === Caesar Cipher ===
const kalimatInput = document.getElementById('kalimat');
const shiftInput = document.getElementById('shift');
const hasilDiv = document.getElementById('hasil');
const enkripsiBtn = document.getElementById('enkripsi');
const dekripsiBtn = document.getElementById('dekripsi');
let lastCipher = '';

function caesarCipher(text, shift, mode = 'enkripsi') {
  const abjad = 'abcdefghijklmnopqrstuvwxyz';
  let hasil = '';

  if (mode === 'dekripsi') {
    shift = (26 - shift) % 26;
  }

  for (let char of text.toLowerCase()) {
    if (char.match(/[a-z]/)) {
      const index = abjad.indexOf(char);
      const newIndex = (index + shift) % 26;
      hasil += abjad[newIndex];
    } else {
      hasil += char;
    }
  }

  return hasil;
}

enkripsiBtn.addEventListener('click', () => {
  const text = kalimatInput.value;
  const shift = parseInt(shiftInput.value) || 0;
  const cipher = caesarCipher(text, shift, 'enkripsi');
  lastCipher = cipher;
  kalimatInput.value = cipher;
  hasilDiv.innerText = 'Ciphertext:\n' + cipher;
});

dekripsiBtn.addEventListener('click', () => {
  const text = kalimatInput.value || lastCipher;
  const shift = parseInt(shiftInput.value) || 0;
  const plain = caesarCipher(text, shift, 'dekripsi');
  hasilDiv.innerText = 'Plaintext:\n' + plain;
});

// === Footer Otomatis (Tanggal, Bulan, Tahun) ===
const footerText = document.getElementById('footerText');
const now = new Date();
const bulanNama = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tanggalLengkap = now.getDate() + ' ' + bulanNama[now.getMonth()] + ' ' + now.getFullYear();
footerText.innerHTML = `Salmin | ${tanggalLengkap}`;
