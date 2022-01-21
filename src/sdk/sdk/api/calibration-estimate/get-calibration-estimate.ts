import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { CalibrationEstimate } from '../../../model';

export const getCalibrationEstimate = async ({ id }: {
  id: number;
}) => {
  const url = `${getApiUrl()}/calibration-estimates/${id}`;

  const { body, status } = await Sender.sendGetRequest<CalibrationEstimate>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    calibrationEstimate: body,
  };
};
