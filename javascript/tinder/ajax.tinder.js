var Tinder = window.Tinder || new TinderClass();

// AJAX Function
Tinder.ajax = function(url, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", url);
  xhr.send(data);
  xhr.onload = function(event) {
    var response = JSON.parse(event.target.response);
    callback(response);
  };
};