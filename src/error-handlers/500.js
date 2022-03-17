'use strict';

module.exports = function (err, req, res, next) {

  try {
    const error = err.message ? err.message : err;
    console.log('***********THIS IS THE 500 ERROR***********', error);
    const errorObject = {
      status: 500,
      message: error,
    };
    res.status(500).json(errorObject);
  } catch(e) {
    console.error('***********THIS IS THE 500 ERROR***********', e.message);
  }
};
