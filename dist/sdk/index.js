import { getCalibrationEstimate, getCalibrationEstimates, requestCalibrationEstimates, } from './api/calibration-estimate';
import { createManagerToken, getCurrentManager, getManagers, } from './api/manager';
import { addFiles, createNotice, deleteNotice, deleteNoticeFile, editNotice, getNotice, getNotices, } from './api/notice';
export var CallabtechSDK = {
    getCalibrationEstimate: getCalibrationEstimate,
    getCalibrationEstimates: getCalibrationEstimates,
    requestCalibrationEstimates: requestCalibrationEstimates,
    createManagerToken: createManagerToken,
    getCurrentManager: getCurrentManager,
    getManagers: getManagers,
    addFiles: addFiles,
    createNotice: createNotice,
    deleteNotice: deleteNotice,
    deleteNoticeFile: deleteNoticeFile,
    editNotice: editNotice,
    getNotice: getNotice,
    getNotices: getNotices,
};
//# sourceMappingURL=index.js.map