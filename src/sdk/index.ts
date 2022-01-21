import {
    getCalibrationEstimate,
    getCalibrationEstimates,
    requestCalibrationEstimates,
} from './api/calibration-estimate';
import {
    createManagerToken,
    getCurrentManager,
    getManagers,
} from './api/manager';
import {
    addFiles,
    createNotice,
    deleteNotice,
    deleteNoticeFile,
    editNotice,
    getNotice,
    getNotices,
} from './api/notice';

export const CallabtechSDK = {
    getCalibrationEstimate,
    getCalibrationEstimates,
    requestCalibrationEstimates,
    createManagerToken,
    getCurrentManager,
    getManagers,
    addFiles,
    createNotice,
    deleteNotice,
    deleteNoticeFile,
    editNotice,
    getNotice,
    getNotices,
};
