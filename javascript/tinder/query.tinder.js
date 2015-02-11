// applying Chaining pattern

var TinderClass = function() {
  this.selector = {};
}

var Tinder = window.Tinder || new TinderClass();

TinderClass.prototype.query = function(selector) {
  this.selector = document.querySelector(selector);
  return this;
}

TinderClass.prototype.on = function(event, callback) {
  this.selector.addEventListener(event, callback);
  return this;
}

