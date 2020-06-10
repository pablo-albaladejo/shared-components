"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("./index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    className: (0, _classnames["default"])(_index["default"].btn, (_cs = {}, _defineProperty(_cs, _index["default"][styleLookups[type]], type), _defineProperty(_cs, _index["default"].small, small), _defineProperty(_cs, _index["default"].live, isLive), _cs)),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _index["default"].content
  }, children));
}

var _default = Button;
exports["default"] = _default;