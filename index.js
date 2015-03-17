/**
 * @module: nd-restful
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-02 19:52:36
 */

'use strict';

var RESTful = {

  LIST: function(data, params) {
    return this.get('proxy').call(this, {
      type: 'GET',
      // uri: null,
      data: data,
      params: params
    });
  },

  GET: function(id, data, params) {
    return this.get('proxy').call(this, {
      type: 'GET',
      uri: id,
      data: data,
      params: params
    });
  },

  POST: function(data, params) {
    return this.get('proxy').call(this, {
      type: 'POST',
      // uri: null,
      data: data,
      params: params
    });
  },

  PUT: function(id, data, params) {
    return this.get('proxy').call(this, {
      type: 'PUT',
      uri: id,
      data: data,
      params: params
    });
  },

  PATCH: function(id, data, params) {
    return this.get('proxy').call(this, {
      type: 'PATCH',
      uri: id,
      data: data,
      params: params
    });
  },

  DELETE: function(id, data, params) {
    return this.get('proxy').call(this, {
      type: 'DELETE',
      uri: id,
      data: data,
      params: params
    });
  }
};

// alias
RESTful.GETALL = RESTful.ALL = RESTful.LIST;

module.exports = RESTful;
