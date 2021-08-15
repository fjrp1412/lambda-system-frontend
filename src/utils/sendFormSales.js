import getAllData from "../utils/getAllData.js";
import convertArrayToObject from "../utils/convertArraytoObject.js";

const sendFormSales = async (form, sales) => {
  const ApiSale = "https://lambda-sales-system-api.herokuapp.com/api/sale/";
  const ApiSaleProducts =
    "https://lambda-sales-system-api.herokuapp.com/api/sale/product-sale/";

  const { dataClients, dataSalesmans, dataProducts } = await getAllData();

  const formData = new FormData(form);

  const saleData = {
    salesman: formData.get("salesman"),
    client: formData.get("client"),
    description: formData.get("description"),
    date: formData.get("date"),
  };
  formData.delete("salesman");
  formData.delete("client");
  formData.delete("description");
  formData.delete("date");

  let productDataSerialized = Object.fromEntries(formData);

  saleData.income = Object.entries(productDataSerialized).reduce(
    (acum, item) => {
      return (
        parseFloat(acum) +
        parseFloat(dataProducts[item[0]].price_1 * parseFloat(item[1]))
      );
    },
    0
  );

  const salesmanObject = convertArrayToObject(dataSalesmans);
  saleData.salesman = salesmanObject[saleData.salesman];

  const clientObject = convertArrayToObject(dataClients);
  saleData.client = clientObject[saleData.client];

  productDataSerialized.sale = sales.length + 1;
  const countSales = sales.length + 1;
  const bill = document.getElementById("bill");
  bill.innerHTML = `<span>#${countSales}</span>`;

  try {
    const response = await fetch(ApiSale, {
      body: JSON.stringify(saleData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    alert(
      "Revise la informacion del vendedor o del cliente e intentelo de nuevo."
    );
  }

  Object.entries(productDataSerialized).forEach(async (productElement) => {
    if (productElement[1] <= 0) {
      return;
    }
    try {
      const response = await fetch(ApiSaleProducts, {
        body: JSON.stringify({
          product: parseInt(productElement[0]) + 1,
          sale: countSales,
          quantity: productElement[1],
          income: dataProducts[0].price_1 * parseInt(productElement[1]),
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
      alert("Revise los valores de los productos ingresados");
    }
  });
};

export default sendFormSales;
