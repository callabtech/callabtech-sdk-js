export const getApiUrl = (): string => {
  const sdkMode = process.env.CALLABTECH_SDK_MODE ? process.env.CALLABTECH_SDK_MODE : 'production';

  if (sdkMode === 'development') {
    const host = process.env.CALLABTECH_SDK_HOST ? process.env.CALLABTECH_SDK_HOST : 'http://localhost';
    const port = process.env.CALLABTECH_SDK_PORT ? Number(process.env.CALLABTECH_SDK_PORT) : 3000;

    return `${host}:${port}`;
  }
  
  return 'http://api.callabtech.com';
};
