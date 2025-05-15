document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const tablo = document.getElementById("veriTablosu");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Sayfanın yenilenmesini engelle
  
      const isim = document.getElementById("isim").value.trim();
      const eposta = document.getElementById("eposta").value.trim();
      const sehir = document.getElementById("sehir").value.trim();
  
      if (isim && eposta && sehir) {
        const satir = document.createElement("tr");
  
        satir.innerHTML = `
          <td>${isim}</td>
          <td>${eposta}</td>
          <td>${sehir}</td>
        `;
  
        tablo.appendChild(satir);
  
        form.reset(); // Formu temizle
      }
    });
  });
  