const getAllData = async () => {
  const API = "https://lambda-sales-system-api.herokuapp.com/api";
  const responseClients = await fetch(`${API}/client/`);
  const responseSalesmans = await fetch(`${API}/salesman/`);
  const responseProducts = await fetch(`${API}/product/`);
  const dataClients = await responseClients.json();
  const dataSalesmans = await responseSalesmans.json();
  const dataProducts = await responseProducts.json();
  return {
    dataClients,
    dataSalesmans,
    dataProducts,
  };
};

export default getAllData;
