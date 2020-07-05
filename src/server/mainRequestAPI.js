
const dotenv = require("dotenv");
dotenv.config();

function handleResponse(res, req) {
 
  
  var aylien = require("aylien_textapi");

  var textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY,
  });

  textapi.sentiment(
    {
      'url':req.req.body.text
    },
    function (error, response) {
      if (error === null) {
        res.res.send(response);
        console.log(response);
      } else console.log(error);
    }
  );
}
exports.handleResponse = handleResponse;
