import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { Manager } from '../../../model';

export const getManagers = async () => {
  const url = `${getApiUrl()}/managers`;

  const { body, status } = await Sender.sendGetRequest<Manager[]>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    managers: body,
  };
};