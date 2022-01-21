import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { CalibrationEstimate } from '../../../model';

export const getCalibrationEstimates = async () => {
  const url = `${getApiUrl()}/calibration-estimates`;

  const { body, status } = await Sender.sendGetRequest<CalibrationEstimate[]>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    calibrationEstimates: body,
  };
};
