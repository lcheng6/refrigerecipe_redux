const axios = require('axios')
const ROOT_URL = `http://localhost:8080/api/users/login`;


const signInRequest = (req) => {
  console.log("fetching from SIGN In api ...")
  return new Promise((resolve, reject) => {
    console.log(req);
    axios({
      method: 'post',
      url: ROOT_URL,
      data: {
        email: req.email,
        password: req.password
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

export default signInRequest;
