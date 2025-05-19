function filterCompanies() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const cards = document.querySelectorAll("#companyGrid .company");
  
  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.trim().toLowerCase();
    const description = card.querySelector("p").innerText.trim().toLowerCase(); // Added description filtering
    card.style.display = title.includes(input) || description.includes(input) ? "block" : "none";
  });
}