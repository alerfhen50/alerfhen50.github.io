function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
};
async function gameloop() {
    while (true){
        await sleep(100);
        postMessage(1);
    };
};
gameloop();