const cardContainer = document.querySelector(".container");

const params = new URLSearchParams(window.location.search);
const search = params.get('search');

const dataOng = listData(1, search);

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
          <p>Areas de atuação: Crianças</p>
          <p>
            <i class="ph ph-map-pin"></i>
            ${data.address}
          </p>
        </div>
        <div class="links">
          <a href=${data.links[0]} target="_blank" title="Página web">
            <i class="ph ph-globe"></i>
          </a>
          <a href=${data.links[1]} target="_blank" title="WhatsApp">
            <i class="ph ph-whatsapp-logo"></i>
          </a>
          <a href=${data.links[2]} target="_blank" title="E-mail">
            <i class="ph ph-envelope-simple"></i>
          </a>
        </div>
      </div>
    </div>
  `;
})
