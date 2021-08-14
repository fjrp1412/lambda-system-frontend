import getUrl from "../utils/getUrl.js";
import getData from "../utils/getData.js";

const ProductDetail = async () => {
  let url = getUrl();
  let data = await getData(url);

  const view = `
      <div class="container-detail">
	<div class="container-detail__title">
	  <h2>Detalle del producto</h2>
	</div>

	<div class="detail-card">
	  <div class="detail-card__image">
	    <img src="${data.image}" alt="chiguire">
	  </div>
	  <div class="detail-card__details">
	    <span>ID: ${data.id}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>Nombre: ${data.name}</span>
	  </div>
	  <div class="detail-card__details">
	    <span>Marca: ${data.brand}</span>
	  </div>
	  <div class="detail-card__details detail-card__details--prices">
	    <div class="prices-container">
	      <span class="price-container__title">Precio 1</span>
	      <span class="price-container__amount">${data.price_1}$</span>
	    </div>
	    <div class="prices-container">
	      <span class="price-container__title">Precio 2</span>
	      <span class="price-container__amount">${data.price_2}$</span>
	    </div>
	    <div class="prices-container">
	      <span class="price-container__title">Precio 3</span>
	      <span class="price-container__amount">${data.price_3}$</span>
	    </div>

	  </div>

	  <div class="detail-card__details detail-card__details--description">
	    <span>${data.description}</span>
	  </div>

	  <div class="detail-card__details">
	    <span>${data.category.name}</span>
	  </div>

	  <div class="detail-card__details">
	    <span>${
        data.barcode.length > 1
          ? data.barcode[0].code
          : "No hay codigo de barras"
      }</span>
	  </div>
	</div>
      </div>
  `;
  return view;
};
export default ProductDetail;
