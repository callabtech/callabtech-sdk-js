import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';

export const editNotice = async ({
  id, title, contents,
}: {
  id: number;
  title: string;
  contents: string;
}) => {
  const url = `${getApiUrl()}/notices/${id}`;

  const { status } = await Sender.sendPutRequest<{ isSuccess: boolean }>({
    url,
    body: {
      title,
      contents,
    },
  });

  if (status !== 200) {
    throw new Error();
  }
};
