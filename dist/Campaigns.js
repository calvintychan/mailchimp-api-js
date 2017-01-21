'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Campaigns = function () {
  function Campaigns(settings) {
    _classCallCheck(this, Campaigns);

    this.mailchimp = settings;
  }

  _createClass(Campaigns, [{
    key: 'create',
    value: function create(body) {
      var requiredFields = ['type', 'settings'];
      requiredFields.forEach(function (field) {
        if (!body[field]) {
          throw Error(field + ' param is required.');
        }
      });

      return this.mailchimp.call('POST', '/campaigns', body);
    }
  }]);

  return Campaigns;
}();

exports.default = Campaigns;