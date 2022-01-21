import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { Manager } from '../../../model';

export const getCurrentManager = async ({ accessToken }: {
  accessToken: string;
}) => {
  const url = `${getApiUrl()}/managers/me`;

  const { body, status } = await Sender.sendGetRequest<Manager>({
    url,
    header: {
      accessToken,
    },
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    manager: body,
  };
};