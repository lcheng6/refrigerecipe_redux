const axios = require('axios') // tested this in node cli to make sure it worked first
// import axios from 'axios'
const ROOT_URL = `http://localhost:8080/api/users`


const signUpRequest = () => {
  console.log("fetching from SIGN UP api ...")
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: ROOT_URL,
      data: {
        email: "logan@gmail.com",
        password: "my-password",
        phone: "3122333333"
      },
      headers: {
        "X-Mashape-Key": "PUkQ3poysFmsheozAr97ixdGtaG5p1Gf87kjsnzDPLfDddaOJn",
        "Accept": "application/json",
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

// export default signUpRequest
signUpRequest()
