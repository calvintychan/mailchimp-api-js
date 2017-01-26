'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Members = function () {
  function Members(settings) {
    _classCallCheck(this, Members);

    this.mailchimp = settings;
  }

  _createClass(Members, [{
    key: 'add',
    value: function add(listId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }

      var requiredFields = ['email', 'status'];
      requiredFields.forEach(function (field) {
        if (!body[field]) {
          throw Error(field + ' param is required.');
        }
      });

      return this.mailchimp.call('POST', '/lists/' + listId + '/members', body);
    }
  }, {
    key: 'list',
    value: function list(listId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!listId) {
        throw Error('List id is missing.');
      }

      return this.mailchimp.call('GET', '/lists/' + listId + '/members', query);
    }
  }, {
    key: 'read',
    value: function read(listId, subscriberHash) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!subscriberHash) {
        throw Error('Subscriber hash is missing.');
      }

      return this.mailchimp.call('GET', '/lists/' + listId + '/members/' + subscriberHash, query);
    }
  }, {
    key: 'update',
    value: function update(listId, subscriberHash, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!subscriberHash) {
        throw Error('Subscriber hash is missing.');
      }

      return this.mailchimp.call('PATCH', '/lists/' + listId + '/members/' + subscriberHash, body);
    }
  }, {
    key: 'delete',
    value: function _delete(listId, subscriberHash) {
      if (!listId) {
        throw Error('List id is missing.');
      }

      return this.mailchimp.call('DELETE', '/lists/' + listId + '/members/' + subscriberHash);
    }
  }]);

  return Members;
}();

exports.default = Members;