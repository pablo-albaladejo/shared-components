"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var s = {
  "btn": "index__btn___2oPuP",
  "small": "index__small___3oEFN",
  "content": "index__content___3bEYS",
  "btn-secondary": "index__btn-secondary___20RQo",
  "btn-download": "index__btn-download___1Q3ZE"
};
var styleLookups = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  download: "btn-download"
};

function Button(_ref) {
  var _cs;

  var type = _ref.type,
      children = _ref.children,
      onClick = _ref.onClick,
      small = _ref.small,
      isLive = _ref.isLive;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _classnames["default"])(s.btn, (_cs = {}, _defineProperty(_cs, s[styleLookups[type]], type), _defineProperty(_cs, s.small, small), _defineProperty(_cs, s.live, isLive), _cs)),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: s.content
  }, children));
}

var _default = Button;
exports["default"] = _default;