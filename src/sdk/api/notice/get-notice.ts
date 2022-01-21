import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { NoticeDetail } from '../../../model';

export const getNotice = async ({ id }: {
  id: number;
}) => {
  const url = `${getApiUrl()}/notices/${id}`;

  const { body, status } = await Sender.sendGetRequest<NoticeDetail>({
    url,
  });

  if (status !== 200) {
    throw new Error();
  }

  return {
    notice: body,
  };
};
