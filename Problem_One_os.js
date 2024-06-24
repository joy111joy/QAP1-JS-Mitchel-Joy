// Import the os module
const os = require('os');

// Get the operating system
const osType = os.type();
console.log('The OS type is:', osType);

// Get the platform
const platform = os.platform();
console.log('The platform is:', platform);

// Get the architecture
const arch = os.arch();
console.log('The architecture is:', arch);

// Get the total memory
const totalMemory = os.totalmem();
console.log('The total memory is:', totalMemory);

// Get the free memory
const freeMemory = os.freemem();
console.log('The free memory is:', freeMemory);
