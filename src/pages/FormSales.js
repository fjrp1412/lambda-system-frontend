import getUrl from "../utils/getUrl.js";

const FormSales = () => {
  const view = `
      <div class="main-container">
	<div class="main-container__title">
	  <h1>Registro</h1>
	</div>

	<div class="form-container sale-form">
	  <form action="" method="post" name="sale-form">
	    <div class="input-container input-sale">
	      <h2>Nombre del Vendedor</h2>
	      <input placeholder="Inserte el nombre del vendedor.">
	    </div>
	    <div class="input-container input-sale">
	      <h2>Nombre del cliente</h2>
	      <input placeholder="Inserte el nombre del cliente.">
	    </div>

	    <div class="sale-form__details">
	      <div><span>420$</span></div>
	      <div><span>13000bs</span></div>
	      <div><span>#00001</span></div>
	    </div>

	    <div class="container-list">
	      <div class="container-list__title">
		<h2>Lista de productos</h2>
	      </div>

		<div class="product-card">
		  <div class="product-card__image">
		    <img src="../src/assets/images/chiguire.jpeg" alt="chiguire">
		  </div>
		  <div class="product-card__detail--name">
		    <span>Nombre</span>
		    <span>Presentacion</span>
		  </div>
		  <div class="product-card__detail--quantity">
		    <span>Cantidad</span>
		  </div>
		  <div class="product-card__detail--price">
		    <span>Precio 1: 13$</span>
		    <span>Precio 2: 420$</span>
		    <span>Precio 3: 69$</span>
		  </div>
		  <div class="product-card__detail--category">
		    <span>Categoria</span>
		  </div>

		  <div class="product-card__buttons">
		    <button type="button" class="product-card__buttons--minus"><span>-</span></button>
		    <span class="product-card__buttons--quantity">10</span>
		    <button type="button" class="product-card__buttons--plus"><span>+</span></button>
		  </div>
		</div>
	      <button class="form-button">Enviar</button>
	  </form>
	    </div>
	</div>
      </div>
  `;
  return view;
};

export default FormSales;
