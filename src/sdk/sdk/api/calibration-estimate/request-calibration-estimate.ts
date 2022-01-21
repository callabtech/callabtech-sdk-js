import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { CalibrationEstimate } from '../../../model';

export const requestCalibrationEstimates = async ({
  title, contents, requesterName, companyName, companyAddress, contact, email,
}: {
  title: string;
  contents: string;
  requesterName: string;
  companyName: string;
  companyAddress: string;
  contact: string;
  email: string;
}) => {
  const url = `${getApiUrl()}/calibration-estimates`;

  const { status } = await Sender.sendPostRequest<CalibrationEstimate[]>({
    url,
    body: {
      title,
      contents,
      requesterName,
      companyName,
      companyAddress,
      contact,
      email,
    },
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    isSuccess: true,
  };
};
