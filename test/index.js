const { CallabtechSDK } = require("../dist/index.js")

const test = async () => {
    const notices = await CallabtechSDK.getNotices();

    console.log(notices);
}

test();