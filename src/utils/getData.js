const API = "https://lambda-sales-system-api.herokuapp.com/api/product/";

const getData = async (id) => {
  try {
    let response = await fetch(API);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
