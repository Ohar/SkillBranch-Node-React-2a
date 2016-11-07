'use strict';

const summator = require('./summator');

function queryHandler (req, res) {
  const query  = req.query,
        result = summator(query.a, query.b);

  return res.send(String(result));
}

module.exports = queryHandler;
