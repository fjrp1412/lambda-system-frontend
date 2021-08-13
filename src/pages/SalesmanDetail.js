import getUrl from "../utils/getUrl.js";
import getIndicators from "../utils/getIndicators.js";

const SalesmanDetail = async () => {
  const url = getUrl();
  const salesman = await getIndicators(url);
  const view = `
      <div class="container-detail">
	<div class="container-detail__title">
	  <h2>Detalle del vendedor</h2>
	</div>

	<div class="detail-card">
	  <div class="detail-card__image">
	    <img src="${salesman.salesman.image}" alt="">
	  </div>
	  <div class="detail-card__details">
	    <span>ID: ${salesman.salesman.id}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>${salesman.salesman.name}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>${salesman.salesman.identity_card}</span>
	  </div>
	  <div class="detail-card__details detail-card__details--sales">
	    <div class="sale-container">
	      <span class="sale-container__title">Ventas totales: </span>
	      <span class="sale-container__amount">${salesman.purchases}</span>
	    </div>
	    <div class="sale-container">
	      <span class="sale-container__title">Total montos: </span>
	      <span class="sale-container__amount">${salesman.money_generated}</span>
	    </div>
	    <div class="sale-container">
	      <span class="sale-container__title">Mayor venta: </span>
	      <span class="sale-container__amount">${
          salesman.biggest_sale ? salesman.biggest_sale : 0
        }</span>
	    </div>
	  </div>

	  <div class="detail-card__details">
	    <span>Tlf: ${salesman.salesman.phone_1} </span>
	  </div>
	</div>
      </div>

  `;
  return view;
};

export default SalesmanDetail;
