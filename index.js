/**
 * @module: nd-restful
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-02 19:52:36
 */

'use strict';

/*jshint maxparams:4*/

function parseArgs(params, additional) {
  var options = {};

  if (params) {
    if (Array.isArray(params)) {
      options.params = params;
    } else {
      options.additional = additional;
    }
  }

  if (additional) {
    options.additional = additional;
  }

  return options;
}

function extend(target, source) {
  Object.keys(source).forEach(function(key) {
    target[key] = source[key];
  });

  return target;
}

var RESTful = {

  /**
   * LIST
   * @param {object} [data]       表单数据，以查询参数形式拼接到请求地址
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  LIST: function(data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'GET',
        // uri: null,
        data: data
      }
    ));
  },

  /**
   * GET
   * @param {string} id           资源 ID
   * @param {object} [data]       表单数据，以查询参数形式拼接到请求地址
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  GET: function(id, data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'GET',
        uri: id,
        data: data
      }
    ));
  },

  /**
   * POST
   * @param {object} data         表单数据
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  POST: function(data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'POST',
        // uri: null,
        data: data
      }
    ));
  },

  /**
   * PUT
   * @param {string} id           资源 ID
   * @param {object} data         表单数据，以查询参数形式拼接到请求地址
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  PUT: function(id, data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'PUT',
        uri: id,
        data: data
      }
    ));
  },

  /**
   * PATCH
   * @param {string} id           资源 ID
   * @param {object} data         表单数据
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  PATCH: function(id, data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'PATCH',
        uri: id,
        data: data
      }
    ));
  },

  /**
   * DELETE
   * @param {string} id           资源 ID
   * @param {object} [data]       表单数据
   * @param {array}  [params]     以路径形式拼接到请求地址
   * @param {object} [additional] 以查询参数形式拼接到请求地址
   */
  DELETE: function(id, data, params, additional) {
    return this.get('proxy').call(this, extend(
      parseArgs(params, additional),
      {
        baseUri: this.get('baseUri'),
        type: 'DELETE',
        uri: id,
        data: data
      }
    ));
  }
};

// alias
RESTful.GETALL = RESTful.ALL = RESTful.LIST;

module.exports = RESTful;
