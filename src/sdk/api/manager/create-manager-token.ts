import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';

export const createManagerToken = async ({
  name, password,
}: {
  name: string;
  password: string;
}) => {
  const url = `${getApiUrl()}/managers/token`;

  const { body, status } = await Sender.sendPostRequest<string>({
    url,
    body: {
      name,
      password,
    },
  });

  if (status !== 200) {
    throw new Error();
  }
  
  return {
    accessToken: body,
  };
};
