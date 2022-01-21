import { Manager } from '../../../model';
export declare const getCurrentManager: ({ accessToken }: {
    accessToken: string;
}) => Promise<{
    manager: Manager;
}>;
