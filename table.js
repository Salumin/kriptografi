const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const shiftInput = document.getElementById('shift');
const rowPlain = document.getElementById('rowPlain');
const rowCipher = document.getElementById('rowCipher');
const caption = document.querySelector('caption');

function updateTable(shift) {
  rowPlain.innerHTML = '';
  rowCipher.innerHTML = '';

  abjad.forEach((huruf) => {
    const cell = document.createElement('td');
    cell.textContent = huruf;
    rowPlain.appendChild(cell);
  });

  abjad.forEach((huruf, i) => {
    const newIndex = (i + shift) % 26;
    const cell = document.createElement('td');
    cell.textContent = abjad[newIndex];
    rowCipher.appendChild(cell);
  });

  caption.textContent = `Tabel Pergeseran Caesar Cipher (+${shift})`;
}

shiftInput.addEventListener('input', () => {
  const shift = parseInt(shiftInput.value) || 0;
  updateTable(shift);
});

updateTable(parseInt(shiftInput.value));

// === Footer Otomatis (Tanggal, Bulan, Tahun) ===
const footerText = document.getElementById('footerText');
const now = new Date();
const bulanNama = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tanggalLengkap = now.getDate() + ' ' + bulanNama[now.getMonth()] + ' ' + now.getFullYear();
footerText.innerHTML = `Salmin | ${tanggalLengkap}`;
