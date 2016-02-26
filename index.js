module.exports = cb;

function cb(description, successCallback) {  
  if (typeof description !== 'string') {
    throw new Error('Provide request purpose, e.g. cb(\'getting user information\')');
  }
  if ((arguments.length > 1) && (typeof successCallback !== 'function')) {
    throw new Error('The second argument must be function, provided: ' + typeof successCallback);
  }
  var callbackArgumets = Array.prototype.slice.call(arguments, 2);
  return function (err, resp, body) {
    if (err) {
      console.log('ERROR sending request - '+ description +':', err);
    } else if (resp.statusCode >= 400) {
      console.log('ERROR response from server - '+ description +':', resp.statusCode, body);
    } else {
      console.log('Done', description);
      if (successCallback) {
        callbackArgumets.unshift(body);
        successCallback.apply(null, callbackArgumets);
      }
    }
  };
}