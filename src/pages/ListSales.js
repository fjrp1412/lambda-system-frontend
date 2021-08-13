import getData from "../utils/getData.js";
import getUrl from "../utils/getUrl.js";

const ListSales = async () => {
  const url = getUrl();
  const sales = await getData(url);
  const view = `

  <div class="container-list">
	<div class="container-list__title">
	  <h2>Lista de ventas</h2>
	</div>

    ${sales
      .map((sale) => {
        return `
        <a href="#/sale/${sale.id}">
	  <div class="sale-card">
	    <div class="sale-card__detail">

	      <div class="sale-card__detail--extra">
		<span>Nombre vendedor:</span>
		<span>${sale.salesman.name}</span>
	      </div>

	      <div class="sale-card__detail--extra">
		<span>Nombre cliente:</span>
		<span>${sale.client.name}</span>
	      </div>


	    </div>
	    <div class="sale-card__detail">
	      <div class="sale-card__detail--extra">
		<span>Fecha:</span>
	  	<span>${sale.date}</span>
	      </div>

	      <div class="sale-card__detail--extra">
		<span>Numero de factura:</span>
		<span>${sale.id}</span>
	      </div>

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

export default ListSales;
