'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Segments = function () {
  function Segments(settings) {
    _classCallCheck(this, Segments);

    this.mailchimp = settings;
  }

  _createClass(Segments, [{
    key: 'create',
    value: function create(listId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!body.name) {
        throw Error('Segment name is required.');
      }
      return this.mailchimp.call('POST', '/lists/' + listId + '/segments', body);
    }
  }, {
    key: 'batch',
    value: function batch(listId, segmentId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!segmentId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('POST', '/lists/' + listId + '/segments/' + segmentId, body);
    }
  }, {
    key: 'list',
    value: function list(listId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!listId) {
        throw Error('List id is missing.');
      }
      return this.mailchimp.call('GET', '/lists/' + listId + '/segments', query);
    }
  }, {
    key: 'read',
    value: function read(listId, segmentId, query) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!segmentId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('GET', '/lists/' + listId + '/segments/' + segmentId, query);
    }
  }, {
    key: 'update',
    value: function update(listId, segmentId, body) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!segmentId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('PATCH', '/lists/' + listId + '/segments/' + segmentId, body);
    }
  }, {
    key: 'delete',
    value: function _delete(listId, segmentId) {
      if (!listId) {
        throw Error('List id is missing.');
      }
      if (!segmentId) {
        throw Error('Segment id is missing.');
      }
      return this.mailchimp.call('DELETE', '/lists/' + listId + '/segments/' + segmentId);
    }
  }]);

  return Segments;
}();

exports.default = Segments;