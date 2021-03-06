/**
 * FarmersMarket.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fmid: {
      'type':'string'
    },
    name: {
      'type': 'string'
    },
    url: {
      'type': 'string'
    },
    street: {
      'type': 'string'
    },
    city: {
      'type': 'string'
    },
    county: {
      'type': 'string'
    },
    state: {
      'type': 'string'
    },
    zip: {
      'type': 'string'
    }
  }
};
