'use strict';

function queryLogger (req, res, next) {
  console.info('%s %s', req.method, req.url);
  next();
}

module.exports = queryLogger;
