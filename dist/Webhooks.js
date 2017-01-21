'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['/lists/', '/webhooks'], ['/lists/', '/webhooks']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var webhooks = function () {
  function webhooks(settings) {
    _classCallCheck(this, webhooks);

    this.mailchimp = settings;
  }

  _createClass(webhooks, [{
    key: 'create',
    value: function create(listId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('POST', '/lists/' + listId + '/webhooks', body);
    }
  }, {
    key: 'batch',
    value: function batch(listId, webhookId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!webhookId) {
        throw Error('Webhook id is missing.');
      }
      return this.mailchimp.call('POST', '/lists/' + listId + '/webhooks/' + webhookId, body);
    }
  }, {
    key: 'list',
    value: function list(listId, query) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('GET'(_templateObject, listId), query);
    }
  }, {
    key: 'read',
    value: function read(listId, webhookId, query) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!webhookId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('GET', '/lists/' + listId + '/webhooks/' + webhookId, query);
    }
  }, {
    key: 'update',
    value: function update(listId, webhookId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!webhookId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('PATCH', '/lists/' + listId + '/webhooks/' + webhookId, body);
    }
  }, {
    key: 'delete',
    value: function _delete(listId, webhookId) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!webhookId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('DELETE', '/lists/' + listId + '/webhooks/' + webhookId);
    }
  }]);

  return webhooks;
}();

exports.default = webhooks;