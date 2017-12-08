'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BackHeader = require('../BackHeader');

var _BackHeader2 = _interopRequireDefault(_BackHeader);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = function button(text) {
  return _react2.default.createElement(
    'span',
    { key: text, className: _styles2.default.button },
    text
  );
};

var section = function section(buttons, title, body) {
  return _react2.default.createElement(
    'div',
    { key: buttons.join(''), className: _styles2.default.section },
    buttons.map(function (b) {
      return button(b);
    }),
    _react2.default.createElement(
      'p',
      { className: _styles2.default.title },
      title
    ),
    body.split('\n').map(function (line, index) {
      return _react2.default.createElement(
        'p',
        { key: index, className: _styles2.default.body },
        line
      );
    })
  );
};

var sections = function sections(currentLocale) {
  return [{
    buttons: ['*', '#', '2'],
    title: _i18n2.default.getString('starSharp2Title', currentLocale),
    body: _i18n2.default.getString('starSharp2Body', currentLocale)
  }, {
    buttons: ['*', '#', '3'],
    title: _i18n2.default.getString('starSharp3Title', currentLocale),
    body: _i18n2.default.getString('starSharp3Body', currentLocale)
  }, {
    buttons: ['*', '#', '4'],
    title: _i18n2.default.getString('starSharp4Title', currentLocale),
    body: _i18n2.default.getString('starSharp4Body', currentLocale)
  }, {
    buttons: ['*', '#', '5'],
    title: _i18n2.default.getString('starSharp5Title', currentLocale),
    body: _i18n2.default.getString('starSharp5Body', currentLocale)
  }, {
    buttons: ['*', '#', '6'],
    title: _i18n2.default.getString('starSharp6Title', currentLocale),
    body: _i18n2.default.getString('starSharp6Body', currentLocale)
  }, {
    buttons: ['*', '#', '7'],
    title: _i18n2.default.getString('starSharp7Title', currentLocale),
    body: _i18n2.default.getString('starSharp7Body', currentLocale)
  }, {
    buttons: ['*', '#', '8'],
    title: _i18n2.default.getString('starSharp8Title', currentLocale),
    body: _i18n2.default.getString('starSharp8Body', currentLocale)
  }, {
    buttons: ['*', '9'],
    title: _i18n2.default.getString('star9Title', currentLocale),
    body: _i18n2.default.getString('star9Body', currentLocale)
  }];
};

var ConferenceCommands = function ConferenceCommands(_ref) {
  var currentLocale = _ref.currentLocale,
      onBack = _ref.onBack;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.container },
    _react2.default.createElement(
      _BackHeader2.default,
      { onBackClick: onBack },
      'Conference Commands'
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.conferenceCommands },
      sections(currentLocale).map(function (s) {
        return section(s.buttons, s.title, s.body);
      })
    )
  );
};

ConferenceCommands.propTypes = {
  currentLocale: _propTypes2.default.string.isRequired,
  onBack: _propTypes2.default.func.isRequired
};

exports.default = ConferenceCommands;
//# sourceMappingURL=index.js.map
