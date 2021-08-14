import getAllData from "../utils/getAllData.js";

const FormSales = async () => {
  const { dataClients, dataSalesmans, dataProducts } = await getAllData();
  let counter = 0;
  const view = `
      <div class="main-container">
	<div class="main-container__title">
	  <h1>Registro</h1>
	</div>

	<div class="form-container sale-form">
	  <form id="form"">
	    <div class="input-container input-sale">
	      <h2>Id del vendedor</h2>
	      <input name="salesman" placeholder="Inserte el nombre del vendedor.">
	    </div>
	    <div class="input-container input-sale">
	      <h2>Id del cliente</h2>
	      <input name="client" placeholder="Inserte el nombre del cliente.">
	    </div>


	    <div class="input-container input-sale">
	      <h2>Descripcion</h2>
	      <input name="description" placeholder="Inserte el nombre del cliente.">
	    </div>

	    <div class="input-container input-sale">
	      <h2Fecha</h2>
	      <input name="date" type="date" placeholder="Inserte el nombre del cliente.">
	    </div>


	    <div class="sale-form__details">
	      <div id="bill"></div>
	    </div>

	    <div class="container-list">
	      <div class="container-list__title">
		<h2>Lista de productos</h2>
	      </div>

    ${dataProducts
      .map((product) => {
        return `
		<div class="product-card">
		  <div class="product-card__image">
		    <img src="${product.image}" alt="">
		  </div>
		  <div class="product-card__detail--name">
		    <span>${product.name}</span>
		    <span>${product.presentation}</span>
		  </div>

		  <div class="product-card__detail--price">
		    <span>Precio $: ${product.price_1}$</span>
		    <span>Precio Bs: ${product.price_2}Bs</span>
		    <span>ID: ${product.id}</span>
		  </div>
		  <div class="product-card__detail--category">
		    <span>${product.category.name}</span>
		  </div>

		  <div class="product-card__buttons">
		    <button type="button" class="product-card__buttons--minus"><span>-</span></button>

		    <input value="0" class="product-card__buttons--quantity" type="number" name="${counter}" id="quantity_${counter++}" >

		    <button type="button" class="product-card__buttons--plus"><span>+</span></button>
		  </div>
		</div>
      `;
      })
      .join("")}

	      <button class="form-button">Enviar</button>
	  </form>
	    </div>
	</div>
      </div>
  `;
  return view;
};

export default FormSales;
