const countries = [
    { country: "Fransa", capital: "Paris" },
    { country: "İsveç", capital: "Stockholm" },
    { country: "Türkiye", capital: "Ankara" },
    { country: "İtalya", capital: "Roma" },
    { country: "Polonya", capital: "Varşova" }
  ];
  
  function generateQuestion() {
    const questionElement = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const result = document.getElementById("result");
  
    result.textContent = ""; // önceki sonucu temizle
    optionsDiv.innerHTML = ""; // önceki butonları temizle
  
    const randomIndex = Math.floor(Math.random() * countries.length);
    const selectedCountry = countries[randomIndex];
  
    questionElement.textContent = `Ülke: ${selectedCountry.country}`;
  
    // Doğru cevabı ve 4 rastgele başka başkenti seç
    const capitals = new Set();
    capitals.add(selectedCountry.capital);
  
    while (capitals.size < 5) {
      const randomCapital = countries[Math.floor(Math.random() * countries.length)].capital;
      capitals.add(randomCapital);
    }
  
    // Seçenekleri karıştır ve göster
    const shuffled = Array.from(capitals).sort(() => Math.random() - 0.5);
  
    shuffled.forEach(capital => {
      const btn = document.createElement("button");
      btn.textContent = capital;
      btn.onclick = () => {
        if (capital === selectedCountry.capital) {
          result.textContent = "✅ Doğru!";
          result.style.color = "green";
        } else {
          result.textContent = "❌ Yanlış! Doğru cevap: " + selectedCountry.capital;
          result.style.color = "red";
        }
      };
      optionsDiv.appendChild(btn);
    });
  }
  
  // Sayfa açıldığında bir soru gelsin
  window.onload = generateQuestion;
  