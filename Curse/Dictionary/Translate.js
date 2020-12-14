// https://www.localeplanet.com/api/translate.js //
(function () {

  let translate = function(text) {
    let xlate = translateLookup(text);
		
    if (typeof xlate == "function") {
      xlate = xlate.apply(this, arguments);
    } else if (arguments.length > 1) {
      let aps = Array.prototype.slice;
      let args = aps.call( arguments, 1 );
  
      xlate = formatter(xlate, args);
    }
		
    return xlate;
  };
	
  // I want it available explicity as well as via the object
  translate.translate = translate;
	
  //from https://gist.github.com/776196 via http://davedash.com/2010/11/19/pythonic-string-formatting-in-javascript/ 
  let defaultFormatter = (function() {
    let re = /\{([^}]+)\}/g;
    return function(s, args) {
      return s.replace(re, function(_, match){ return args[match]; });
    };
  }());
  var formatter = defaultFormatter;
  translate.setFormatter = function(newFormatter) {
    formatter = newFormatter;
  };
	
  translate.format = function() {
    let aps = Array.prototype.slice;
    let s = arguments[0];
    let args = aps.call( arguments, 1 );
  
    return formatter(s, args);
  };

  let dynoTrans = null;
  translate.setDynamicTranslator = function(newDynoTrans) {
    dynoTrans = newDynoTrans;
  };

  let translation = null;
  translate.setTranslation = function(newTranslation) {
    translation = newTranslation;
  };
	
  function translateLookup(target) {
    if (translation == null || target == null) {
      return target;
    }
		
    if (target in translation == false) {
      if (dynoTrans != null) {
        return dynoTrans(target);
      }
      return target;
    }
		
    let result = translation[target];
    if (result == null) {
      return target;
    }
		
    return result;
  }
	
  window._ = translate;

})();