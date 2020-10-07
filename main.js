let fs = require('fs');
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users'


fs.writeFile('addressList.json', '', () => {

});

fs.writeFile('user.js', '', () => {



function grabbingData(url) {
    axios
    .get(url)
    .then((users) => users.data)
    .then((usersData) => )
}
grabbingData(url);

});