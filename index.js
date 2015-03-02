/**
 * @module: nd-restful
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-02 19:52:36
 */

'use strict';

var $ = require('jquery');

/* Helpers */

function _ajax(type, url, data) {
  var processData = true;

  // GET：data 为 queryString，需要 jQuery 处理
  // OTR：data 为表单数据，手动转为 JSON string
  if (data && typeof data === 'object' && /^POST|PATCH|PUT$/i.test(type)) {
    data = JSON.stringify(data);
    processData = false;
  }

  return $.ajax({
    url: url,
    type: type,
    data: data,
    processData: processData
  });
}

var REST = function(options) {
  this.options = options || {
    // baseUri
    // resources
  };
};

REST.prototype._makeUrl = function(url) {
  var _url = this.options.baseUri + this.options.resources;

  if (url !== null) {
    return [_url, url].join('/');
  }

  return _url;
};

REST.prototype._ajax = function(type, url, data) {
  return _ajax(type, this._makeUrl(url), data);
};

REST.prototype.LIST = function(data) {
  return this._ajax('GET', null, data);
};

REST.prototype.GET = function(id, data) {
  return this._ajax('GET', id, data);
};

REST.prototype.POST = function(data) {
  return this._ajax('POST', null, data);
};

REST.prototype.PATCH = function(id, data) {
  return this._ajax('PATCH', id, data);
};

REST.prototype.DELETE = function(id, data) {
  return this._ajax('DELETE', id, data);
};

module.exports = function(options) {
  return new REST(options);
};
