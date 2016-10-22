exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    // Derek: has to do with implicit/explicit binding
    // there's a specific function designed for this
    return fn.bind(obj);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
