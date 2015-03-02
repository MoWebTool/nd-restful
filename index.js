/**
 * @module: nd-restful
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-02 19:52:36
 */

'use strict';

module.exports = {

  LIST: function(data) {
    return this.get('proxy')({
      type: 'GET',
      // uri: null,
      data: data
    });
  },

  GET: function(id, data) {
    return this.get('proxy')({
      type: 'GET',
      uri: id,
      data: data
    });
  },

  POST: function(data) {
    return this.get('proxy')({
      type: 'POST',
      // uri: null,
      data: data
    });
  },

  PATCH: function(id, data) {
    return this.get('proxy')({
      type: 'PATCH',
      uri: id,
      data: data
    });
  },

  DELETE: function(id, data) {
    return this.get('proxy')({
      type: 'DELETE',
      uri: id,
      data: data
    });
  }
};

// alias
module.exports.GETALL = module.exports.ALL = module.exports.LIST;
