import getIndicators from "../utils/getIndicators.js";
import getUrl from "../utils/getUrl.js";

const ListSalesman = async () => {
  const url = getUrl();
  const salesmans = await getIndicators(url);
  const view = `
      <div class="container-list">
	<div class="container-list__title">
	  <h2>Lista de vendedores</h2>
	</div>

    ${salesmans
      .map((salesman) => {
        return `

	<a href="#/salesman/${salesman.salesman.id}">
	  <div class="product-card">
	    <div class="product-card__image">
	      <img src="${salesman.salesman.image}" alt="">
	    </div>
	    <div class="product-card__detail--name">
	      <span>Nombre: ${salesman.salesman.name}</span>
	      <span>CI: ${salesman.salesman.identity_card}</span>
	    </div>

	    <div class="product-card__detail--sale">
	      <span>Mayor Venta:</span>
	      <span>${salesman.biggest_sale ? salesman.biggest_sale : 0}$</span>
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

export default ListSalesman;
