var axios = require('axios');
const server = "http://157.230.18.44/";
const apiEndpoint = "api/";
const local = 'http://localhost:3001/';

let url = "";
// Some nasty stuff here that should be in an environment variable or config logic
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    url = local;
} else {
    url = server + apiEndpoint;
}

var Promise = require('es6-promise').Promise;

var Api = {
    get: function (GETEndPoint) {
        console.log('performing get call for ', GETEndPoint);
        return new Promise(function (resolve, reject) {
            axios.get(url + GETEndPoint)
                .then(function (response) {
                    console.log("response:");
                    console.log(response);
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    },
    post: function (POSTEndPoint, payload) {
        console.log(payload);
        return new Promise(function (resolve, reject) {
            axios.post(url + POSTEndPoint, payload)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (response) {
                    console.log(response);
                    reject(response);
                });
        });
    },
    put: function (PUTEndPoint, payload) {
        return new Promise(function (resolve, reject) {
            axios.put(url + PUTEndPoint, payload)
                .then(function (response) {
                    console.log(response);
                    resolve(response.data);
                })
                .catch(function (response) {
                    console.log(response);
                    reject(response);
                });
        });
    },
    delete: function (DELETEEndPoint) {
        return new Promise(function (resolve, reject) {
            axios.delete(url + DELETEEndPoint)
                .then(function (response) {
                    console.log(response.data);
                    resolve(response.data);
                })
                .catch(function (response) {
                    console.log(response);
                    reject(response);
                });
        });
    }
};


module.exports = Api;