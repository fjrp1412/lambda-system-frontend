const getIndicator = async (route) => {
  const API = route[2]
    ? `https://lambda-sales-system-api.herokuapp.com/api/${route[1]}/indicator/${route[2]}/`
    : `https://lambda-sales-system-api.herokuapp.com/api/${route[1]}/`;
  console.log(API);
  try {
    let response = await fetch(API);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getIndicator;
