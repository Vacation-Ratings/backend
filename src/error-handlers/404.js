'use strict';

module.exports = function (req, res, next) {

  try {
    const error = err.message ? err.message : err;
    console.log('***********THIS IS THE 404 ERROR***********', error);
    const errorObject = {
      status: 404,
      message: 'Sorry, we could not find what you were looking for',
    };
  
    res.status(404).json(errorObject);
  } catch(e) {
    console.error('***********THIS IS THE 404 ERROR***********', e.message);
  }
}
