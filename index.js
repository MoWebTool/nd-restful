/**
 * @module Restful
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

function extend(target, source) {
  source && Object.keys(source).forEach(function(key) {
    target[key] = source[key];
  });

  return target;
}

/**
 * 参数 options 说明
 *
 * {string} uri            资源 ID
 * {object} data           表单数据，以查询参数形式拼接到请求地址
 * {array}  params         以路径形式拼接到请求地址
 * {object} additional     以查询参数形式拼接到请求地址
 * {object} replacement    用于替换 url 中的变量
 */

var RESTful = {

  /**
   * @protected
   * request: function(options) {
   * },
   */

  /**
   * GET
   * @param {object|string|number} options        参数
   */
  GET: function(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        uri: options
      };
    } else if (!options) {
      options = {};
    }

    // this.trigger('GET', options);

    return this.request(extend({
      type: 'GET'
    }, options));
  },

  /**
   * POST
   * @param {object} options        参数
   */
  POST: function(options) {
    if (!options) {
      options = {};
    }

    // this.trigger('POST', options);

    return this.request(extend({
      type: 'POST'
    }, options));
  },

  /**
   * PUT
   * @param {object} options        参数
   * @param {object} data           参数
   */
  PUT: function(options, data) {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        uri: options
      };
    } else if (!options) {
      options = {};
    }

    if (data) {
      options.data = data;
    }

    // this.trigger('PUT', options);

    return this.request(extend({
      type: 'PUT'
    }, options));
  },

  /**
   * PATCH
   * @param {object} options        参数
   * @param {object} data           参数
   */
  PATCH: function(options, data) {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        uri: options
      };
    } else if (!options) {
      options = {};
    }

    if (data) {
      options.data = data;
    }

    // this.trigger('PATCH', options);

    return this.request(extend({
      type: 'PATCH'
    }, options));
  },

  /**
   * DELETE
   * @param {object|string|number} options        参数
   */
  DELETE: function(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        uri: options
      };
    } else if (!options) {
      options = {};
    }

    // this.trigger('DELETE', options);

    return this.request(extend({
      type: 'DELETE'
    }, options));
  }
};

/**
 * GETALL
 * ALL
 * LIST
 */
RESTful.GETALL = RESTful.ALL = RESTful.LIST = RESTful.GET;

module.exports = RESTful;
