'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MergeFields = function () {
  function MergeFields(settings) {
    _classCallCheck(this, MergeFields);

    this.mailchimp = settings;
  }

  _createClass(MergeFields, [{
    key: 'add',
    value: function add(listId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('POST', '/lists/' + listId + '/merge-fields', body);
    }
  }, {
    key: 'list',
    value: function list(listId, query) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('GET', '/lists/' + listId + '/merge-fields', query);
    }
  }, {
    key: 'read',
    value: function read(listId, mergeId, query) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!mergeId) {
        throw Error('Merge id is missing.');
      }
      return this.mailchimp.call('GET', '/lists/' + listId + '/merge-fields/' + mergeId, query);
    }
  }, {
    key: 'update',
    value: function update(listId, mergeId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!mergeId) {
        throw Error('Merge id is missing.');
      }
      return this.mailchimp.call('PATCH', '/lists/' + listId + '/merge-fields/' + mergeId, body);
    }
  }, {
    key: 'delete',
    value: function _delete(listId, mergeId) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('DELETE', '/lists/' + listId + '/merge-fields/' + mergeId);
    }
  }]);

  return MergeFields;
}();

exports.default = MergeFields;