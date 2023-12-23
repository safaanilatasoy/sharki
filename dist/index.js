function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"btn":"_1Pz2d","primaryButton":"_3WL0S","defaultButton":"_18OwI","dashedButton":"_2zkcJ","textButton":"_RNxYy","linkButton":"_1YZI5"};

var Button = function Button(_ref) {
  var text = _ref.text,
    type = _ref.type;
  return /*#__PURE__*/React.createElement("button", {
    className: styles.btn + " " + styles[type]
  }, text);
};
var Text = function Text(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/React.createElement("p", null, text);
};

exports.Button = Button;
exports.Text = Text;
//# sourceMappingURL=index.js.map
