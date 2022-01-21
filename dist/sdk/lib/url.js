export var getApiUrl = function () {
    var apiEnv = process.env.CALLABTECH_API_HOST ? process.env.CALLABTECH_API_HOST : '';
    if (apiEnv === 'development') {
        return 'http://localhost:3000';
    }
    return 'http://api.callabtech.com:3000';
};
//# sourceMappingURL=url.js.map