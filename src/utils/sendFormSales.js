const sendFormSales = async (form) => {
  const ApiSale = "https://lambda-sales-system-api.herokuapp.com/api/sale/";
  const ApiSaleProducts =
    "https://lambda-sales-system-api.herokuapp.com/api/sale/product-sale/";
  const ApiProducts =
    "https://lambda-sales-system-api.herokuapp.com/api/product/";

  let response = await fetch(ApiProducts);
  const products = await response.json();

  response = await fetch(ApiSale);
  const sales = await response.json();

  console.log("listo");
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
        parseFloat(products[item[0]].price_1 * parseFloat(item[1]))
      );
    },
    0
  );

  productDataSerialized.sale = sales.length + 1;
  const countSales = sales.length + 1;

  console.log(productDataSerialized);
  console.log(saleData);

  try {
    response = await fetch(ApiSale, {
      body: JSON.stringify(saleData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }

  Object.entries(productDataSerialized).forEach(async (productElement) => {
    try {
      const response = await fetch(ApiSaleProducts, {
        body: JSON.stringify({
          product: parseInt(productElement[0]) + 1,
          sale: countSales,
          quantity: productElement[1],
          income: products[0].price_1 * parseInt(productElement[1]),
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
};

export default sendFormSales;
