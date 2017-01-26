'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Campaigns = require('./Campaigns');

var _Campaigns2 = _interopRequireDefault(_Campaigns);

var _Lists = require('./Lists');

var _Lists2 = _interopRequireDefault(_Lists);

var _Members = require('./Members');

var _Members2 = _interopRequireDefault(_Members);

var _MergeFields = require('./MergeFields');

var _MergeFields2 = _interopRequireDefault(_MergeFields);

var _Segments = require('./Segments');

var _Segments2 = _interopRequireDefault(_Segments);

var _Webhooks = require('./Webhooks');

var _Webhooks2 = _interopRequireDefault(_Webhooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mailchimp = function () {
  function Mailchimp(username, apiKey) {
    _classCallCheck(this, Mailchimp);

    if (!apiKey) {
      throw Error('API key is missing.');
    }
    if (!username) {
      throw Error('Username is missing.');
    }
    this.version = '3.0';
    this.apiKey = apiKey;
    this.datacenter = apiKey.split('-')[1];
    this.endpoint = 'https://' + this.datacenter + '.api.mailchimp.com/' + this.version;
    this.username = username;
    this.campaigns = new _Campaigns2.default(this);
    this.lists = new _Lists2.default(this);
    this.mergeFields = new _MergeFields2.default(this);
    this.segments = new _Segments2.default(this);
    this.webhooks = new _Webhooks2.default(this);
    this.members = new _Members2.default(this);
  }

  _createClass(Mailchimp, [{
    key: 'call',
    value: function call(http, method, params) {
      // console.log(http, method);
      var req = (0, _superagent2.default)(http, '' + this.endpoint + method).set('content-type', 'application/json').auth(this.username, this.apiKey);

      if (http === 'POST' || http === 'PATCH') {
        req.send(params);
      } else if (http === 'GET') {
        req.query(params);
      }

      return req;
    }
  }]);

  return Mailchimp;
}();

exports.default = Mailchimp;