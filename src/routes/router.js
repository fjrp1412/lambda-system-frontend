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
import sendData from "../utils/sendData.js";
import getUrl from "../utils/getUrl.js";
import sendFormSales from "../utils/sendFormSales.js";

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
  let url = getUrl();

  if (url.length > 2) {
    url[2] = url[2] !== "form" ? "/id" : `/${url[2]}`;
  }
  url = url.join("");

  const render = url ? routes[url] : routes["/"];
  header.innerHTML = Header();
  content.innerHTML = await render();

  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (url === "sale/form") {
        console.log("sale");
        await sendFormSales(form);
        return;
      }

      await sendData(form);
      return;
    });
  }
};

export default router;
