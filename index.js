/**
 * @module: nd-restful
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-02 19:52:36
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
   * GET
   * @param {object|string|number} options        参数
   */
  GET: function(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      options = {
        uri: options
      };
    }

    return this.get('proxy').call(this, extend(
      {
        baseUri: this.get('baseUri'),
        type: 'GET'
      }, options
    ));
  },

  /**
   * POST
   * @param {object} options        参数
   */
  POST: function(options) {
    return this.get('proxy').call(this, extend(
      {
        baseUri: this.get('baseUri'),
        type: 'POST'
      }, options
    ));
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
    }

    if (data) {
      options.data = data;
    }

    return this.get('proxy').call(this, extend(
      {
        baseUri: this.get('baseUri'),
        type: 'PUT'
      }, options
    ));
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
    }

    if (data) {
      options.data = data;
    }

    return this.get('proxy').call(this, extend(
      {
        baseUri: this.get('baseUri'),
        type: 'PATCH'
      }, options
    ));
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
    }

    return this.get('proxy').call(this, extend(
      {
        baseUri: this.get('baseUri'),
        type: 'DELETE'
      }, options
    ));
  }
};

/**
 * GETALL
 * ALL
 * LIST
 */
RESTful.GETALL = RESTful.ALL = RESTful.LIST = RESTful.GET;

module.exports = RESTful;
