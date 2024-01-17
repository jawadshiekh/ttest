const pluralize = require("pluralize");

String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
};

String.prototype.pluralize = function () {
  return pluralize(this);
};
