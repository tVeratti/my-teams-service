'use strict';

module.exports.scrape = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, this is scrape.`
    })
  };

  callback(null, response);
};
