import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { Notice } from '../../../model';

export const getNotices = async () => {
  const url = `${getApiUrl()}/notices`;

  const { body, status } = await Sender.sendGetRequest<Notice[]>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    notices: body,
  };
  
};
