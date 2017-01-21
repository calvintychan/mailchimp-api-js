'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lists = function () {
  function Lists(settings) {
    _classCallCheck(this, Lists);

    this.mailchimp = settings;
  }

  _createClass(Lists, [{
    key: 'create',
    value: function create(body) {
      var requiredFields = ['name', 'contact', 'permission_reminder', 'campaign_defaults'];
      requiredFields.forEach(function (field) {
        if (!body[field]) {
          throw Error(field + ' param is required.');
        }
      });

      return this.mailchimp.call('POST', '/lists', body);
    }
  }, {
    key: 'list',
    value: function list(query) {
      return this.mailchimp.call('GET', '/lists', query);
    }
  }, {
    key: 'read',
    value: function read(id, query) {
      if (!id) {
        // Handle error
      }
      return this.mailchimp.call('GET', '/lists/' + id, query);
    }
  }, {
    key: 'update',
    value: function update(id, body) {
      if (!id) {
        // Handle error
      }
      return this.mailchimp.call('PATCH', '/lists/' + id, body);
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      return this.mailchimp.call('DELETE', '/lists/' + id);
    }
  }, {
    key: 'batch',
    value: function batch(id, body) {
      if (!body.members) {
        throw Error('members param is required');
      }
      return this.mailchimp.call('POST', '/lists/' + id, body);
    }
  }]);

  return Lists;
}();

exports.default = Lists;