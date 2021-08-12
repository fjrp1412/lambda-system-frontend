import Header from "../templates/Header.js";
import Home from "../pages/Home.js";
import ListProducts from "../pages/ListProducts.js";

const routes = {
  "/": Home,
  "/ListProducts": ListProducts,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  const render = routes["/ListProducts"];
  header.innerHTML = Header();
  content.innerHTML = await render();
};

export default router;
