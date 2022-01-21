export declare const requestCalibrationEstimates: ({ title, contents, requesterName, companyName, companyAddress, contact, email, }: {
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
