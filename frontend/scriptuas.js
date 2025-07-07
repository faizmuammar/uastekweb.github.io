const API_URL = "http://localhost:3000/api/catatan";

async function tampilkanCatatan() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const daftar = document.getElementById("daftarCatatan");
  daftar.innerHTML = "";
  data.forEach((item) => {
    daftar.innerHTML += `
  <div class="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-400 space-y-3">
    <h3 class="text-xl font-semibold text-gray-800">${item.judul}</h3>
    <p class="text-gray-700">${item.isi}</p>
    <small class="text-sm text-gray-500 block">${item.tanggal_buat}</small>
    <button
      onclick="hapusCatatan(${item.id})"
      class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition w-fit text-sm font-medium"
    >
      🗑️ Hapus Catatan
    </button>
  </div>
`;
  });
}

async function hapusCatatan(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  tampilkanCatatan();
}

document.getElementById("formCatatan").addEventListener("submit", async function (e) {
  e.preventDefault();
  const judul = document.getElementById("judul").value;
  const isi = document.getElementById("isi").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ judul, isi }),
  });

  if (res.ok) {
    this.reset();
    tampilkanCatatan();
  } else {
    alert("Gagal menyimpan catatan.");
  }
});

tampilkanCatatan();
