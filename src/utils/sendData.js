import getUrl from "./getUrl";

const sendData = async (form) => {
  const url = getUrl();
  const API = `https://lambda-sales-system-api.herokuapp.com/api/${url[1]}/`;
  const formData = new FormData(form);
  const formDataSerialized = Object.fromEntries(formData);
  console.log(typeof formDataSerialized);

  const jsonData = JSON.stringify(formDataSerialized);
  try {
    const response = await fetch(API, {
      body: jsonData,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    alert("Instancia creada con exito");
  } catch (error) {
    console.log(error);
    alert("Falla en el formulario, revise los datos e intentelo de nuevo.");
  }
};

export default sendData;
