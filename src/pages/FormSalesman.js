import getUrl from "../utils/getUrl";
const FormSalesman = () => {
  const view = `

      <div class="main-container">
	<div class="main-container__title">
	  <h1>Registro</h1>
	</div>

	<div class="form-container">
	  <form name="login-form" id="form">
	    <div class="input-container">
	      <h2>Nombre del Vendedor</h2>
	      <input name="name" placeholder="Inserte el nombre del vendedor.">
	    </div>

	    <div class="input-container">
	      <h2>Cedula</h2>
	      <input name="identity_card" placeholder="Inserte la cedula del vendedor.">
	    </div>

	    <div class="input-container">
	      <h2>Numero</h2>
	      <input name="phone_1" placeholder="Inserte el numero de tlf.">
	    </div>

	    <button class="form-button">Enviar</button>

	  </form>
	</div>
      </div>
    </div>
  `;
  return view;
};

export default FormSalesman;
