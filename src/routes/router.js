import Header from "../templates/Header.js";
import Home from "../pages/Home.js";
import ListProducts from "../pages/ListProducts.js";
import ProductDetail from "../pages/ProductDetail.js";
import ListClients from "../pages/ListClients.js";
import ListSalesman from "../pages/ListSalesman.js";
import ClientDetail from "../pages/ClientDetail.js";
import SalesmanDetail from "../pages/SalesmanDetail.js";
import ListSales from "../pages/ListSales.js";
import SaleDetail from "../pages/SaleDetail.js";
import getUrl from "../utils/getUrl.js";

const routes = {
  "/": Home,
  "product": ListProducts,
  "product/id": ProductDetail,
  "client": ListClients,
  "client/id": ClientDetail,
  "salesman": ListSalesman,
  "salesman/id": SalesmanDetail,
  "sale": ListSales,
  "sale/id": SaleDetail,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  let url = getUrl();

  if (url.length > 2) {
    url[2] = "/id";
  }
  url = url.join("");

  const render = url ? routes[url] : routes["/"];
  header.innerHTML = Header();
  content.innerHTML = await render();
};

export default router;
