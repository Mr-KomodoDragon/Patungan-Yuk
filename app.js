// Simpan sebagai app.js
const formatRupiah = (angka) => "Rp " + Number(angka || 0);
const tbody = document.getElementById("tabel-belanja");
const ringkasanEl = document.getElementById("ringkasan");
const infoAnggotaEl = document.getElementById("info-anggota");
let total = 0;

daftarBelanja.forEach((item, idx) => {
  total += item.nominal;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="muted">${idx + 1}</td>
    <td>
      <span class="member">
        <span class="dot" style="background: ${item.warna || "#111111"}"></span>
        ${item.nama}
      </span>
    </td>
    <td>${item.item}</td>
    <td class="muted">${item.catatan}</td>
    <td class="num">${formatRupiah(item.nominal)}</td>
  `;
  tbody.appendChild(tr);
});

const jumlahAnggota = daftarBelanja.length;
const patunganPerOrang = jumlahAnggota > 0 ? Math.round(total / jumlahAnggota) : 0;

ringkasanEl.innerHTML = `
  <div class="metric">
    <div class="metric-label">Total Pengeluaran</div>
    <div class="metric-value">${formatRupiah(total)}</div>
  </div>
  <div class="metric">
    <div class="metric-label">Jumlah Anggota</div>
    <div class="metric-value">${jumlahAnggota} Orang</div>
  </div>
  <div class="metric">
    <div class="metric-label">Patungan Rata-rata</div>
    <div class="metric-value">${formatRupiah(patunganPerOrang)}</div>
  </div>
`;