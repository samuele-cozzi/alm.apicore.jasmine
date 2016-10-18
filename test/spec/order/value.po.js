var unirest = require('unirest');

var ValuePO = function () {

    this.OR01  = function (element, done, callback) {
        var req = unirest("POST", process.env.server + "/api/orders");

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

    this.OR02  = function (element, done, callback) {
        var req = unirest("GET", process.env.server + "/api/orders");
        
        var date = new Date();
        date.setMinutes(date.getMinutes() + 1);

        req.query({
            "dateFrom": element.dateFrom.toISOString().split('T')[0],
            "dateTo": date.toISOString(),
            "type": element.type
        });

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.end(function (res) {
            callback(res, done);
        });
    };

    this.OR03  = function (element, done, callback) {
        var req = unirest("GET", process.env.server + "/api/orders/" + element.order_id);

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json"
        });

        req.end(function (res) {
            callback(res, done);
        });
    };

    this.OR04  = function (element, done, callback) {
        var req = unirest("PUT", process.env.server + "/api/orders/" + element.order_id);

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

    this.OR05  = function (element, done, callback) {
        var req = unirest("DELETE", process.env.server + "/api/orders/" + element.order_id);

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