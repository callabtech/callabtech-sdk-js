import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';

export const deleteNoticeFile = async ({
  id,
}: {
  id: number
}) => {
  const url = `${getApiUrl()}/notices/files/${id}`;

  const { status } = await Sender.sendDeleteRequest<{ isSuccess: boolean }>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }
};
