const axios = require('axios')
const ROOT_URL = `http://localhost:8080/api/users`


const signUpRequest = (req) => {
  console.log("fetching from SIGN UP api ...")
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: ROOT_URL,
      data: {
        email: req.email,
        password: req.password,
        phone: req.phone
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

export default signUpRequest
