const axios = require('axios') // tested this in node cli to make sure it worked first
// import axios from 'axios'
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
      //console.log("res ", res);
      console.log("x-auth: " + res.headers['x-auth']);
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
  })
}

// export default signInRequest
signInRequest({email: "logan@gmail.com", password: "my-password"});
