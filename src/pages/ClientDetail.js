import getIndicators from "../utils/getIndicators.js";
import getUrl from "../utils/getUrl.js";

const ClientDetail = async () => {
  const url = getUrl();
  const client = await getIndicators(url);
  const view = `
      <div class="container-detail">
	<div class="container-detail__title">
	  <h2>Detalle del vendedor</h2>
	</div>

	<div class="detail-card">
	  <div class="detail-card__image">
	    <img src="" alt="">
	  </div>
	  <div class="detail-card__details">
	    <span>ID: ${client.client.id}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>${client.client.name}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>${client.client.identity_card}</span>
	  </div>
	  <div class="detail-card__details detail-card__details--sales">
	    <div class="sale-container">
	      <span class="sale-container__title">Compras totales: </span>
	      <span class="sale-container__amount">${client.purchases}$</span>
	    </div>
	    <div class="sale-container">
	      <span class="sale-container__title">Total monto: </span>
	      <span class="sale-container__amount">${client.money_generated}$</span>
	    </div>
	    <div class="sale-container">
	      <span class="sale-container__title">Mayor compra: </span>
	      <span class="sale-container__amount">${
          client.biggest_sale ? client.biggest_sale : 0
        }$</span>
	    </div>
	  </div>

	  <div class="detail-card__details">
	    <span>Tlf: ${client.client.phone} </span>
	  </div>


	</div>
      </div>
  `;
  return view;
};

export default ClientDetail;
