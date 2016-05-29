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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Popup: {
    displayName: 'Popup'
  }
};

var _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/Popup.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/Popup.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformHmrLibIndexJs2(_UsersCarloscuatinProjectsReactSatellizerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Popup = _wrapComponent('Popup')(function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.open) {
        this.openPopup();
      }
    }
  }, {
    key: 'openPopup',
    value: function openPopup() {
      var props = this.props;
      var width = props.width || 500;
      var height = props.height || 500;

      var options = {
        width: width,
        height: height,
        top: window.screenY + (window.outerHeight - height) / 2.5,
        left: window.screenX + (window.outerWidth - width) / 2
      };

      var popup = window.open(props.popupUrl, '_blank', _querystring2.default.stringify(options, ','));

      if (props.popupUrl === 'about:blank') {
        popup.document.body.innerHTML = 'Loading...';
      }

      this.pollPopup(popup);
    }
  }, {
    key: 'pollPopup',
    value: function pollPopup(window) {
      var props = this.props;
      var redirectUri = _url2.default.parse(props.redirectUri);
      var redirectUriPath = redirectUri.host + redirectUri.pathname;

      // if (requestToken) {
      //   window.location = config.authorizationUrl + '?' + qs.stringify(requestToken);
      // }

      var polling = setInterval(function () {
        if (!window || window.closed) {
          clearInterval(polling);
        }
        try {
          var popupUrlPath = window.location.host + window.location.pathname;

          if (popupUrlPath === redirectUriPath) {
            if (window.location.search || window.location.hash) {
              var query = _querystring2.default.parse(window.location.search.substring(1).replace(/\/$/, ''));
              var hash = _querystring2.default.parse(window.location.hash.substring(1).replace(/[\/$]/, ''));
              var params = Object.assign({}, query, hash);

              if (params.error) {
                console.error(params.error);
              } else {
                console.log(params);
              }
            } else {
              console.info('OAuth redirect has occurred but no query or hash parameters were found.');
            }
          }
        } catch (error) {
          // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
          // A hack to get around same-origin security policy errors in Internet Explorer.
        }
      }, 500);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      console.log('clicked on button');
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('popup open?', this.props.open);
      return null;
    }
  }]);

  return Popup;
}(_react3.default.Component));

exports.default = Popup;