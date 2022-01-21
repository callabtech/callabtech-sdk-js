import Sender from '../../lib/sender';
import { getApiUrl } from '../../lib/url';
import { NoticeDetail } from '../../../model';

export const createNotice = async ({
  title, contents, files,
}: {
  title: string;
  contents: string;
  files: File[];
}) => {
  const url = `${getApiUrl()}/notices`;
  
  const formData = new FormData();

  formData.append('title', title);
  formData.append('contents', contents);
  
  files.forEach(file => {
    formData.append(`files`, file);
  })

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
