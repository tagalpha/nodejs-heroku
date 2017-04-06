const express = require('express');
const api = express();

api.listen(process.env.PORT);
api.get('*', function(req, res, next) {
  
});
