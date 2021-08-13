import getUrl from "../utils/getUrl.js";
import getData from "../utils/getData.js";

const SaleDetail = async () => {
  const url = getUrl();
  const sale = await getData(url);
  const view = `
      <div class="container-detail">
	<div class="container-detail__title">
	  <h2>Detalle de la venta</h2>
	</div>

	<div class="detail-card">

	  <div class="detail-card__details">
	    <span>ID: ${sale.id}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>Nombre vendedor: </span>
	    <a href="#/salesman/${sale.salesman.id}"><span>${
    sale.salesman.name
  }</span></a>
	  </div>

	  <div class="detail-card__details">
	    <span>Nombre cliente: </span>
	      <a href="#/client/${sale.client.id}"><span>${sale.client.name}</span></a>
	  </div>

	  <div class="detail-card__details">
	    <span>${sale.date}</span>
	  </div>
	  <div class="detail-card__details detail-card__details--prices">
	    <div class="prices-container">
	      <span class="price-container__title">Monto bs</span>
	      <span class="price-container__amount">${sale.income}$</span>
	    </div>
	    <div class="prices-container">
	      <span class="price-container__title">Monto $</span>
	      <span class="price-container__amount">${sale.income}$</span>
	    </div>

	  </div>

	  <div class="detail-card__details">
	    ${sale.product
        .map((product) => {
          return `
	    <span>${product.name}</span>
	      `;
        })
        .join("")}
	  </div>
	</div>
      </div>
  `;
  return view;
};

export default SaleDetail;
