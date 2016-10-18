var ValuePO = require('./value.po.js')
var value_po = new ValuePO();


var ValueData = require('../../data/value.data.js');
var test_data = new ValueData();
var data = test_data.inizialize_test_data();
console.log(JSON.stringify(data));

describe('Value Lifecycle', function () {

    it('should create value', function (done) {
        value_po.VA01(data.new_value, done, function (res, done) {
            if (res.code != 200)
                console.log(JSON.stringify(res.body));

            expect(res.code).toBe(200);
            setTimeout(function(done) {
                value_po.VA02(null, done, function (res, done) {
                    if (res.code != 200)
                        console.log(JSON.stringify(res.body));

                    expect(res.code).toBe(200);
                    res.body.forEach(function (element) {
                        //console.log('riga: ' + element.name + ',' + data.new_value.name)
                        if (element.name == data.new_value.name) {
                            data.new_value.id = element.id;
                            data.update_value.id = element.id;
                            done();
                        }
                    }, data);

                });
            }, 500, done);
        });
    });

    it('should get value', function (done) {

        value_po.VA03(data.new_value, done, function (res, done) {
            if (res.code != 200)
                console.log(JSON.stringify(res.body));

            expect(res.code).toBe(200);
            console.log(data.new_value.id);
            expect(res.body.id).toBe(data.new_value.id);
            expect(res.body.name).toBe(data.new_value.name);
            done();
        });

    });

    it('should update value', function (done) {
        value_po.VA04(data.update_value, done, function (res, done) {
            if (res.code != 200)
                console.log(JSON.stringify(res.body));

            expect(res.code).toBe(200);

            setTimeout(function(done) {
                value_po.VA03(data.new_value, done, function (res, done) {
                    if (res.code != 200)
                        console.log(JSON.stringify(res.body));

                    expect(res.code).toBe(200);
                    expect(res.body.id).toBe(data.new_value.id);
                    expect(res.body.name).toBe(data.update_value.name);
                    done();
                });
            }, 500, done);
        });
    });

    it('should delete value', function (done) {
        value_po.VA05(data.update_value, done, function (res, done) {
            if (res.code != 200)
                console.log(JSON.stringify(res.body));

            expect(res.code).toBe(200);

            setTimeout(function(done) {
                value_po.VA03(data.new_value, done, function (res, done) {
                    if (res.code != 200)
                        console.log(JSON.stringify(res.body));

                    expect(res.code).toBe(200);
                    expect(res.body.name).toBe(null);
                    done();
                });
            }, 500, done);
        });
    });
});