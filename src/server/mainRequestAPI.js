

const dotenv = require("dotenv");
dotenv.config();
// function validiationUrl(res, req, next) {
//     if(!req.body.text) {
//         return res.status(400).json({
//             massage: 'Invalid Url input'
//         })
//     }
//     return next()
// }

function handleResponse(res, req, next) {
  console.log(res,req, "handleresonseda 1-log");
  
  var aylien = require("aylien_textapi");

  var textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY,
  });

  textapi.sentiment(
    {
      // text: req.body.text,
      'url':req.body.text
    },
    function (error, response) {
      if (error === null) {
        res.send(response);
        console.log(response);
      } else console.log(error);
    }
  );
}
exports.handleResponse = handleResponse;
// exports.validiationUrl = validiationUrl