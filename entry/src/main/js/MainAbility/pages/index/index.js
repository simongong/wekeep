import { mockReminders } from '../../utils/mockData';

export default {
    data: {
        reminders: [],
        quadrants: [[], [], [], []]
    },
    onInit() {
        this.syncReminders();
    },
    syncReminders() {
        // Use mock data for now
        this.reminders = mockReminders;
        this.populateQuadrants();
    },
    populateQuadrants() {
        this.quadrants = [[], [], [], []];
        this.reminders.forEach(reminder => {
            this.quadrants[reminder.category].push(reminder);
        });
    },
    markAsFinished(reminder) {
        reminder.status = 'finished';
        this.populateQuadrants();
    },
    goToCategory(category) {
        // Handle navigation to category view
        console.log(`Navigating to category ${category}`);
    }
};