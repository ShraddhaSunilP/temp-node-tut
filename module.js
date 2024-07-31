const path = require('path');

console.log(path.sep)

console.log(`The Systems Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(), 
}
console.log(currentOS);