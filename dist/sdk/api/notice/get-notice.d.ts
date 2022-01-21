import { NoticeDetail } from '../../../model';
export declare const getNotice: ({ id }: {
    id: number;
}) => Promise<{
    notice: NoticeDetail;
}>;
