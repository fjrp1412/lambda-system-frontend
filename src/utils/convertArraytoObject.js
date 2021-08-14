const convertSalesmanObject = (array) => {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    object[array[i].name] = array[i].id;
  }
  return object;
};
export default convertSalesmanObject;
