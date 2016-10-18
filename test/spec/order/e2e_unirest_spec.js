var ValuePO = require('./value.po.js')
var value_po = new ValuePO();


var ValueData = require('../../data/value.data.js');
var test_data = new ValueData();
var data = test_data.inizialize_test_data();
console.log(JSON.stringify(data));

describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBe(true);
      });
    });
  });

// describe('Create Credit', function () {
//     it('should create credit', function (done) {
//         mov.CR01(data.new_credit, done, function (res, done) {
//             if (res.code != 204)
//                 console.log(JSON.stringify(res.body));

//             expect(res.code).toBe(204);

//             mov.PA01(data.get_parameters, done, function (res, done) {
//                 if (res.code != 200)
//                     console.log(JSON.stringify(res.body));

//                 expect(res.code).toBe(200);
//                 res.body.forEach(function (element) {
//                     //console.log('riga: ' + element.IdTrx.trim() + ',' + data.id.id) // + ',' + element.IdTrx.trim() == data.id.id)
//                     if (element.IdTrx.trim() == data.id.id && element.ShopId == null) {
//                         done();
//                     }
//                 }, data);

//             });
//         });
//     });

//     it('should create order info', function (done) {
//         mov.OR01(data.new_order, done, function (res, done) {
//             if (res.code != 204)
//                 console.log(JSON.stringify(res.body));

//             expect(res.code).toBe(204);
//             mov.PA01(data.get_parameters, done, function (res, done) {
//                 if (res.code != 200)
//                     console.log(JSON.stringify(res.body));

//                 expect(res.code).toBe(200);
//                 res.body.forEach(function (element) {
//                     if (element.IdTrx.trim() == data.id.id && element.ShopId != null) {
//                         done();
//                     }
//                 }, data);
                
//             });
//         });
//     });

//     it('should create refund', function (done) {
//         sto.RE02(data.new_refund, done, function (res, done) {
//             if (res.code != 204)
//                 console.log(JSON.stringify(res.body));

//             expect(res.code).toBe(204);

//             sto.PA01(data.get_parameters_sto, done, function (res, done) {
//                 if (res.code != 200)
//                     console.log(JSON.stringify(res.body));

//                 expect(res.code).toBe(200);
//                 var _founded = false;
//                 for (i = 0; i < res.body.length; i++) { 
//                     if (res.body[i].IdTrx.trim() == data.id.id) {
//                         _founded = true;
//                     }
//                 }
//                 if(!_founded){
//                     done();
//                 }
//             });
//         });
//     });

//     it('should execute refund', function (done) {
//         sto.RE01(data.get_parameters_sto, done, function (res, done) {
//             if (res.code != 200)
//                 console.log(JSON.stringify(res.body));

//             expect(res.code).toBe(200);

//             res.body.forEach(function (element) {
//                 if (element.IdTrx.trim() == data.id.id) {
//                     sto.RE03(element, done, function (res, done) {
//                         if (res.code != 204)
//                             console.log(JSON.stringify(res.body));

//                         expect(res.code).toBe(204);
//                         sto.PA01(data.get_parameters_sto, done, function (res, done) {
//                             if (res.code != 200)
//                                 console.log(JSON.stringify(res.body));

//                             expect(res.code).toBe(200);
//                             res.body.forEach(function (element) {
//                                 if (element.IdTrx.trim() == data.id.id) {
//                                     done();
//                                 }
//                             }, data);
//                         });
                        
//                     });
                    
//                 }
//             }, data);
//         });
//     });
// });