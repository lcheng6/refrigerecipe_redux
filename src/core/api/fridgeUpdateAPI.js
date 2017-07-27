const axios = require('axios')
const ROOT_URL = `http://localhost:8080/api/users/login`;


const fridgeUpdateAPI = (req) => {
  console.log("fetching from fridgeUpdateAPI")
  return new Promise((resolve, reject) => {
    console.log(req);
    axios({
      method: req.method,
      url: ROOT_URL,
      data: {
        user: req.user,
        item: req.key,
      }
    })
    .then((res) => {
      console.log(res)
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export default fridgeUpdateAPI;
