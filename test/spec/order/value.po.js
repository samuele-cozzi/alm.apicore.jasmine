var unirest = require('unirest');

var ValuePO = function () {

    this.VA01  = function (element, done, callback) {
        var req = unirest("POST", process.env.server + "/api/values");

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.type("json");
        req.send(element);

        req.end(function (res) {
            callback(res, done);
            
        });
    };

    this.VA02  = function (element, done, callback) {
        var req = unirest("GET", process.env.server + "/api/values");
        
        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.end(function (res) {
            callback(res, done);
        });
    };

    this.VA03  = function (element, done, callback) {
        var req = unirest("GET", process.env.server + "/api/values/" + element.id);

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.end(function (res) {
            callback(res, done);
        });
    };

    this.VA04  = function (element, done, callback) {
        var req = unirest("PUT", process.env.server + "/api/values/" + element.id);

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.type("json");
        req.send(element);

        req.end(function (res) {
            callback(res, done);
            
        });
    };

    this.VA05  = function (element, done, callback) {
        var req = unirest("DELETE", process.env.server + "/api/values/" + element.id);

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.end(function (res) {
            callback(res, done);
            
        });
    };
};
module.exports = ValuePO;