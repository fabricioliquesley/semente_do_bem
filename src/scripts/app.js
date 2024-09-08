const cardContainer = document.querySelector(".container");
const modal = document.getElementById("searchDialog")
const openModalBtn = document.getElementById("openSearchModalBtn")
const closeModalBtn = document.getElementById("closeSearchModalBtn")

openModalBtn.addEventListener("click", openSearchModal)
closeModalBtn.addEventListener("click", closeSearchModal)

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "k") {
    openSearchModal()
  }
})

const params = new URLSearchParams(window.location.search);
const search = params.get('search');

const dataOng = listData(search);

dataOng.map(data => {
  cardContainer.innerHTML += `
  <div class="card">
      <aside>
        <img src=${data.image_url} alt="">
      </aside>
      <div class="cardContent">
        <h2>${data.name}</h2>
        <div>
          <p>${data.about}</p>
          <p>Formas de contribuir: ${data.waysToContribute}</p>
          <p>
            <i class="ph ph-map-pin"></i>
            ${data.address}
          </p>
        </div>
        <div class="links">
          <a href=${data.links[0]} target="_blank" title="Página web">
            <i class="ph ph-globe"></i>
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=${data.links[1]}" 
            disabled=${data.links[1] === ""}
            target="_blank" title="WhatsApp"
          >
            <i class="ph ph-whatsapp-logo"></i>
          </a>
          <a href="mailto:${data.links[2]}" target="_blank" title="E-mail">
            <i class="ph ph-envelope-simple"></i>
          </a>
        </div>
      </div>
    </div>
  `;
})

function openSearchModal() {
  document.body.style.overflow = "hidden"

  modal.showModal();
}

function closeSearchModal() {
  document.body.style.overflow = "auto"

  modal.close();
}
