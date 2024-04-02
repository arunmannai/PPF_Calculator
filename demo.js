import axios from 'axios';

const data = JSON.stringify({
  "email": "arunmannai@gmail.com",
  "password": "password",
  "returnSecureToken": true
});

const config = {
  method: 'post',
  url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYHxY2nbQGAMF4mMJ-Dvy3RavMYvDGvHE',
  headers: { 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(response => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  console.log(error);
});