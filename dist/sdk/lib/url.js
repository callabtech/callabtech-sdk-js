export var getApiUrl = function () {
    var sdkMode = process.env.CALLABTECH_SDK_MODE ? process.env.CALLABTECH_SDK_MODE : 'production';
    if (sdkMode === 'development') {
        return 'http://localhost:3000';
    }
    return 'http://api.callabtech.com:3000';
};
//# sourceMappingURL=url.js.map