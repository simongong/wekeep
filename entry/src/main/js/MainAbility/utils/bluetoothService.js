export default {
    initializeBluetooth() {
        // Initialize Bluetooth on the watch
        console.log('Initializing Bluetooth on the watch...');
        // Simulate Bluetooth initialization
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Bluetooth initialized.');
                resolve();
            }, 1000);
        });
    },

    discoverDevices() {
        // Discover Bluetooth devices
        console.log('Discovering Bluetooth devices...');
        // Simulate device discovery
        return new Promise((resolve) => {
            setTimeout(() => {
                const devices = [
                    { id: 'phone-01', name: 'My Phone' }
                ];
                console.log(`Devices discovered: ${JSON.stringify(devices)}`);
                resolve(devices);
            }, 2000);
        });
    },

    connectToDevice(deviceId) {
        // Connect to a Bluetooth device
        console.log(`Connecting to device ${deviceId}...`);
        // Simulate device connection
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Connected to device ${deviceId}.`);
                resolve();
            }, 1000);
        });
    },

    sendData(data) {
        // Send data over Bluetooth
        console.log(`Sending data over Bluetooth: ${JSON.stringify(data)}`);
        // Simulate data sending
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Data sent.');
                resolve();
            }, 500);
        });
    },

    receiveData() {
        // Receive data over Bluetooth
        console.log('Receiving data over Bluetooth...');
        // Simulate data reception
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = [
                    { id: 1, title: 'Reminder 1', category: 0, status: 'unfinished' },
                    { id: 2, title: 'Reminder 2', category: 1, status: 'finished' },
                    { id: 3, title: 'Reminder 3', category: 2, status: 'unfinished' },
                    { id: 4, title: 'Reminder 4', category: 3, status: 'finished' }
                ];
                console.log(`Data received: ${JSON.stringify(data)}`);
                resolve(data);
            }, 2000);
        });
    }
};