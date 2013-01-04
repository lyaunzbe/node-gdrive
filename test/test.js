var should = require('chai').should();

var config = require('../config/config.js');



// describe('Google Oauth', function(){
// 	var gAuth = require('../lib/gAuth.js')({
//         client_id : config.client_id,
//         client_secret : config.client_secret
//     });


//     describe('#getAuthCode()', function(){
//         it('respond with authorization code', function(done){

            // gAuth.getAuthCode(function(url){
            //     console.log(url);
            //     done();
            // });
//         });
//     });
// });

 var gAuth = require('../lib/gAuth.js')({
        client_id : config.client_id,
        client_secret : config.client_secret
    });

gAuth.getAuthCode(function(url){
    console.log(url);
});