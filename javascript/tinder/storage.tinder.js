var Tinder = window.Tinder || new TinderClass();

if (!window.localStorage) throw new Error("Local Storage API not available.");

var StorageSingleton = (function() {
  function Singleton() {
    //set the name parameter
    this.name = 'StorageSingleton';
  }

  var instance; //this is our instance holder
  //this is an emulation of static variables and methods
  var _static = {
    name: 'StorageSingleton',
    save: function(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    get: function(key) {
      return JSON.parse(window.localStorage.getItem(key));
    },
    remove: function(key) {
      window.localStorage.removeItem(key);
    },
    getInstance: function() {
      if (instance === undefined) {
        instance = new Singleton();
      }
      return instance;
    }
  };

  return _static;
})();
