const request = require("request");
require("dotenv").config();
const apiKey = process.env.API_key;

cuttly = (url, callback) => {
  const api = "https://cutt.ly/api/api.php?key=" + apiKey + "&short=" + url;
  request({ url: api, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect............", undefined);
    } else if (response.body.url.shortLink) {
      callback(undefined, { shortLink: response.body.url.shortLink });
    }
  });
};
module.exports = cuttly;
