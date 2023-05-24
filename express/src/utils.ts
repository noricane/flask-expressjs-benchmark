export function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function sleep(fn:Function,wait:number, ...args:any[]) {
    await timeout(wait);
    return fn(...args);
}