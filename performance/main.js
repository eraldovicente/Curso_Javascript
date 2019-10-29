;(function (win) {
    'use strict';

    var number = 1;

    function init () {
        console.log('hey', number);
    }

    init();
    win.init = init;
})(window);

// uglifyjs --output main.min.js -- main.js
// uglifyjs --output main.min.js --compress -- main.js
// uglifyjs --output main.min.js --mangle --compress -- main.js
// uglifyjs --source-map main.source.map --output main.min.js --mangle --compress -- main.js
// uglifyjs --source-map url=script.min.js --output main.min.js --mangle --compress -- main.js