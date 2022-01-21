import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { NoticeDetail } from '../../../model';

export const addFiles = async ({
  id, files,
}: {
  id: number;
  files: File[];
}) => {
  const url = `${getApiUrl()}/notices/${id}/files`;
  
  const formData = new FormData();
  
  files.forEach(file => {
    formData.append(`files`, file);
  });

  const { status } = await Sender.sendMultipartPostRequest<NoticeDetail>({
    url,
    body: formData,
    header: {
      contentType: 'multipart/form-data',
    },
  });

  if (status !== 200) {
    throw new Error();
  }
};
