export declare const CallabtechSDK: {
    getCalibrationEstimate: ({ id }: {
        id: number;
    }) => Promise<{
        calibrationEstimate: import("..").CalibrationEstimate;
    }>;
    getCalibrationEstimates: () => Promise<{
        calibrationEstimates: import("..").CalibrationEstimate[];
    }>;
    requestCalibrationEstimates: ({ title, contents, requesterName, companyName, companyAddress, contact, email, }: {
        title: string;
        contents: string;
        requesterName: string;
        companyName: string;
        companyAddress: string;
        contact: string;
        email: string;
    }) => Promise<{
        isSuccess: boolean;
    }>;
    createManagerToken: ({ name, password, }: {
        name: string;
        password: string;
    }) => Promise<{
        accessToken: string;
    }>;
    getCurrentManager: ({ accessToken }: {
        accessToken: string;
    }) => Promise<{
        manager: import("..").Manager;
    }>;
    getManagers: () => Promise<{
        managers: import("..").Manager[];
    }>;
    addFiles: ({ id, files, }: {
        id: number;
        files: File[];
    }) => Promise<void>;
    createNotice: ({ title, contents, files, }: {
        title: string;
        contents: string;
        files: File[];
    }) => Promise<void>;
    deleteNotice: ({ id }: {
        id: number;
    }) => Promise<void>;
    deleteNoticeFile: ({ id, }: {
        id: number;
    }) => Promise<void>;
    editNotice: ({ id, title, contents, }: {
        id: number;
        title: string;
        contents: string;
    }) => Promise<void>;
    getNotice: ({ id }: {
        id: number;
    }) => Promise<{
        notice: import("..").NoticeDetail;
    }>;
    getNotices: () => Promise<{
        notices: import("..").Notice[];
    }>;
};
