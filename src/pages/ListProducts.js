import getData from "../utils/getData.js";
const ListProducts = async () => {
  const products = await getData();
  const view = `
      <div class="container-list">
	<div class="container-list__title">
	  <h2>Lista de productos</h2>
	</div>

    ${products
      .map((product) => {
        return `
	<a href="./product-detail.html">
	  <div class="product-card">
	    <div class="product-card__image">
	      <img src="${product.image}" alt="${product.name}">
	    </div>
	    <div class="product-card__detail--name">
	      <span>${product.name}</span>
	      <span>${product.presentation}</span>
	    </div>
	    <div class="product-card__detail--quantity">
	      <span>${product.cost}</span>
	    </div>
	    <div class="product-card__detail--price">
	      <span>${product.price_1}$</span>
	      <span>${product.price_2}$</span>
	      <span>${product.price_3}$</span>
	    </div>
	    <div class="product-card__detail--category">
	      <span>${product.category.name}</span>
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

export default ListProducts;
