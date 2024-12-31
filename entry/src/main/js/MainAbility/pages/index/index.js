import router from '@ohos.router';
import bluetoothService from '../../utils/bluetoothService';

export default {
    data: {
        reminders: [],
        quadrants: [[], [], [], []]
    },
    async onInit() {
        await this.initializeBluetooth();
        await this.syncReminders();
    },
    async initializeBluetooth() {
        await bluetoothService.initializeBluetooth();
        const devices = await bluetoothService.discoverDevices();
        if (devices.length > 0) {
            await bluetoothService.connectToDevice(devices[0].id);
        }
    },
    async syncReminders() {
        // Fetch reminders from the phone app over Bluetooth
        this.reminders = await bluetoothService.receiveData();
        this.populateQuadrants();
    },
    populateQuadrants() {
        this.quadrants = [[], [], [], []];
        this.reminders.forEach(reminder => {
            this.quadrants[reminder.category].push(reminder);
        });
    },
    async markAsFinished(reminder) {
        reminder.status = 'finished';
        this.populateQuadrants();
        // Sync the update to the phone app over Bluetooth
        await bluetoothService.sendData([{ id: reminder.id, status: 'finished' }]);
    },
    goToCategory(category) {
        console.log('navigate to category')
        // Navigate to the category page with the items in the selected category
        router.router({
            url: 'pages/cate/cate',
            params: {
                categoryItems: this.quadrants[category]
            }
        });
        console.log(`Navigating to category ${category}`);
    }
};