import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';

export const deleteNotice = async ({
  id
}: {
  id: number
}) => {
  const url = `${getApiUrl()}/notices/${id}`;

  const { status } = await Sender.sendDeleteRequest<{ isSuccess: boolean }>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }
};
