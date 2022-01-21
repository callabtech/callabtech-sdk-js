import { CalibrationEstimate } from '../../../model';
export declare const getCalibrationEstimate: ({ id }: {
    id: number;
}) => Promise<{
    calibrationEstimate: CalibrationEstimate;
}>;
