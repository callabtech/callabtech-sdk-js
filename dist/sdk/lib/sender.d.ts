interface Request<B, H> {
    url: string;
    body?: B;
    header?: H;
}
interface Response<D> {
    status: number;
    body: D;
}
interface CommonHeader {
    accessToken?: string;
    contentType?: 'multipart/form-data' | 'application/json';
}
declare const _default: {
    sendGetRequest: <D>({ url, header }: Request<undefined, CommonHeader>) => Promise<Response<D>>;
    sendPostRequest: <D_1>({ url, header, body }: Request<any, CommonHeader>) => Promise<Response<D_1>>;
    sendMultipartPostRequest: <D_2>({ url, header, body }: Request<FormData, CommonHeader>) => Promise<Response<D_2>>;
    sendPutRequest: <D_3>({ url, header, body }: Request<any, CommonHeader>) => Promise<Response<D_3>>;
    sendDeleteRequest: <D_4>({ url, header }: Request<undefined, CommonHeader>) => Promise<Response<D_4>>;
};
export default _default;
