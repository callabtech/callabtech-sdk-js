"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallabtechSDK = void 0;
var calibration_estimate_1 = require("./api/calibration-estimate");
var manager_1 = require("./api/manager");
var notice_1 = require("./api/notice");
exports.CallabtechSDK = {
    getCalibrationEstimate: calibration_estimate_1.getCalibrationEstimate,
    getCalibrationEstimates: calibration_estimate_1.getCalibrationEstimates,
    requestCalibrationEstimates: calibration_estimate_1.requestCalibrationEstimates,
    createManagerToken: manager_1.createManagerToken,
    getCurrentManager: manager_1.getCurrentManager,
    getManagers: manager_1.getManagers,
    addFiles: notice_1.addFiles,
    createNotice: notice_1.createNotice,
    deleteNotice: notice_1.deleteNotice,
    deleteNoticeFile: notice_1.deleteNoticeFile,
    editNotice: notice_1.editNotice,
    getNotice: notice_1.getNotice,
    getNotices: notice_1.getNotices,
};
//# sourceMappingURL=index.js.map