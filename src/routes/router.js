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
import FormProduct from "../pages/FormProduct.js";
import FormClient from "../pages/FormClient.js";
import FormSalesman from "../pages/FormSalesman.js";
import FormSales from "../pages/FormSales.js";
import getUrl from "../utils/getUrl.js";
import sendForm from "../utils/sendForm.js";
import resolveRoutes from "../utils/resolveRoutes.js";

const routes = {
  "/": Home,
  product: ListProducts,
  "product/id": ProductDetail,
  "product/form": FormProduct,
  client: ListClients,
  "client/id": ClientDetail,
  "client/form": FormClient,
  salesman: ListSalesman,
  "salesman/id": SalesmanDetail,
  "salesman/form": FormSalesman,
  sale: ListSales,
  "sale/id": SaleDetail,
  "sale/form": FormSales,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  const url = resolveRoutes();

  const render = url ? routes[url] : routes["/"];
  header.innerHTML = Header();
  content.innerHTML = await render();

  if (document.getElementById("form")) {
    await sendForm(url);
  }
};

export default router;
