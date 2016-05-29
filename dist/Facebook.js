'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OAuth = require('./OAuth2');

var _OAuth2 = _interopRequireDefault(_OAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  button: {
    backgroundColor: 'steelblue'
  }
};

var Facebook = function Facebook(props) {
  var config = props.config;
  var textDisplay = props.textDisplay;
  var style = props.style;
  var callback = props.callback;

  var baseStyles = [styles.button];
  if (style) baseStyles.push(style);
  config.callback = callback;
  return _react2.default.createElement(
    _OAuth2.default,
    config,
    _react2.default.createElement(
      'button',
      { style: baseStyles },
      textDisplay
    )
  );
};

Facebook.defaultProps = {
  textDisplay: 'Sign in with Facebook'
};

Facebook.propTypes = {
  config: _react.PropTypes.object.isRequired,
  textDisplay: _react.PropTypes.string,
  style: _react.PropTypes.object
};

exports.default = Facebook;