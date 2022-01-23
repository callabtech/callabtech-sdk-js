"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiUrl = void 0;
var getApiUrl = function () {
    var sdkMode = process.env.CALLABTECH_SDK_MODE ? process.env.CALLABTECH_SDK_MODE : 'production';
    if (sdkMode === 'development') {
        var host = process.env.CALLABTECH_SDK_HOST ? process.env.CALLABTECH_SDK_HOST : 'http://localhost';
        var port = process.env.CALLABTECH_SDK_PORT ? Number(process.env.CALLABTECH_SDK_PORT) : 3000;
        return "".concat(host, ":").concat(port);
    }
    return 'http://api.callabtech.com';
};
exports.getApiUrl = getApiUrl;
//# sourceMappingURL=url.js.map