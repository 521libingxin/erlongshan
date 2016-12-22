"use strict";
function domIdObserver(id, counter) {
    if (counter === void 0) { counter = 0; }
    return new Promise(function (resolve, reject) {
        if (document.getElementById(id)) {
            resolve(document.getElementById(id));
        }
        else if (counter >= 10) {
            reject("timeout");
        }
        else {
            setTimeout(function () {
                domIdObserver(id, ++counter).then(function (res) {
                    resolve(res);
                }, function (rej) {
                    reject(rej);
                });
            }, 100);
        }
    });
}
exports.domIdObserver = domIdObserver;
//# sourceMappingURL=helper-functions.js.map