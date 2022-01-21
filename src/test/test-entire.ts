import { CallabtechSDK } from '../sdk';

const test = async () => {
    const notices = await CallabtechSDK.getNotices();
    console.log(notices)
}

test();