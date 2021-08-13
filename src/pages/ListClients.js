import getIndicators from "../utils/getIndicators.js";
import getUrl from "../utils/getUrl.js";
const ListClients = async () => {
  const route = getUrl();
  const clients = await getIndicators(route);
  const view = `
    <div class="container-list">
	<div class="container-list__title">
	  <h2>Lista de clientes</h2>
	</div>

    ${clients
      .map((client) => {
        return `
	<a href="#/client/${client.client.id}">
	  <div class="product-card">
	    <div class="product-card__image">
	      <img src="${client.client.image}" alt="">
	    </div>
	    <div class="product-card__detail--name">
	      <span>${client.client.name}</span>
	      <span>${client.client.identity_card}</span>
	    </div>
	    <div class="product-card__detail--sale">
	      <span>Mayor Venta:</span>
	      <span>${client.biggest_sale ? client.biggest_sale : 0}$</span>
	    </div>

	  </div>
	</a>
      `;
      })
      .join("")}

    </div>
  `;
  return view;
};

export default ListClients;
