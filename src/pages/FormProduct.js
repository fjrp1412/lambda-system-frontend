import getUrl from "../utils/getUrl.js";

const FormProduct = () => {
  const view = `

      <div class="main-container">
	<div class="main-container__title">
	  <h1>Registro</h1>
	</div>

	<div class="form-container">
	  <form name="login-form" id="form">
	    <div class="input-container">
	      <h2>producto</h2>
	      <input name="name" placeholder="Inserte el nombre del producto.">
	    </div>

	    <div class="input-container">
	      <h2>Categoria</h2>
	      <input name="category" placeholder="Inserte la categoria.">
	    </div>

	    <div class="input-container">
	      <h2>Monto en dolares</h2>
	      <input name="price_1" placeholder="Inserte el monto en $.">
	    </div>

	    <div class="input-container">
	      <h2>Monto en bolivares</h2>
	      <input name="price_2" placeholder="Inserte el monto en bolivares.">
	    </div>

	    <div class="input-container">
	      <h2>Costo</h2>
	      <input name="cost" placeholder="Inserte el costo del producto.">
	    </div>

	    <div class="input-container">
	    <h2>Marca</h2>
	      <input name="brand" placeholder="Inserte el costo del producto.">
	    </div>

	    <div class="input-container">
	      <h2>Descripcion</h2>
	      <input name="description" placeholder="Inserte la descripcion.">
	    </div>

	    <div class="input-container">
	      <h2>Presentacion</h2>
	      <input name="presentation" placeholder="Inserte la presentacion.">
	    </div>

	    <button class="form-button">Enviar</button>

	  </form>
	</div>
      </div>
    </div>
  `;
  return view;
};

export default FormProduct;
