
function createMiniHarp(){
    var connect = require('connect');
    var app = connect();
    return app;
}

module.exports = createMiniHarp;

// var connect =  require('connect');
// var makeJade =  require('./node_modules/jade');

// function createMiniHarp(root) {
//     var app = connect();

//     app.use(makeJade(root));

//     return app;
// }
