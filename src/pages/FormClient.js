import getUrl from "../utils/getUrl.js";
const FormClient = () => {
  const view = `

      <div class="main-container">
	<div class="main-container__title">
	  <h1>Registro</h1>
	</div>

	<div class="form-container">
	  <form name="login-form" id="form">
	    <div class="input-container">
	      <h2>Nombre del cliente</h2>
	      <input name="name" placeholder="Inserte el nombre del cliente.">
	    </div>

	    <div class="input-container">
	      <h2>Cedula</h2>
	      <input name="identity_card" placeholder="Inserte la cedula del cliente.">
	    </div>

	    <div class="input-container">
	      <h2>Numero</h2>
	      <input name="phone" placeholder="Inserte el numero de tlf.">
	    </div>

	    <div class="input-container">
	      <h2>Direccion</h2>
	      <input name="address" placeholder="Inserte la direccion del cliente.">
	    </div>

	    <button class="form-button">Enviar</button>

	  </form>
	</div>
      </div>
    </div>
  `;
  return view;
};

export default FormClient;
