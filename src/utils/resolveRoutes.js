import getUrl from "../utils/getUrl.js";
const resolveRoutes = () => {
  let url = getUrl();

  if (url.length > 2) {
    url[2] = url[2] !== "form" ? "/id" : `/${url[2]}`;
  }
  url = url.join("");
  return url;
};

export default resolveRoutes;
