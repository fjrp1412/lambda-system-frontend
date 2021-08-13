const getUrl = () => {
  let url = location.hash.slice(1).split("/");
  return url;
};

export default getUrl;
