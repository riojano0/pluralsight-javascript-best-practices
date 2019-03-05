
'use strict';

let main = (() => {
    var _ref = _asyncToGenerator(function* () {
        var one = yield asyncMethodWithPromise('open Db Connection', 0);
        var two = yield asyncMethodWithPromise('find User', one);
        var three = yield asyncMethodWithPromise('validate User', two);
        var four = yield asyncMethodWithPromise('do stuff', three);
    });

    return function main() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function asyncMethodWithPromise(message, num) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    });
}

function findUser() {
    return asyncMethodWithPromise('find User');
}

function validateUser() {
    return asyncMethodWithPromise('validate User');
}

function doStuff() {
    return asyncMethodWithPromise('do stuff');
}

main();
