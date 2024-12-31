export default {
    data: {
        categoryItems: []
    },
    onInit() {
        console.log('category page init');
        // Get the category items from the params passed during navigation
        this.categoryItems = this.params.categoryItems;
    }
};