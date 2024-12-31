export default {
    syncRemindersFromPhone() {
        // Simulate fetching reminders from the phone app
        return new Promise((resolve) => {
            const reminders = [
                { id: 1, title: 'Reminder 1', category: 0, status: 'unfinished' },
                { id: 2, title: 'Reminder 2', category: 1, status: 'finished' },
                { id: 3, title: 'Reminder 3', category: 2, status: 'unfinished' },
                { id: 4, title: 'Reminder 4', category: 3, status: 'finished' }
            ];
            resolve(reminders);
        });
    },

    syncUserActionsToPhone(actions) {
        // Simulate sending user actions to the phone app
        return new Promise((resolve) => {
            console.log(`Syncing user actions to phone: ${actions}`);
            resolve();
        });
    },

    handleDataConflicts(remindersFromPhone, localReminders) {
        // Implement conflict resolution logic
        const resolvedReminders = localReminders.map(localReminder => {
            const phoneReminder = remindersFromPhone.find(r => r.id === localReminder.id);
            if (phoneReminder && phoneReminder.status !== localReminder.status) {
                // Resolve conflict by prioritizing the latest change
                return phoneReminder.status === 'finished' ? phoneReminder : localReminder;
            }
            return localReminder;
        });
        return resolvedReminders;
    }
};