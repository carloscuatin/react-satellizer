'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/carloscuatin/projects/react-satellizer/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/carloscuatin/projects/react-satellizer/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/carloscuatin/projects/react-satellizer/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  OAuth2: {
    displayName: 'OAuth2'
  }
};

var _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/OAuth2.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/OAuth2.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformHmrLibIndexJs2(_UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var OAuth2 = _wrapComponent('OAuth2')(function (_Component) {
  _inherits(OAuth2, _Component);

  function OAuth2(props) {
    _classCallCheck(this, OAuth2);

    console.log('hi');

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OAuth2).call(this, props));

    _this.state = { popupOpen: false };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(OAuth2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('oauth2');
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ popupOpen: true });
      console.log('clicked on button');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var childrenWithProps = _react3.default.Children.map(props.children, function (child) {
        return _react3.default.cloneElement(child, { onClick: _this2.handleClick });
      });

      var params = {
        client_id: props.clientId,
        redirect_uri: props.redirectUri,
        scope: props.scope,
        display: 'popup',
        response_type: 'code'
      };

      var url = props.authorizationUrl + '?' + _querystring2.default.stringify(params);

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_Popup2.default, _extends({ open: this.state.popupOpen, popupUrl: url }, props)),
        childrenWithProps
      );
    }
  }]);

  return OAuth2;
}(_react2.Component));

exports.default = OAuth2;