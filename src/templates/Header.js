const Header = () => {
  const view = `
	<div class="header-container">
	  <div class="logo-container">
	    <a href="./index.html"><img class="logo-container__image" src="./assets/images/Logo.svg" alt="lambda systems logo"></a>
	  </div>
	  <div class="title-container">
	    <a href="./index.html"><img class="title-container__image" src="./assets/images/logo-text.svg" alt="Lambda Systems"></a>
	  </div>
	</div>
  `;
  return view;
};

export default Header;
