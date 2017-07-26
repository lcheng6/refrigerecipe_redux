const axios = require('axios')
const ROOT_URL = `http://localhost:8080/api/users/login`;


const fridgeRequestAPI = (req) => {
  console.log("fetching from fridgeRequestAPI")
  return new Promise((resolve, reject) => {
    console.log(req);
    axios({
      method: 'get',
      url: ROOT_URL,
      data: {
        user: req.user,
        items: req.items
      }
    })
    .then((res) => {
      console.log(res)
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
  })
}

export default fridgeRequestAPI;
