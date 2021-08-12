const Home = () => {
  const view = `
      <div class="main-container">
	<div class="main-container__title">
	  <h1>Home</h1>
	</div>

	<div class="container-options">
	  <div class="container-options__option">
	    <a href="./sales-form.html"> Registrar Venta </a></div>
	  <div class="container-options__option">
	    <a href="./product-list.html"> Lista de productos</a></div>
	  <div class="container-options__option">
	    <a href="./sales-list.html"> Historial de Ventas</a></div>
	  <div class="container-options__option">
	    <a href="./product-form.html"> Registrar productos </a></div>
	  <div class="container-options__option">
	    <a href="./client-form.html"> Registrar cliente </a></div>
	  <div class="container-options__option">
	    <a href="./salesman-list.html"> Lista de vendedores </a></div>
	  <div class="container-options__option">
	    <a href="./clients-list.html"> Lista de clientes </a></div>
	</div>
      </div>
  `;
  return view;
};

export default Home;
