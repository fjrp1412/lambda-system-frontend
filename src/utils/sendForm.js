import sendData from "../utils/sendData.js";
import sendFormSales from "../utils/sendFormSales.js";

const sendForm = async (url) => {
  const form = document.getElementById("form");
  const ApiSale = "https://lambda-sales-system-api.herokuapp.com/api/sale/";
  const response = await fetch(ApiSale);
  const sales = await response.json();
  const bill = document.getElementById("bill");

  if (bill) {
    bill.innerHTML = `<span>#${sales.length + 1}</span>`;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (url === "sale/form") {
      await sendFormSales(form, sales);
      return;
    }

    await sendData(form);
    return;
  });
};

export default sendForm;
