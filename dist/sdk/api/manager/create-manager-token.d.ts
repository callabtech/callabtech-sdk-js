export declare const createManagerToken: ({ name, password, }: {
    name: string;
    password: string;
}) => Promise<{
    accessToken: string;
}>;
